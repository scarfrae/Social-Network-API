function formatTime(date) {
    // dateOptions = { weekday:"long", year:"numeric", month:"short", day:"numeric"}
    //found from https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
    var today  = new Date();
    // const dateNow = date.toLocaleDateString('en-US', dateOptions) 
    const dateNow = today.toLocaleDateString('en-US');
    console.log(dateNow)
    return dateNow;
}
// console.log("Expected output: 04 Dec 1995 00:12:00 GMT")
// formatTime(new '2015-03-25T12:00:00-06:30');
module.exports = formatTime;