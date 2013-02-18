var settings;

chrome.extension.sendRequest({method: "getSettingsWithAction"}, function(response) {
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
		};

		var highlight = function() {
			if(!document.body.innerHTML.match("003ew0hdafa1119dadfa39aje"))
			{
				if(document.body.firstChild !== null && document.body.firstChild == document.body.lastChild)
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

        var css3 = document.createElement("style");
        css3.appendChild(document.createTextNode(".toolbar {display:none}"));
        document.head.appendChild(css3);

				SyntaxHighlighter.highlight();
			}
		};

		var beautifyCsv = function() {
			var strData = document.body.firstChild.innerHTML;
			var csvArray = CsvToArray(strData, ",");
			var maxColLengthsHash = [];
			for(var h = 0; h< csvArray[0].length; h++)
			{
				maxColLengthsHash[h] = -1;
			}

			var csvArrayDecoded = [];
			for(var i =0; i < csvArray.length; i++)
			{
				csvArrayDecoded[i] = [];
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
			for(var k = 0; k < csvArray.length; k++)
			{
				for(var l =0; l < csvArray[k].length; l++)
				{
					for(var m = 0; m <= maxColLengthsHash[l] - csvArrayDecoded[k][l].length; m++)
					{
						newCsvData += " ";
					}
					newCsvData += csvArray[k][l];
					if(l + 1 == csvArray[k].length)
						newCsvData += '\n';
					else
						newCsvData += ", ";
				}
			}

			document.body.firstChild.innerHTML = newCsvData;
			brushAlias = "plain";
		};

		var checkForObjectiveC = function()
		{
			var strData = document.body.innerHTML;
			if(strData.match(/(@interface|@protocol|@INTERFACE|@PROTOCOL)/) !== null)
				return "objc";
			else
				return "cpp";
		};

		function changeFontSize() {
			var styleElement = document.createElement('style');
			styleElement.type = 'text/css';
			styleElement.id = 'fontSizeOverride';
			document.getElementsByTagName('head')[0].appendChild(styleElement);
			var newNode = document.createTextNode("body {font-size: " + settings.fontSize + " !important;}");
			styleElement.appendChild(newNode);
		}

    function applyPageSpecificSettings() {
      if(settings.gutterBlacklist.indexOf(document.location.href) > -1) {
        loadScript(chrome.extension.getURL("toggle_gutter.js"));
      }
      if(settings.highlightBlacklist.indexOf(document.location.href) > -1) {
        loadScript(chrome.extension.getURL("toggle_highlight.js"));
      }
    }

    function loadScript(url, callback) {
      var head = document.getElementsByTagName('head')[0];
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;

      script.onreadystatechange = callback;
      script.onload = callback;

      head.appendChild(script);
    }

		/////////////////////////
		// MAIN
		/////////////////////////

		if(brushAlias !== null && brushAlias !== 'undefined' && brushAlias !== "" && !hasHtmlContentType())
		{
			if(brushAlias == 'csv')
				beautifyCsv();

			if(brushAlias == 'cHeader')
				brushAlias = checkForObjectiveC();

			highlight();

      changeFontSize();
      applyPageSpecificSettings();
		}
	}
};


window.onload = function() {
	syntaxtic.windowLoaded = true;
};
