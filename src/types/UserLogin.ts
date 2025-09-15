/**
 * UserLogin entity interface
 */
export interface UserLogin {
  /**
   * Unique identifier for the user login
   */
  id: string;

  /**
   * Name associated with the user login
   */
  name: string;

  /**
   * Timestamp when the user login was created
   */
  createdAt: string;

  /**
   * Timestamp when the user login was last updated
   */
  updatedAt: string;
}

/**
 * UserLogin interface for list view display
 */
export interface UserLoginListItem {
  /**
   * Unique identifier for the user login
   */
  id: string;

  /**
   * Name associated with the user login
   */
  name: string;

  /**
   * Timestamp when the user login was created
   */
  createdAt: string;
}

/**
 * UserLogin interface for detailed display view
 */
export interface UserLoginDisplayItem {
  /**
   * Unique identifier for the user login
   */
  id: string;

  /**
   * Name associated with the user login
   */
  name: string;

  /**
   * Timestamp when the user login was created
   */
  createdAt: string;

  /**
   * Timestamp when the user login was last updated
   */
  updatedAt: string;
}

/**
 * UserLogin interface for creation (without id and timestamps)
 */
export interface CreateUserLogin {
  /**
   * Name associated with the user login
   */
  name: string;
}

/**
 * UserLogin interface for updates (all fields optional except id)
 */
export interface UpdateUserLogin {
  /**
   * Unique identifier for the user login
   */
  id: string;

  /**
   * Name associated with the user login
   */
  name?: string;
}