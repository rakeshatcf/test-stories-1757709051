export interface UserLogin {
  id: string;
  username: string;
  email: string;
  lastLoginAt: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserLoginFormData {
  username: string;
  email: string;
  password: string;
  isActive?: boolean;
}