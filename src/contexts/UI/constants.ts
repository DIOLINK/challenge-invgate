import { AddTODO, ConfirmModal } from '@/components/Modals';
import { TSeverity } from '@/types';

export const MODAL_TYPES = {
  ADD_NEW_TODO: 'ADD_NEW_TODO',
  CONFIRMATION_MODAL: 'CONFIRMATION_MODAL',
};

export const MODAL_COMPONENTS = {
  [MODAL_TYPES.ADD_NEW_TODO]: AddTODO,
  [MODAL_TYPES.CONFIRMATION_MODAL]: ConfirmModal,
};

export const UI_INITIAL_STATE = {
  modalType: '',
  modalProps: undefined,
};

export const SNACKBAR_SEVERITY: { [key: string]: TSeverity } = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

export const ACTIONS_TYPE = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
};
