
toggle_hilight = () ->
  for stylesheet in document.styleSheets
    if stylesheet.href && stylesheet.href.match(/.*shTheme[a-zA-Z]*\.css/)
      stylesheet.disabled = !stylesheet.disabled

toggle_hilight()
