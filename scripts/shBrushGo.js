;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Copyright 2006 Shin, YoungJin

		var datatypes =	'chan map bool string error ' + 
						'int int8 int16 int32 int64 rune ' +
						'byte uint uint8 uint16 uint32 uint64 uintptr '
						'float32 float64 '
						'complex64 complex128 ';

		var keywords =	'break        default      func         interface    select ' +
						'case         defer        go           map          struct ' +
						'chan         else         goto         package      switch ' +
						'const        fallthrough  if           range        type '   +
						'continue     for          import       return       var ';

		var functions =	'append cap close complex copy delete imag len' +
						'make new panic print println real recover nil';
		
		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// strings
			{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'color1 bold' },
			{ regex: new RegExp(this.getKeywords(functions), 'gm'),		css: 'functions bold' },			
			{ regex: new RegExp(this.getKeywords(keywords), 'g'),		css: 'keyword bold' },
			{ regex: /\s+[A-Z_]+[\s=]/g,		css: 'constants' },
			{ regex: /\s+[+-]?\d+([Ee.][+-]?\d+)?/g,		css: 'color2' },
			{ regex: /\s+0[Xx][\dA-Fa-f]+/g,		css: 'color2' },
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['go'];

	SyntaxHighlighter.brushes.Go = Brush;

	// CommonJS
	typeof(exports) !== 'undefined' ? exports.Brush = Brush : null;
})();
