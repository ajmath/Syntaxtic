var syntaxticBackground = function() {

	var theme = "the theme";
	return {
		getTheme : function() {
			return theme;
		},
		setTheme :function(newTheme) {
			theme = newTheme;
		}
	};
}


chrome.tabs.onUpdated.addListener(
	function(tabId, change, tab) {
		console.log("the theme is " + syntaxticBackground.getTheme());
	}
);


chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
	if(req.getExtension)
	{
		var resp = {result: ext};
		sendResponse(resp);
	}
});
