import { FormValidation } from './FormValidation';

/**
 * Form data type for FormValidation
 * Excludes system fields (id, createdAt, updatedAt)
 */
export type FormValidationFormData = Omit<FormValidation, 'id' | 'createdAt' | 'updatedAt'>;

/**
 * Convert entity to form data by removing system fields
 */
export const adaptFormValidationToFormData = (entity: FormValidation): FormValidationFormData => {
    const { id, createdAt, updatedAt, ...formData } = entity;
    return formData;
};

/**
 * Convert form data to entity by adding system fields
 */
export const adaptFormDataToFormValidation = (
    formData: FormValidationFormData,
    existing?: FormValidation
): FormValidation => {
    return {
        ...formData,
        id: existing?.id || crypto.randomUUID(),
        createdAt: existing?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
};
