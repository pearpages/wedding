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
});
var main_menu = new main_menu.dd("main_menu");
main_menu.init("main_menu", "menuhover");
