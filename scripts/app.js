$(document).ready(function () {
  var $menu = $("#sidebar-wrapper");

  $(document)
    .on("click", ".js-menu-open", function() {
      $menu.addClass("open");

      return false;
    })
    .on("click", ".js-menu-close", function() {
      $menu.removeClass("open");

      return false;
    });
});
