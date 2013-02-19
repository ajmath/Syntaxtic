settings = chrome.extension.getBackgroundPage().syntaxtic.settings;

init = () ->
 chrome.tabs.getSelected null, (tab) ->
  checkboxes = document.querySelectorAll('.clicker')
  for box in checkboxes
    blacklist =  settings[box.id + "Blacklist"]
    box.addEventListener 'click', toggle
    box.checked = blacklist.indexOf(tab.url) is -1

toggle = (e) ->
  chrome.tabs.getSelected null, (tab) ->
    blacklist =  settings[e.target.id + "Blacklist"]
    if e.target.checked
      idx = blacklist.indexOf(tab.url)
      blacklist.splice(idx, 1) if idx isnt -1
    else
      blacklist.push(tab.url)
    settings[e.target.id + "Blacklist"] = blacklist
  chrome.tabs.executeScript null, {file:"toggle_" + e.target.id + ".js"}

document.addEventListener 'DOMContentLoaded', () ->
  init()



