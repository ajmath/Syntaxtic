  function CsvToArray( strData, strDelimiter ){
        strDelimiter = (strDelimiter || ",");
        var objPattern = new RegExp(
                (
                        "(\\" + strDelimiter + "|\\r?\\n|\\r|^)" +
                        "(?:\"([^\"]*(?:\"\"[^\"]*)*)\"|" +
                        "([^\"\\" + strDelimiter + "\\r\\n]*))"
                ),
                "gi"
                );
        var arrData = [[]];
        var arrMatches = null;
        while (arrMatches = objPattern.exec( strData )){
                var strMatchedDelimiter = arrMatches[ 1 ];
                var strMatchedValue;
                if (
                        strMatchedDelimiter.length &&
                        (strMatchedDelimiter != strDelimiter)
                        ){
                        arrData.push( [] );

                }
                if (arrMatches[ 2 ]){
                        strMatchedValue = arrMatches[ 2 ].replace(
                                new RegExp( "\"\"", "g" ),
                                "\""
                                );

                } else {
                        strMatchedValue = arrMatches[ 3 ];

                }
                arrData[ arrData.length - 1 ].push( strMatchedValue );
        }
        return( arrData );
    }

    function html_entity_decode(str) {
        var ta=document.createElement("textarea");
        ta.innerHTML=str.replace(/</g,"&lt;").replace(/>/g,"&gt;");
        return ta.value;
    }
