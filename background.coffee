SyntaxticSettings = () ->
  if not localStorage["syntaxtic.settings.gutterBlacklist"]?
    localStorage["syntaxtic.settings.gutterBlacklist"] = "[]"

  if not localStorage["syntaxtic.settings.highlightBlacklist"]?
    localStorage["syntaxtic.settings.highlightBlacklist"] = "[]"


  _theme = localStorage["syntaxtic.settings.theme"]
  _fontSize = localStorage["syntaxtic.settings.fontSize"]
  _gutterBlacklist = JSON.parse(localStorage["syntaxtic.settings.gutterBlacklist"])
  _highlightBlacklist = JSON.parse(localStorage["syntaxtic.settings.highlightBlacklist"])

  _defaultTheme = "shThemeMidnight.css"
  _defaultFontSize = "normal"
  _defaultGutterBlacklist = []
  _defaultHighlightBlacklist = []

  this.__defineGetter__("theme", ->
    return localStorage["syntaxtic.settings.theme"] || (_theme || _defaultTheme)
  )
  this.__defineSetter__("theme", (val) ->
    _theme = val
    localStorage["syntaxtic.settings.theme"] = val
  )

  this.__defineGetter__("fontSize", ->
    return localStorage["syntaxtic.settings.fontSize"] || (_fontSize || _defaultFontSize)
  )
  this.__defineSetter__("fontSize", (val) ->
    _fontSize = val
    localStorage["syntaxtic.settings.fontSize"] = val
  )

  this.__defineGetter__("gutterBlacklist", ->
    return JSON.parse(localStorage["syntaxtic.settings.gutterBlacklist"]) || (_gutterBlacklist || _defaultGutterBlacklist)
  )
  this.__defineSetter__("gutterBlacklist", (val) ->
    _gutterBlacklist = val
    localStorage["syntaxtic.settings.gutterBlacklist"] = JSON.stringify(val)
  )

  this.__defineGetter__("highlightBlacklist", ->
    return JSON.parse(localStorage["syntaxtic.settings.highlightBlacklist"]) || (_highlightBlacklist || _defaultHighlightBlacklist)
  )
  this.__defineSetter__("highlightBlacklist", (val) ->
    _highlightBlacklist = val
    localStorage["syntaxtic.settings.highlightBlacklist"] = JSON.stringify(val)
  )


syntaxtic =
  settings : new SyntaxticSettings()

chrome.extension.onRequest.addListener((request, sender, sendResponse) ->

  if (request.method == "getSettingsWithAction")
    # Show the page action for the tab that the sender (content script) was on.
    chrome.pageAction.show(sender.tab.id)
    sendResponse({settings: syntaxtic.settings})
  else if (request.method == "getSettings")
    sendResponse({settings: syntaxtic.settings})

  else
    sendResponse({}) # snub them.

)
