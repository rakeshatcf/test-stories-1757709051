/**
 * Main DisplayUserList entity interface
 */
export interface DisplayUserList {
  /** Unique identifier for the display user list */
  id: string;
  
  /** Name of the display user list */
  name: string;
  
  /** ISO string timestamp when the display user list was created */
  createdAt: string;
  
  /** ISO string timestamp when the display user list was last updated */
  updatedAt: string;
}

/**
 * Minimal interface for list views showing basic information
 */
export interface DisplayUserListItem {
  /** Unique identifier for the display user list */
  id: string;
  
  /** Name of the display user list */
  name: string;
}

/**
 * Interface for display views with formatted timestamps
 */
export interface DisplayUserListDisplay {
  /** Unique identifier for the display user list */
  id: string;
  
  /** Name of the display user list */
  name: string;
  
  /** ISO string timestamp when the display user list was created */
  createdAt: string;
  
  /** ISO string timestamp when the display user list was last updated */
  updatedAt: string;
}

/**
 * Interface for creating a new DisplayUserList (excludes auto-generated fields)
 */
export interface CreateDisplayUserList {
  /** Name of the display user list */
  name: string;
}

/**
 * Interface for updating an existing DisplayUserList (all fields optional except id)
 */
export interface UpdateDisplayUserList {
  /** Unique identifier for the display user list */
  id: string;
  
  /** Name of the display user list */
  name?: string;
}