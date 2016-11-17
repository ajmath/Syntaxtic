settings = chrome.extension.getBackgroundPage().syntaxtic.settings
console.log settings

style = document.createElement('link')
style.type = 'text/css'
style.id = 'theme-style'
style.rel = "stylesheet"
style.href = chrome.extension.getURL("styles/" + settings.theme)
document.head.appendChild(style)

style = document.createElement('link')
style.type = 'text/css'
style.id = 'theme-style'
style.rel = "stylesheet"
style.href = chrome.extension.getURL("styles/shCore.css")
document.head.appendChild(style)

style = document.createElement('link')
style.type = 'text/css'
style.id = 'theme-style'
style.rel = "stylesheet"
style.href = chrome.extension.getURL("styles/shCore.css")
document.head.appendChild(style)

script = document.createElement('script')
script.src = chrome.extension.getURL("scripts/shCore.js")
script.type = 'text/javascript'
document.head.appendChild(script)

script = document.createElement('script')
script.src = chrome.extension.getURL("scripts/shBrushCSharp.js")
script.type = 'text/javascript'
document.head.appendChild(script)

optionChanged = () ->
  # update the settings object from the DOM
  settings.theme = document.getElementById('themeSelect').value
  settings.fontSize = document.getElementById('fontSizeSelect').value
  settings.fontFamily = document.getElementById('fontFamilySelect').value
  settings.disableQuickCode = document.getElementById('quickCodeSelect').value

  # apply changed theme
  document.getElementById('theme-style').href = chrome.extension.getURL("styles/" + settings.theme)

  # apply changed font 
  style = document.getElementById('fontOverride')
  style.innerHTML = ".syntaxhighlighter, .syntaxhighlighter code, .syntaxhighlighter div {\n
    font-size: #{ settings.fontSize } !important;\n
    font-family: '#{ settings.fontFamily }' !important;\n
  }\n"
  style.innerHTML += ".syntaxhighlighter select {background-color: white !important;}"

initOptionsPage = () ->
  # update the DOM from the settings object
  document.getElementById('themeSelect').value = settings.theme
  document.getElementById('fontSizeSelect').value = settings.fontSize
  document.getElementById('fontFamilySelect').value = settings.fontFamily
  document.getElementById('quickCodeSelect').value = settings.disableQuickCode

document.addEventListener 'DOMContentLoaded', () ->

  # iterate over <select>s and add event listeners
  [].forEach.call document.querySelectorAll('select'), (el) ->
    el.addEventListener('change', optionChanged)
  initOptionsPage()

  # update the content of #fontOverride
  optionChanged()
