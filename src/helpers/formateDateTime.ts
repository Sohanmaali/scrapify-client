/**
 * Formats a given date string or Date object into a readable format.
 * @param dateInput - The date string or Date object to format.
 * @param options - Optional configuration for formatting.
 * @returns A formatted date-time string.
 */
export function formatDateTime(
  dateInput: string | Date,
  options?: {
    includeTime?: boolean; // Whether to include time in the output
    locale?: string;       // Locale for formatting (default: "en-US")
    timeZone?: string;     // Timezone for consistent formatting (default: "UTC")
  }
): string {
  if (!dateInput) {
    throw new Error('Invalid date input');
  }

  const { includeTime = true, locale = 'en-US', timeZone = 'UTC' } = options || {};
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;

  if (isNaN(date.getTime())) {
    throw new Error('Invalid date');
  }

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone,
  };

  if (includeTime) {
    dateOptions.hour = '2-digit';
    dateOptions.minute = '2-digit';
    dateOptions.second = '2-digit';
    dateOptions.hour12 = true; // Use 12-hour format (AM/PM)
  }

  return new Intl.DateTimeFormat(locale, dateOptions).format(date);
}
