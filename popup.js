var settings = chrome.extension.getBackgroundPage().syntaxtic.settings;


function init() {
 chrome.tabs.getSelected(null, function(tab) {
   var checkboxes = document.querySelectorAll('.clicker');
    for (var i = 0; i < checkboxes.length; i++) {
      var box = checkboxes[i];
      var blacklist =  settings[box.id + "Blacklist"];
      box.addEventListener('click', toggle);
      box.checked = blacklist.indexOf(tab.url) == -1;
    }
 });
}

function toggle(e) {
  chrome.tabs.getSelected(null, function(tab) {
    var blacklist =  settings[e.target.id + "Blacklist"];
    if(e.target.checked) {
      var idx = blacklist.indexOf(tab.url);
      if(idx != -1) blacklist.splice(idx, 1);
    } 
    else {
      blacklist.push(tab.url);
    }
    settings[e.target.id + "Blacklist"] = blacklist;
  });
  chrome.tabs.executeScript(null, {file:"toggle_" + e.target.id + ".js"});
}

document.addEventListener('DOMContentLoaded', function () {
  init();
});



