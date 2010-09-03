var ext = "cs";
var brush = false;
var brushAlias = "";
var brushFile = "";

var highlightCode = function() {
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
		css2.href = chrome.extension.getURL("styles/shThemeDefault.css");
		css2.type = "text/css";
		css2.rel = "stylesheet";
		document.body.appendChild(css2);
	}
}

var loadBrush = function() {
	switch(ext)
	{
		case 'cs':
		case 'CS':
			brushAlias = 'csharp';
			brushFile = 'shBrushCSharp.js';
			break;
		default:
			brushAlias = "";
			brushFile = "";
	}
}

var getExtension = function() {
	chrome.extension.sendRequest({getExtension: true} , function(response) {
		ext = response.result;
		console.log(ext);
		highlight();
	});
}

var highlight = function() {
	loadBrush();
	if(brushAlias != "" && brushFile  != "")
	{
		highlightCode();
		SyntaxHighlighter.all();
	}
}
	
var main = function() {
	
	//WORKS!
	ext = "cs";
	highlight();
	

	
	//Does not work
	//getExtension();
	
	
	
	//Does not work
	//ext = "cs"
	//setTimeout("highlight();", 500);
}	
main();
