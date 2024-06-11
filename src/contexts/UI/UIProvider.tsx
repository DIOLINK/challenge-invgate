import { TSTypeModel } from '@/types';
import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { MODAL_COMPONENTS, MODAL_TYPES } from './constants';

interface UIProviderProps {}

export interface UIState {
  modalType: string;
  modalProps?: any;
  snackbarProps?: any;
  backdropLoader: boolean;
}

const INIT_MODAL = {
  type: MODAL_TYPES.ADD_NEW_TODO,
  property: {},
};

export const UIProvider = ({
  children,
}: PropsWithChildren<UIProviderProps>) => {
  const [showModal, setShowModal] = useState(false);
  const [typeModal, setTypeModel] = useState<TSTypeModel>(INIT_MODAL);

  const openModal = () => {
    setShowModal(true);
  };

  const renderModal = (): JSX.Element | null => {
    const ModalComponent = MODAL_COMPONENTS[typeModal?.type];
    if (!ModalComponent) return null;

    return (
      <ModalComponent
        showModal={showModal}
        handleClose={() => {
          setShowModal(false), setTypeModel(INIT_MODAL);
        }}
        {...typeModal?.property}
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
  setTypeModel: Dispatch<React.SetStateAction<TSTypeModel>>;
  openModal: () => void;
}

export const UIContext = createContext<UIContextProps>({
  setTypeModel: () => {},
  openModal: () => {},
});

export const useUIContext = () => {
  return useContext(UIContext);
};
