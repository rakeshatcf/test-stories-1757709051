import { DisplayUserList } from './DisplayUserList';

/**
 * Form data type for DisplayUserList
 * Excludes system fields (id, createdAt, updatedAt)
 */
export type DisplayUserListFormData = Omit<DisplayUserList, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Convert entity to form data by removing system fields
 */
export const adaptDisplayUserListToFormData = (entity: DisplayUserList): DisplayUserListFormData => {
    const { id, createdAt, updatedAt, ...formData } = entity;
    return formData;
};

/**
 * Convert form data to entity by adding system fields
 */
export const adaptFormDataToDisplayUserList = (
    formData: DisplayUserListFormData,
    existing?: DisplayUserList
): DisplayUserList => {
    return {
        ...formData,
        id: existing?.id || crypto.randomUUID(),
        createdAt: existing?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
};
