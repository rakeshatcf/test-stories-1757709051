import * as yup from 'yup';

export const formValidationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .trim()
    .min(1, 'Name cannot be empty')
});

export type FormValidationData = yup.InferType<typeof formValidationSchema>;