var settings = chrome.extension.getBackgroundPage().syntaxtic.settings;

var style = document.createElement('link');
style.type = 'text/css';
style.id = 'theme-style';
style.rel = "stylesheet";
style.href = chrome.extension.getURL("styles/" + settings.theme);
document.head.appendChild(style);

style = document.createElement('link');
style.type = 'text/css';
style.id = 'theme-style';
style.rel = "stylesheet";
style.href = chrome.extension.getURL("styles/shCore.css");
document.head.appendChild(style);

style = document.createElement('link');
style.type = 'text/css';
style.id = 'theme-style';
style.rel = "stylesheet";
style.href = chrome.extension.getURL("styles/shCore.css");
document.head.appendChild(style);

var script = document.createElement('script');
script.src = chrome.extension.getURL("scripts/shCore.js");
script.type = 'text/javascript';
document.head.appendChild(script);

script = document.createElement('script');
script.src = chrome.extension.getURL("scripts/shBrushCSharp.js");
script.type = 'text/javascript';
document.head.appendChild(script);

function themeChanged() {
  var box = document.getElementById('themeSelect');
  var val = box.options[box.selectedIndex].value;
  settings.theme = val;

  document.getElementById('theme-style').href = chrome.extension.getURL("styles/" + settings.theme);
}

function sizeChanged() {
  var box = document.getElementById('sizeSelect');
  var val = box.options[box.selectedIndex].value;
  settings.fontSize = val;

  document.getElementById('textSize').innerHTML = ".syntaxhighlighter {font-size: " + settings.fontSize + " !important;}";
}

function initOptionsPage() {

  document.getElementById('themeSelect').value = settings.theme;
  document.getElementById('sizeSelect').value = settings.fontSize;

  style = document.createElement('style');
  style.type = 'text/css';
  style.id = 'textSize';
  document.head.appendChild(style);
  style.innerHTML = ".syntaxhighlighter {font-size: " + settings.fontSize + " !important;}"
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#sizeSelect').addEventListener('change', sizeChanged);
  document.querySelector('#themeSelect').addEventListener('change', themeChanged);
  initOptionsPage();
});


