function click(e) {
  chrome.tabs.executeScript(null,
      {file:"toggle_" + e.target.id + ".js"});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('.clicker');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
