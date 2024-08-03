export interface Todo {
  _id?: string;
  title: string;
  description: string;
  isComplete?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
