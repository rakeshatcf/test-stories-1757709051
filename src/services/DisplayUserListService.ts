export interface DisplayUserList {
  id: string;
  name: string;
  description?: string;
  users: string[];
  createdAt: string;
  updatedAt: string;
}

export interface DisplayUserListFormData {
  name: string;
  description?: string;
  users: string[];
}