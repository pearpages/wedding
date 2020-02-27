$(".footer").load("./partials/footer.html");
$(".home_bottom").load("./partials/locations.html");
$(document).ready(function() {
  "use strict";
  $("#random").skippr({
    navType: "bubble",
    transition: "fade",
    autoPlay: true,
    autoPlayDuration: 4000,
    speed: 1000,
    arrows: false
  });
  $("#weddingcarousel").owlCarousel({
    items: 4,
    itemsScaleUp: true,
    navigationText: ["prev", "next"]
  });
});
