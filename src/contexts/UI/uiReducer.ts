import { UIState } from '@/types';
import { ModalProps } from 'react-bootstrap';
import { ACTIONS_TYPE } from './constants';

export const uiReducer = (
  state: UIState,
  action: {
    type: string;
    payload: { modalType: string; modalProps?: ModalProps };
  }
): UIState => {
  switch (action.type) {
    case ACTIONS_TYPE.SHOW_MODAL:
      return {
        ...state,
        modalType: action.payload.modalType,
        modalProps: {
          ...action.payload.modalProps,
          showModal: true,
        },
      };
    case ACTIONS_TYPE.HIDE_MODAL:
      return {
        ...state,
        modalType: '',
        modalProps: { showModal: false },
      };
    default:
      return state;
  }
};
