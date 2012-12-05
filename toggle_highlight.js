
function toggle_hilight() {
  for (var i=0;i<document.styleSheets.length;i++) {
    var stylesheet = document.styleSheets[i];
    if (stylesheet.href && stylesheet.href.match(/.*shTheme[a-zA-Z]*\.css/)) {
      stylesheet.disabled = !stylesheet.disabled;
    }
  }
}

toggle_hilight();
