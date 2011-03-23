var settings;

chrome.extension.sendRequest({method: "getSettings"}, function(response) {
	settings = response.settings;
  
	if (syntaxtic.windowLoaded)
		syntaxtic.doHighlight();
	else
		window.onload = function() {
			syntaxtic.windowLoaded = true;
			syntaxtic.doHighlight();
		};
});

var syntaxtic = {
	windowLoaded : false,
	doHighlight : function() {
		if (!settings)
			return;
			
		var hasHtmlContentType = function() {
			var result = false;
			var metaTags = document.getElementsByTagName('meta');
			for(var i in metaTags)
			{
				var httpEquiv = metaTags[i].httpEquiv;
				var content = metaTags[i].content;
				
				if (typeof(httpEquiv) == 'undefined' || (typeof(httpEquiv) == 'undefined' && typeof(content) == 'undefined'))
					continue;
		 
				if (httpEquiv.toLowerCase() == "content-type" && content.toLowerCase().match("html")) 
				{
					result = true;
					break;
				}
			}
			
			return result;
		}

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
				document.head.appendChild(css1);

				var css2 = document.createElement("link");
				css2.href = chrome.extension.getURL("styles/" + settings.theme);
				css2.type = "text/css";
				css2.rel = "stylesheet";
				document.head.appendChild(css2);

				SyntaxHighlighter.highlight();
			}
		}

		var beautifyCsv = function() {
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
		
		function changeFontSize() {
			var styleElement = document.createElement('style');
			styleElement.type = 'text/css';
			styleElement.id = 'fontSizeOverride';
			document.getElementsByTagName('head')[0].appendChild(styleElement);
			var newNode = document.createTextNode("body {font-size: " + settings.fontSize + " !important;}");
			styleElement.appendChild(newNode);
		}

		/////////////////////////
		// MAIN
		/////////////////////////

		if(brushAlias != null && brushAlias != 'undefined' && brushAlias != "" && !hasHtmlContentType())
		{   
			if(brushAlias == 'csv')
				beautifyCsv();
				
			if(brushAlias == 'cHeader')
				brushAlias = checkForObjectiveC();
			
			highlight();
			
			changeFontSize();
		}
	}
};


window.onload = function() {
	syntaxtic.windowLoaded = true;
};