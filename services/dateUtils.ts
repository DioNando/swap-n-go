// dateUtils.ts

/**
 * Formats a date to a readable string format, e.g., "January 1, 2023"
 * @param date - The date to format
 * @returns A formatted date string
 */
export function formatDate(date: Date | string): string {
    // If the input is a string, convert it to a Date object
    const dateObj = typeof date === "string" ? new Date(date) : date;
  
    // Format options
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
  
    return dateObj.toLocaleDateString("en-US", options);
  }
  
  /**
   * Formats a date and time to a readable string format, e.g., "January 1, 2023, 14:30"
   * @param date - The date to format
   * @returns A formatted date and time string
   */
  export function formatDateTime(date: Date | string): string {
    const dateObj = typeof date === "string" ? new Date(date) : date;
  
    // Format options
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
  
    return dateObj.toLocaleDateString("en-US", options);
  }
  
  /**
   * Checks if a given date is today.
   * @param date - The date to check
   * @returns True if the date is today, false otherwise
   */
  export function isToday(date: Date | string): boolean {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const today = new Date();
  
    return (
      dateObj.getDate() === today.getDate() &&
      dateObj.getMonth() === today.getMonth() &&
      dateObj.getFullYear() === today.getFullYear()
    );
  }
  