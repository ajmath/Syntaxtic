function SyntaxticSettings() {

  var _theme = localStorage["syntaxtic.settings.theme"];
  var _fontSize = localStorage["syntaxtic.settings.fontSize"];

  var _defaultTheme = "shThemeMidnight.css";
  var _defaultFontSize = "normal";

  this.__defineGetter__("theme", function(){
    return localStorage["syntaxtic.settings.theme"] || (_theme || _defaultTheme) ;
    });
    this.__defineSetter__("theme", function(val){
    _theme = val;
    localStorage["syntaxtic.settings.theme"] = val;
    });

  this.__defineGetter__("fontSize", function(){
    return localStorage["syntaxtic.settings.fontSize"] || (_fontSize || _defaultFontSize) ;
    });
    this.__defineSetter__("fontSize", function(val){
    _fontSize = val;
    localStorage["syntaxtic.settings.fontSize"] = val;
    });
}

var syntaxtic = {
  settings : new SyntaxticSettings()
};

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {

  // Show the page action for the tab that the sender (content script) was on.
  chrome.pageAction.show(sender.tab.id);

  if (request.method == "getSettings") {
    sendResponse({settings: syntaxtic.settings});
  }
  else {
    sendResponse({}); // snub them.
  }
});
