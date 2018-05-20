function playNav() {
  let lastShown = $(".workWindow");

  $(".workshops").click(function() {
    lastShown.hide();
    $(".workWindow").show();
     lastShown = $(".workWindow");
  });

  $(".pralines").click(function() {
   lastShown.hide();
    $(".praWindow").show();
    lastShown = $(".praWindow");
  });

  $(".enclosures").click(function() {
    lastShown.hide();
    $(".encloWindow").show();
    lastShown = $(".encloWindow");
  });

  $(".about").click(function() {
    lastShown.hide();
    $(".aboutWindow").show();
    lastShown = $(".aboutWindow");
  });
}


$(document).ready(playNav)

