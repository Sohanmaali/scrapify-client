type ValidationRules = {
    [key: string]: {
      required?: boolean;
      type?: 'string' | 'number' | 'email';
      minLength?: number;
      maxLength?: number;
      min?: number;
      max?: number;
    };
  };
  
  type ValidationErrors = {
    [key: string]: string;
  };
  
  export function validateObject(
    data: Record<string, any>,
    rules: ValidationRules
  ): ValidationErrors {
    const errors: ValidationErrors = {};
  
    for (const field in rules) {
      const value = data[field];
      const rule = rules[field];
  
      // Check if required
      if (rule.required && (value === undefined || value === null || value === '')) {
        errors[field] = `${field} is required.`;
        continue;
      }
  
      // Skip further validation if value is empty and not required
      if (!rule.required && (value === undefined || value === null || value === '')) {
        continue;
      }
  
      // Check type
      if (rule.type) {
        if (rule.type === 'string' && typeof value !== 'string') {
          errors[field] = `${field} must be a string.`;
        } else if (rule.type === 'number' && typeof value !== 'number') {
          errors[field] = `${field} must be a number.`;
        } else if (rule.type === 'email') {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            errors[field] = `${field} must be a valid email address.`;
          }
        }
      }
  
      // Check string length
      if (rule.type === 'string') {
        if (rule.minLength && value.length < rule.minLength) {
          errors[field] = `${field} must be at least ${rule.minLength} characters long.`;
        }
        if (rule.maxLength && value.length > rule.maxLength) {
          errors[field] = `${field} must be no more than ${rule.maxLength} characters long.`;
        }
      }

      // Check number range
      if (rule.type === 'number') {
        if (rule.min !== undefined && value < rule.min) {
          errors[field] = `${field} must be at least ${rule.min}.`;
        }
        if (rule.max !== undefined && value > rule.max) {
          errors[field] = `${field} must be no more than ${rule.max}.`;
        }
      }
    }
  
    return errors;
  }
  