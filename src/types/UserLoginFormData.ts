import { UserLogin } from './UserLogin';

/**
 * Form data type for UserLogin
 * Excludes system fields (id, createdAt, updatedAt)
 */
export type UserLoginFormData = Omit<UserLogin, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Convert entity to form data by removing system fields
 */
export const adaptUserLoginToFormData = (entity: UserLogin): UserLoginFormData => {
    const { id, createdAt, updatedAt, ...formData } = entity;
    return formData;
};

/**
 * Convert form data to entity by adding system fields
 */
export const adaptFormDataToUserLogin = (
    formData: UserLoginFormData,
    existing?: UserLogin
): UserLogin => {
    return {
        ...formData,
        id: existing?.id || crypto.randomUUID(),
        createdAt: existing?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
};
