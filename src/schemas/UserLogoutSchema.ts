import * as yup from 'yup';

export const userLogoutSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .trim()
    .min(1, 'Name cannot be empty')
});

export type UserLogoutFormData = yup.InferType<typeof userLogoutSchema>;