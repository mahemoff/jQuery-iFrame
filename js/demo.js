$(function() {
  $("#load").click(function() {
    $("#status").show().html("Loading ...");
    $("iframe").src("http://"+$("#url").val(), function(duration) {
        $("#status").blink("Loaded in " + duration + "ms");
      }, {
        timeout: $("#timeout").val(),
        onTimeout: function() { $("#status").blink("Timed out!"); }
      }
    );
  });
  $("body").keypress(function(ev) {
    if (ev.which==13) $("#load").click();
  });
  $("#load").click();
});

$.fn.blink = function(message) {
  $(this).animate({opacity: 0.01}, 200, function() {
    $(this).html(message).show(); $(this).animate({opacity:1}, 200, function() {
      $(this).animate({opacity: 0.1}, 200, function() {
        $(this).animate({opacity: 1}, 200)
      })
    })
  });
}
