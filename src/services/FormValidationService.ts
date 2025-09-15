export interface FormValidation {
  id: string;
  name: string;
  rules: ValidationRule[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ValidationRule {
  field: string;
  type: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern';
  value?: string | number;
  message: string;
}

export interface FormValidationFormData {
  name: string;
  rules: ValidationRule[];
  isActive: boolean;
}