function SyntaxticSettings() {

  if( typeof localStorage["syntaxtic.settings.gutterBlacklist"] === "undefined" ) {
    localStorage["syntaxtic.settings.gutterBlacklist"] = "[]";
  }

  if( typeof localStorage["syntaxtic.settings.highlightBlacklist"] === "undefined" ) {
    localStorage["syntaxtic.settings.highlightBlacklist"] = "[]";
  }


  var _theme = localStorage["syntaxtic.settings.theme"];
  var _fontSize = localStorage["syntaxtic.settings.fontSize"];
  var _gutterBlacklist = JSON.parse(localStorage["syntaxtic.settings.gutterBlacklist"]);
  var _highlightBlacklist = JSON.parse(localStorage["syntaxtic.settings.highlightBlacklist"]);

  var _defaultTheme = "shThemeMidnight.css";
  var _defaultFontSize = "normal";
  var _defaultGutterBlacklist = [];
  var _defaultHighlightBlacklist = [];

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

  this.__defineGetter__("gutterBlacklist", function(){
    return JSON.parse(localStorage["syntaxtic.settings.gutterBlacklist"]) || (_gutterBlacklist || _defaultGutterBlacklist) ;
  });
  this.__defineSetter__("gutterBlacklist", function(val){
    _gutterBlacklist = val;
    localStorage["syntaxtic.settings.gutterBlacklist"] = JSON.stringify(val);
  });

  this.__defineGetter__("highlightBlacklist", function(){
    return JSON.parse(localStorage["syntaxtic.settings.highlightBlacklist"]) || (_highlightBlacklist || _defaultHighlightBlacklist) ;
  });
  this.__defineSetter__("highlightBlacklist", function(val){
    _highlightBlacklist = val;
    localStorage["syntaxtic.settings.highlightBlacklist"] = JSON.stringify(val);
  });


}

var syntaxtic = {
  settings : new SyntaxticSettings()
};

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {

  if (request.method == "getSettingsWithAction") {
    // Show the page action for the tab that the sender (content script) was on.
    chrome.pageAction.show(sender.tab.id);
    sendResponse({settings: syntaxtic.settings});
  }
  else if (request.method == "getSettings") {
    sendResponse({settings: syntaxtic.settings});
  }
  else {
    sendResponse({}); // snub them.
  }
});
