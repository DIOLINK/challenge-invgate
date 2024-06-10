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
