import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { MODAL_COMPONENTS } from './constants';

interface UIProviderProps {}

export interface UIState {
  modalType: string;
  modalProps?: any;
  snackbarProps?: any;
  backdropLoader: boolean;
}

export const UIProvider = ({
  children,
}: PropsWithChildren<UIProviderProps>) => {
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModel] = useState('ADD_NEW_TODO');
  const openModal = () => {
    setShowModal(true);
  };

  const renderModal = (): JSX.Element | null => {
    const ModalComponent = MODAL_COMPONENTS[typeModal];
    if (!ModalComponent) return null;

    return (
      <ModalComponent
        showModal={showModal}
        handleClose={() => setShowModal(false)}
      />
    );
  };

  return (
    <UIContext.Provider
      value={{
        setTypeModel,
        openModal,
      }}
    >
      {renderModal()}
      {children}
    </UIContext.Provider>
  );
};

interface UIContextProps {
  setTypeModel: Dispatch<React.SetStateAction<string>>;
  openModal: () => void;
}

export const UIContext = createContext<UIContextProps>({
  setTypeModel: () => {},
  openModal: () => {},
});

export const useUIContext = () => {
  return useContext(UIContext);
};
