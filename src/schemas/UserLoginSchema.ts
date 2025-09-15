import * as yup from 'yup';

export const userLoginSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .trim()
    .min(1, 'Name cannot be empty')
});

export type UserLoginFormData = yup.InferType<typeof userLoginSchema>;