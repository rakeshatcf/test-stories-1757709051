export interface UserLogout {
  id: string;
  userId: string;
  logoutTime: string;
  sessionDuration: number;
  reason?: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserLogoutFormData {
  userId: string;
  logoutTime: string;
  sessionDuration: number;
  reason?: string;
  ipAddress?: string;
  userAgent?: string;
}