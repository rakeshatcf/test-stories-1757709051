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
 * Minimal interface for list views showing basic DisplayUserList information
 */
export interface DisplayUserListItem {
  /** Unique identifier for the display user list */
  id: string;
  
  /** Name of the display user list */
  name: string;
}

/**
 * Extended interface for detailed display views of DisplayUserList
 */
export interface DisplayUserListDisplayItem extends DisplayUserList {
  /** Formatted creation date for display */
  formattedCreatedAt?: string;
  
  /** Formatted update date for display */
  formattedUpdatedAt?: string;
}

/**
 * Interface for creating a new DisplayUserList (excludes auto-generated fields)
 */
export interface CreateDisplayUserListRequest {
  /** Name of the display user list */
  name: string;
}

/**
 * Interface for updating an existing DisplayUserList
 */
export interface UpdateDisplayUserListRequest {
  /** Name of the display user list */
  name?: string;
}