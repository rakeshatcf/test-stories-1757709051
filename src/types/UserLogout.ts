/**
 * UserLogout entity interface
 */
export interface UserLogout {
  /**
   * Unique identifier for the user logout record
   */
  id: string;

  /**
   * Name associated with the logout event
   */
  name: string;

  /**
   * Timestamp when the logout record was created
   */
  createdAt: string;

  /**
   * Timestamp when the logout record was last updated
   */
  updatedAt: string;
}

/**
 * UserLogout interface for list view display
 */
export interface UserLogoutListItem {
  /**
   * Unique identifier for the user logout record
   */
  id: string;

  /**
   * Name associated with the logout event
   */
  name: string;

  /**
   * Timestamp when the logout record was created
   */
  createdAt: string;
}

/**
 * UserLogout interface for detailed display view
 */
export interface UserLogoutDisplayItem {
  /**
   * Unique identifier for the user logout record
   */
  id: string;

  /**
   * Name associated with the logout event
   */
  name: string;

  /**
   * Timestamp when the logout record was created
   */
  createdAt: string;

  /**
   * Timestamp when the logout record was last updated
   */
  updatedAt: string;
}

/**
 * UserLogout interface for create operations
 */
export interface CreateUserLogout {
  /**
   * Name associated with the logout event
   */
  name: string;
}

/**
 * UserLogout interface for update operations
 */
export interface UpdateUserLogout {
  /**
   * Name associated with the logout event
   */
  name?: string;
}