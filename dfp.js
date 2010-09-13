Drupal.behaviors.googleAdmanager = function (context) {
  $("div.gam-banner").each(function() {
    var holder = $(this).attr("id").replace(/^gam-content/, "gam-holder");
    $("#" + holder).css({"width": $(this).width(), "height": $(this).height()});
    $(this).css($("#" + holder).offset());
  });
};
// Other Drupal behaviors may change div position,
// so we need to run it again on load event.
$(window).load(function() {Drupal.behaviors.googleAdmanager();});
$(window).resize(function() {Drupal.behaviors.googleAdmanager();});
