import moment from "moment";

export default function DateDifference(date) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const tempDate = new Date();
  const Currentdate = tempDate.getTime();
  const givenDate = new Date(date);
  const DifferenceInTime = givenDate.getTime() - Currentdate;
  // To calculate the no. of days between two dates
  const DifferenceInDays = DifferenceInTime / (1000 * 3600 * 24);
  const dateDiff = Math.round(DifferenceInDays);
  if (dateDiff <= 1) {
    return " Today";
  } else if (dateDiff === 2) {
    return " After Tomorrow";
  } else {
    const year =
      givenDate.getFullYear() === moment().format("YYYY") &&
      `${givenDate.getFullYear()}`;
    return givenDate.getDay() + " " + monthNames[givenDate.getMonth()] + year;
  }
}
