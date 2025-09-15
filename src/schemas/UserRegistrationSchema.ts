import * as yup from 'yup';

export const userRegistrationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .trim()
    .min(1, 'Name cannot be empty')
    .max(100, 'Name must be less than 100 characters')
});

export type UserRegistrationFormData = yup.InferType<typeof userRegistrationSchema>;