import { ModalProps } from 'react-bootstrap';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type TSeverity = 'success' | 'info' | 'warning' | 'error';

export interface TSTypeModel {
  type: string;
  property: {};
}

export interface Filters {
  search: string;
  selectFilter: string;
}

export interface ACTIONS_TYPES {
  SHOW_MODAL: 'SHOW_MODAL';
  HIDE_MODAL: 'HIDE_MODAL';
}

export interface UIState {
  modalType: string;
  modalProps?: ModalProps;
}
