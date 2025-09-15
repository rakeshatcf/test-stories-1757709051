export interface UserLogout {
  id: string;
  userId: string;
  logoutTime: string;
  sessionDuration: number;
  ipAddress?: string;
  userAgent?: string;
  reason?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserLogoutFormData {
  userId: string;
  logoutTime: string;
  sessionDuration: number;
  ipAddress?: string;
  userAgent?: string;
  reason?: string;
}