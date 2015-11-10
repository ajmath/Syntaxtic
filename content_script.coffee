settings = false
enableLog = false

chrome.extension.sendRequest {method: "getSettingsWithAction"}, (response) ->
  settings = response.settings;

  if syntaxtic.windowLoaded
    enableLog && console.log 'Loaded'
    syntaxtic.doHighlight()
  else
    enableLog && console.log 'Issuing onload'
    window.onload = () ->
      syntaxtic.windowLoaded = true
      syntaxtic.doHighlight()

syntaxtic =
  windowLoaded : false,
  doHighlight : () ->
    return if not settings

    hasHtmlContentType = () ->
      enableLog && console.log 'has html content?'
      result = false
      metaTags = document.getElementsByTagName('meta')
      enableLog && console.log 'Meta Tags:', metaTags
      for tag in metaTags
        enableLog && console.log 'Tag:', tag, metaTags[tag]
        httpEquiv = tag.httpEquiv
        content = tag.content
        continue if httpEquiv is 'undefined'

        if httpEquiv.toLowerCase() == "content-type" && content.toLowerCase().match("html")
          result = true
          break

      return result

    highlight = () ->
      if !document.body.innerHTML.match("003ew0hdafa1119dadfa39aje")
        if document.body.firstChild != null && document.getElementsByTagName('pre')[0] == document.body.firstChild
          document.body.innerHTML = """
            <!-- 003ew0hdafa1119dadfa39aje -->
            <script type="syntaxhighlighter" class="brush: #{window.brushAlias}">
              <![CDATA[#{document.body.firstChild.innerHTML}]]>
            </script>
            """

        css1 = document.createElement("link")
        css1.href = chrome.extension.getURL("styles/shCore.css")
        css1.type = "text/css"
        css1.rel = "stylesheet"
        document.head.appendChild(css1)

        css2 = document.createElement("link")
        css2.href = chrome.extension.getURL("styles/" + settings.theme)
        css2.type = "text/css"
        css2.rel = "stylesheet"
        document.head.appendChild(css2)

        css3 = document.createElement("style")
        css3.appendChild(document.createTextNode(".toolbar {display:none}"))
        document.head.appendChild(css3)

        SyntaxHighlighter.highlight()

    beautifyCsv = () ->
      strData = document.body.firstChild.innerHTML
      csvArray = CsvToArray(strData, ",")
      maxColLengthsHash = [1..csvArray[0].length].map (i) -> -1
      csvArrayDecoded = [1..csvArray.length].map (i) -> []

      for firstDimension, i in csvArray
        for orig, j in firstDimension
          strDecode = html_entity_decode(orig)
          csvArrayDecoded[i][j] = strDecode
          if strDecode.length > maxColLengthsHash[j]
            maxColLengthsHash[j] = strDecode.length

      newCsvData = ""
      for firstDimension, k in csvArray
        for secondDimension, l in firstDimension
          newCsvData += " " for m in [0..maxColLengthsHash[l] - csvArrayDecoded[k][l].length]

          newCsvData += secondDimension
          if(l + 1 == firstDimension.length)
            newCsvData += '\n'
          else
            newCsvData += ", "

      document.body.firstChild.innerHTML = newCsvData
      window.brushAlias = "plain"

    checkForObjectiveC = ->
      strData = document.body.innerHTML;
      if strData.match(/(@interface|@protocol|@INTERFACE|@PROTOCOL)/)?
        return "objc"
      else
        return "cpp"

    changeFontSize = () ->
      styleElement = document.createElement('style')
      styleElement.type = 'text/css'
      styleElement.id = 'fontOverride'
      document.getElementsByTagName('head')[0].appendChild(styleElement)
      newNode = document.createTextNode(".syntaxhighlighter, .syntaxhighlighter code, .syntaxhighlighter div {\n
        font-size: #{ settings.fontSize } !important;\n
        font-family: '#{ settings.fontFamily }' !important;\n
      }")
      styleElement.appendChild(newNode)

    applyPageSpecificSettings = () ->
      if(settings.gutterBlacklist.indexOf(document.location.href) > -1)
        loadScript(chrome.extension.getURL("toggle_gutter.js"));
      if(settings.highlightBlacklist.indexOf(document.location.href) > -1)
        loadScript(chrome.extension.getURL("toggle_highlight.js"));

    loadScript = (url, callback) ->
      head = document.getElementsByTagName('head')[0];
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;

      script.onreadystatechange = callback;
      script.onload = callback;

      head.appendChild(script);

    # #########################
    #  MAIN
    # #########################

    enableLog && console.log 'Main'
    if window.brushAlias? && window.brushAlias != "" && !hasHtmlContentType()
      if(window.brushAlias == 'csv')
        beautifyCsv()

      if(window.brushAlias == 'cHeader')
        window.brushAlias = checkForObjectiveC()

      highlight()

      changeFontSize()
      applyPageSpecificSettings()


window.onload = () ->
  syntaxtic.windowLoaded = true
