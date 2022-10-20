function formatTime(date) {
    const DateNow = date.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    return DateNow;
}
// const TimeNow = formatTime(
//     1666276670);

//     console.log(TimeNow);
module.exports = formatTime;