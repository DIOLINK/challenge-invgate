import { UIState } from '@/types';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';
import { ACTIONS_TYPE, MODAL_COMPONENTS, UI_INITIAL_STATE } from './constants';
import { uiReducer } from './uiReducer';

interface UIProviderProps {}

export const UIProvider = ({
  children,
}: PropsWithChildren<UIProviderProps>) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  function hideModal() {
    dispatch({
      type: ACTIONS_TYPE.HIDE_MODAL,
      payload: {
        modalType: '',
      },
    });
  }

  function showModal(modalType: string, modalProps?: any) {
    dispatch({
      type: ACTIONS_TYPE.SHOW_MODAL,
      payload: { modalType, modalProps },
    });
  }

  const renderModal = (): JSX.Element | null => {
    const ModalComponent = MODAL_COMPONENTS[state.modalType];
    if (!state.modalType || !ModalComponent) return null;

    return <ModalComponent {...state.modalProps} />;
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        hideModal,
        showModal,
      }}
    >
      {renderModal()}
      {children}
    </UIContext.Provider>
  );
};

interface UIContextProps extends UIState {
  hideModal: () => void;
  showModal: (modalType: string, modalProps?: any) => void;
}

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

export const useUIContext = () => {
  return useContext(UIContext);
};
