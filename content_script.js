var theme = "Midnight";

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    theme = request.theme;
      console.log(theme);
  });

var highlight = function() {
	if(!document.body.innerHTML.match("003ew0hdafa1119dadfa39aje"))
	{
		if(document.body.firstChild != null && document.body.firstChild == document.body.lastChild)
		{
			document.body.innerHTML = '<!-- 003ew0hdafa1119dadfa39aje --> ' + '<script type="syntaxhighlighter"' +
			' class="brush: ' + brushAlias + '"><![CDATA[' + document.body.firstChild.innerHTML + ']]></script>';
		}

		var css1 = document.createElement("link");
		css1.href = chrome.extension.getURL("styles/shCore.css");
		css1.type = "text/css";
		css1.rel = "stylesheet";
		document.body.appendChild(css1);

		var css2 = document.createElement("link");
		css2.href = chrome.extension.getURL("styles/shTheme" + theme + ".css");
		css2.type = "text/css";
		css2.rel = "stylesheet";
		document.body.appendChild(css2);

        SyntaxHighlighter.all();
	}
}
	
var main = function() {
    
    if(brushAlias != null && brushAlias != 'undefined' && brushAlias != "")
        highlight();



    //WORKS!
	//ext = "py";
	//highlight();
	

	
	//Does not work
	//getExtension();
	
	
	
	//Does not work
	//ext = "cs"
	//setTimeout("highlight();", 500);
}	
main();
