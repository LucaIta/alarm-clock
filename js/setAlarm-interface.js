var alarms = [];

$(document).ready(function(){
  $('#journal_entry').submit(function(event) {
    event.preventDefault();
    var hour = $('#hour').val();
    var minute = $('#minute').val();
    var hoursMinutes = hour + ":" + minute;
    alarms.push(hoursMinutes);
    console.log(alarms);
  });
});
