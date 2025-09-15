import { UserRegistration } from './UserRegistration';

/**
 * Form data type for UserRegistration
 * Excludes system fields (id, createdAt, updatedAt)
 */
export type UserRegistrationFormData = Omit<UserRegistration, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Convert entity to form data by removing system fields
 */
export const adaptUserRegistrationToFormData = (entity: UserRegistration): UserRegistrationFormData => {
    const { id, createdAt, updatedAt, ...formData } = entity;
    return formData;
};

/**
 * Convert form data to entity by adding system fields
 */
export const adaptFormDataToUserRegistration = (
    formData: UserRegistrationFormData,
    existing?: UserRegistration
): UserRegistration => {
    return {
        ...formData,
        id: existing?.id || crypto.randomUUID(),
        createdAt: existing?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
};
