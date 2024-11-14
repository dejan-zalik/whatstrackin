const generateMonth = (year: number, month: number) => {
  // Get the number of days in the month
  const date = new Date(year, month, 0); // month is 0-indexed
  const numDays = date.getDate();

  // Generate an array with days of the month
  let daysOfMonth = [];
  for (let day = 1; day <= numDays; day++) {
    daysOfMonth.push(day);
  }

  return daysOfMonth;
};

export default generateMonth;
