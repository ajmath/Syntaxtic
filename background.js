
function SyntaxticSettings() {
	this._theme = "";
	
	this.__defineGetter__("theme", function(){
        return this._theme;
    });
    this.__defineSetter__("theme", function(val){
        this._theme = val;
    });
}

	
var syntaxtic = {
	settings : new SyntaxticSettings()
};


	
	
	
chrome.tabs.onUpdated.addListener(
	function(tabId, change, tab) {
		console.log("the theme is " + syntaxtic.settings.theme);
	}
);


chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
	if(req.getExtension)
	{
		var resp = {result: ext};
		sendResponse(resp);
	}
});
