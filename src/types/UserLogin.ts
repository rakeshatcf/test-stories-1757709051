/**
 * UserLogin entity interface
 */
export interface UserLogin {
  /** Unique identifier for the user login */
  id: string;
  
  /** Name associated with the user login */
  name: string;
  
  /** ISO string timestamp when the user login was created */
  createdAt: string;
  
  /** ISO string timestamp when the user login was last updated */
  updatedAt: string;
}

/**
 * UserLogin interface for list view display
 */
export interface UserLoginListItem {
  /** Unique identifier for the user login */
  id: string;
  
  /** Name associated with the user login */
  name: string;
  
  /** ISO string timestamp when the user login was created */
  createdAt: string;
}

/**
 * UserLogin interface for detailed display view
 */
export interface UserLoginDisplayItem {
  /** Unique identifier for the user login */
  id: string;
  
  /** Name associated with the user login */
  name: string;
  
  /** ISO string timestamp when the user login was created */
  createdAt: string;
  
  /** ISO string timestamp when the user login was last updated */
  updatedAt: string;
}

/**
 * UserLogin interface for create/update operations
 */
export interface UserLoginInput {
  /** Name associated with the user login */
  name: string;
}

/**
 * UserLogin interface for update operations
 */
export interface UserLoginUpdate {
  /** Name associated with the user login */
  name?: string;
}