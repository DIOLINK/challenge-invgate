import { AddTODO } from '@/components/Modals';
import { TSeverity } from '@/types';

export const MODAL_TYPES = {
  ADD_NEW_TODO: 'ADD_NEW_TODO',
};

export const MODAL_COMPONENTS = {
  [MODAL_TYPES.ADD_NEW_TODO]: AddTODO,
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
