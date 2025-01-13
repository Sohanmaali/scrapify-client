class DateTimeHelper {
  // Define a static method to display the date
  static DisplayDate = (stringDate: any) => {
    // Create a date object

    if (!stringDate) return null;
    const date = new Date(stringDate); // Month is 0-indexed (0 = January)

    // Format the date using Intl.DateTimeFormat
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(date);

    return formattedDate; // Return the formatted date
  };
}



export default DateTimeHelper;
