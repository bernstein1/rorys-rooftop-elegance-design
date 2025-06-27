
/**
 * Sanitizes user input to prevent malicious content
 * @param input - The string input to sanitize
 * @returns Sanitized string
 */
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .slice(0, 1000); // Limit length to prevent DoS
};

/**
 * Sanitizes email input specifically
 * @param email - The email string to sanitize
 * @returns Sanitized email string
 */
export const sanitizeEmail = (email: string): string => {
  if (typeof email !== 'string') return '';
  
  return email
    .trim()
    .toLowerCase()
    .replace(/[<>]/g, '')
    .slice(0, 254); // RFC 5321 limit
};

/**
 * Validates and sanitizes form data
 * @param data - Object containing form data
 * @returns Sanitized form data object
 */
export const sanitizeFormData = (data: Record<string, any>): Record<string, any> => {
  const sanitized: Record<string, any> = {};
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      if (key.toLowerCase().includes('email')) {
        sanitized[key] = sanitizeEmail(value);
      } else {
        sanitized[key] = sanitizeInput(value);
      }
    } else {
      sanitized[key] = value;
    }
  }
  
  return sanitized;
};
