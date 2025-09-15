/**
 * FormValidation entity interface
 */
export interface FormValidation {
  /** Unique identifier for the form validation */
  id: string;
  
  /** Name of the form validation */
  name: string;
  
  /** ISO string timestamp when the form validation was created */
  createdAt: string;
  
  /** ISO string timestamp when the form validation was last updated */
  updatedAt: string;
}

/**
 * FormValidation list item view - minimal fields for list displays
 */
export interface FormValidationListItem {
  /** Unique identifier for the form validation */
  id: string;
  
  /** Name of the form validation */
  name: string;
  
  /** ISO string timestamp when the form validation was created */
  createdAt: string;
}

/**
 * FormValidation display item view - fields for detailed displays
 */
export interface FormValidationDisplayItem {
  /** Unique identifier for the form validation */
  id: string;
  
  /** Name of the form validation */
  name: string;
  
  /** ISO string timestamp when the form validation was created */
  createdAt: string;
  
  /** ISO string timestamp when the form validation was last updated */
  updatedAt: string;
}

/**
 * FormValidation creation payload - excludes auto-generated fields
 */
export interface CreateFormValidationPayload {
  /** Name of the form validation */
  name: string;
}

/**
 * FormValidation update payload - all fields optional except id
 */
export interface UpdateFormValidationPayload {
  /** Unique identifier for the form validation */
  id: string;
  
  /** Name of the form validation */
  name?: string;
}