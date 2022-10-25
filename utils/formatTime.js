function formatTime(date) {
    //referenced from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    const dateNow  = new Date(date);
    newDate = dateNow.toUTCString();

    return newDate;
}
// console.log("Expected output: 04 Dec 1995 00:12:00 GMT")
// formatTime(new '2015-03-25T12:00:00-06:30');
module.exports = formatTime;