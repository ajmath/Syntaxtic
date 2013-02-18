SyntaxHighlighter.brushes.BibTex = function()
{
  // Contributed by Andrew Matheny

  var keywords = 'title author year booktitle year isbn pages location doi publisher address language ' +
				 'bibsource abstract issn journal month note number biburl volume url editor interHash '+
				 'intraHash priority posted-at keywords citeulike-article-id institution x-location ' +
				 'howpublished crossref mynote bibstate classf hardcopy school chapter edition type ' +
				 'series key advisor ';

  this.regexList = [
		  { regex: /@comment([^\\"\n]|\\.)*$/gmi, 							   css: 'comments'},
          { regex: SyntaxHighlighter.regexLib.singleQuotedString, 			   css: 'string' },
		  { regex: SyntaxHighlighter.regexLib.doubleQuotedString, 			   css: 'string' },
		  { regex: /{([^\\"\n]|\\.)*}/g, 			   						   css: 'string' },
          { regex: new RegExp(this.getKeywords(keywords), 'gmi'),              css: 'keyword' },
          { regex: /'[a-z][A-Za-z0-9_\-]*/g,                               css: 'color1' }, // symbols
          { regex: /(@misc|@article|@inproceedings|@book|@incollection|@techreport|@phdthesis|@mastersthesis)/gi,
					css: 'functions' }
      ];

  this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
}

SyntaxHighlighter.brushes.BibTex.prototype     = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.BibTex.aliases       = ['bib', 'bibtex'];
