/**
 * UserRegistration entity interface
 */
export interface UserRegistration {
  /** Unique identifier for the user registration */
  id: string;
  
  /** Name of the registered user */
  name: string;
  
  /** ISO string timestamp when the registration was created */
  createdAt: string;
  
  /** ISO string timestamp when the registration was last updated */
  updatedAt: string;
}

/**
 * UserRegistration list item view - minimal fields for list displays
 */
export interface UserRegistrationListItem {
  /** Unique identifier for the user registration */
  id: string;
  
  /** Name of the registered user */
  name: string;
  
  /** ISO string timestamp when the registration was created */
  createdAt: string;
}

/**
 * UserRegistration display item view - formatted fields for detailed displays
 */
export interface UserRegistrationDisplayItem {
  /** Unique identifier for the user registration */
  id: string;
  
  /** Name of the registered user */
  name: string;
  
  /** Formatted creation date */
  createdAt: string;
  
  /** Formatted last update date */
  updatedAt: string;
}

/**
 * UserRegistration creation payload - excludes auto-generated fields
 */
export interface CreateUserRegistrationPayload {
  /** Name of the registered user */
  name: string;
}

/**
 * UserRegistration update payload - all fields optional except id
 */
export interface UpdateUserRegistrationPayload {
  /** Unique identifier for the user registration */
  id: string;
  
  /** Name of the registered user */
  name?: string;
}