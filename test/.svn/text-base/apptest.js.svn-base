$(function() {

  test("empty app", function() {
    var app = $.app();
    testRE(app, /<html>/);
  });

  /*
  test("simple app", function() {
    var app = $.app({template: "<html></html>"});
    equals(app.asHTML(), "<html></html>");
  });
  */

  test("app with body", function() {
    var app = $.app();
    app.attachHTML("core", "hello world!");
    testRE(app, /<body>\s*hello world!\s*<\/body>/);
  });

  /*
  test("app with various content", function() {
    var app = $.app();
    app.attachHTML("head",   "metastuff");
    app.attachHTML("header", "example.com");
    app.attachHTML("body",   "hello world!");
    app.attachHTML("footer", "copyright");
    equals(app.asHTML(), "<html><head>metastuff</head><body>example.com hello world! copyright</body></html>");
  });
  */

  test("linked stylesheets", function() {
    var app = $.app();
    app.attachLinkedStylesheets("css/fancy.css");
    app.attachLinkedStylesheets("http://example.com/good.css", "fine.css");
    testRE(app, /<link rel="stylesheet" type="text\/css" href="css\/fancy.css"><\/link>\s*<link rel="stylesheet" type="text\/css" href="http:\/\/example.com\/good.css"><\/link>\s*<link rel="stylesheet" type="text\/css" href="fine.css"><\/link>/);
  });

  test("linked scripts", function() {
    var app = $.app();
    app.attachLinkedScripts("utils.js");
    testRE(app, /<script type="text\/javascript" src="utils.js"><\/script>/);
  });

  test("stylesheets", function() {
    var app = $.app();
    app.attachStylesheets("body { background: yellow; }");
    testRE(app, /<style>\s*body { background: yellow; }\s*<\/style>/);
  });

  test("scripts", function() {
    var app = $.app();
    app.attachScripts('x=100;');
    testRE(app, /<script type="text\/javascript">\s*x=100;\s*<\/script>\s*/);
  });

  test("sequencing", function() {
    var app = $.app();
    app.attachScripts('x=100;');
    app.attachStylesheets('body { color: red; }');
    app.attachScripts('y=200;');
    testRE(app, /<script type="text\/javascript">\s*x=100;\s*<\/script>\s*<style>\s*body { color: red; }\s*<\/style>\s*<script type="text\/javascript">\s*y=200;\s*<\/script>/);
  });


  /*
  test("empty script", function() {
    var app = $.app({template: "[[scripts]]"});
    app.attachScripts('');
    testRE(app, /<head>\s*<\/head>/);
  });
  */

  test("decoder", function() {
    var app = $.app({template: "<html>[[body]]</html>", decode: function(s) { return "**"+s+"**"; }});
    app.attachHTML("body", "hello world!");
    equals(app.asHTML(), "<html>**hello world!**</html>");
  });

  function testRE(app, re) {
    ok(re.test(app.asHTML()), "no match. App HTML was >>>"+app.asHTML()+"<<<");
  }

});
