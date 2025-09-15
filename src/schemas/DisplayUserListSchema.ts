import * as yup from 'yup';

export const displayUserListSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .trim()
    .min(1, 'Name cannot be empty')
});

export type DisplayUserListFormData = yup.InferType<typeof displayUserListSchema>;