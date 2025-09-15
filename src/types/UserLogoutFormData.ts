import { UserLogout } from './UserLogout';

/**
 * Form data type for UserLogout
 * Excludes system fields (id, createdAt, updatedAt)
 */
export type UserLogoutFormData = Omit<UserLogout, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Convert entity to form data by removing system fields
 */
export const adaptUserLogoutToFormData = (entity: UserLogout): UserLogoutFormData => {
    const { id, createdAt, updatedAt, ...formData } = entity;
    return formData;
};

/**
 * Convert form data to entity by adding system fields
 */
export const adaptFormDataToUserLogout = (
    formData: UserLogoutFormData,
    existing?: UserLogout
): UserLogout => {
    return {
        ...formData,
        id: existing?.id || crypto.randomUUID(),
        createdAt: existing?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
};
