$(function() {

  test("standard", function() {
    var $iframe = $("iframe").src("delay.html?delay=2000", function(duration) {
      ok(duration > 0 && duration < 10000);
      console.log($("iframe").get(0));
      console.log(this);
      equals($("iframe").get(0), this, "passes iframe to onLoad handler, binding as 'this'");
      start();
    });
    equals(1,$iframe.length);
    equals($iframe.get(0), $("iframe").get(0), "returns iframe for chaining");
    stop();
  });

  test("callback is called if iframe loads before timeout", function() {
    var $iframe = $("iframe").src("delay.html?delay=500", function() {
      start();
      ok(true, "called correctly");
    }, {timeoutDuration: 2000});
    stop(5000);
  });

  test("onTimeout, not main callback, is called if iframe loads after timeout", function() {
    var $iframe = $("iframe").src("delay.html?delay=2000", function() {
      ok(false, "callback should not called due to timeout");
      start();
    }, {
      timeoutDuration: 500,
      timeout: function() {
        start();
        ok(true, "onTimeout called");
      }
    });
    stop(5000);
  });

  test("squirting", function() {
    $("iframe").squirt("<strong>iframe content</strong>", function(duration) {
      start();
      ok(duration > 0 && delay < 1000);
      equals($("iframe").contents().find("strong").html(), "iframe content");
    });
    stop();
  });

  test("squirting with timeout", function() {
    $("iframe").squirt("iframe test<br/><iframe src='delay.html?delay=100'></iframe>", function() {
      start();
      ok(duration > 0 && delay < 1000);
      equals($("iframe").contents().find("strong").html(), "iframe content");
    }, {
      timeoutDuration: 500,
      timeout: function() {
        start();
        ok(true, "onTimeout called");
      }
    });
    stop();
  });

});
