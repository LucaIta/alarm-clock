$(document).ready(function() {
  setInterval( function(){
    $("#currentTime").text(moment().format('h:mm'));
    alarms.forEach(function(alarm) {
      if (moment().format('h:mm') == alarm) {
        $("#alarmPic").prepend("<img id='imgfinger' src='https://s-media-cache-ak0.pinimg.com/736x/a0/7a/c8/a07ac8ab1b261f824dc3f06441d15403.jpg'/>");
      }
    });
  }, 1000);
});
