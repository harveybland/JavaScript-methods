// Get days between dates
function getDays(date1, date2) {
  console.log(new Date(date2 - date1).getDate() - 1);
}

getDays(new Date('June 14, 2019'), new Date('June 20, 2019'));
getDays(new Date('December 29, 2018'), new Date('January 1, 2019'));

// Date is the 24th decemeber
function timeForMilkAndCookies(date) {
  console.log(date.getMonth() === 11 && date.getDate() === 24);
}

timeForMilkAndCookies(new Date(2013, 11, 24));
