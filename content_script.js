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

var beautifyCsv = function()
{
	var strData = document.body.firstChild.innerHTML;
	var csvArray = CsvToArray(strData, ",");
	var maxColLengthsHash = new Array();
	for(var i = 0; i< csvArray[0].length; i++)
		maxColLengthsHash[i] = -1;
		
	var csvArrayDecoded = new Array();
	for(var i =0; i < csvArray.length; i++)
	{
		csvArrayDecoded[i] = new Array();
		for(var j =0; j < csvArray[i].length; j++)
		{
			var orig = csvArray[i][j];
			var strDecode = html_entity_decode(csvArray[i][j]);
			csvArrayDecoded[i][j] = strDecode;
			if(strDecode.length > maxColLengthsHash[j])
				maxColLengthsHash[j] = strDecode.length;
		}
	}
	
	var newCsvData = "";
	for(var i = 0; i < csvArray.length; i++)
	for(var j =0; j < csvArray[i].length; j++)
	{
		for(var k = 0; k <= maxColLengthsHash[j] - csvArrayDecoded[i][j].length; k++)
		{
			newCsvData += " ";
		}
		newCsvData += csvArray[i][j];
		if(j + 1 == csvArray[i].length)
			newCsvData += '\n';
		else
			newCsvData += ", ";
	}
	
	document.body.firstChild.innerHTML = newCsvData;
	brushAlias = "plain";
}

var checkForObjectiveC = function()
{
	var strData = document.body.innerHTML;
	if(strData.match(/(@interface|@protocol|@INTERFACE|@PROTOCOL)/) != null)
		return "objc";
	else
		return "cpp";
}
	
var main = function() {
    
    if(brushAlias != null && brushAlias != 'undefined' && brushAlias != "")
	{   
		if(brushAlias == 'csv')
			beautifyCsv();
			
		if(brushAlias == 'cHeader')
			brushAlias = checkForObjectiveC();
		
		highlight();
	}
}	
main();
