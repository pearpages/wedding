var $ = jQuery.noConflict();
$(window).load(function() {
  "use strict";
  var $titlefront = $(".title_front").hide();
  var $titleunder = $(".title_under").hide();
  var $bestman = $(".bestman span").hide();
  var $footernames = $(".footer_names").hide();

  $titlefront.show().arctext({ radius: 250 });
  $titleunder.show().arctext({ radius: 180, dir: -1 });
  $bestman.show().arctext({ radius: 80 });
  $footernames.show().arctext({ radius: 120, dir: -1 });

  $("#defaultCountdown").countdown({
    until: new Date(2020, 9 - 1, 12, 12),
    format: "y-o-d-h"
  });
});
var main_menu = new main_menu.dd("main_menu");
main_menu.init("main_menu", "menuhover");
