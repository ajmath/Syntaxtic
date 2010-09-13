SyntaxHighlighter.brushes.CommonLisp = function()
{
    var funcs     = 'lambda list progn mapcar car cdr reverse member append format';
    var keywords  = 'let while unless cond if eq t nil defvar dotimes setf listp numberp not equal';
    var macros    = 'loop when dolist dotimes defun';
    var operators = '> < + - = * / %';

    this.regexList = [
        { regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'string' },
        { regex: new RegExp('&\\w+;', 'g'), css: 'plain' },
        { regex: new RegExp(';.*', 'g'), css: 'comments' },
        { regex: new RegExp("'(\\w|-)+", 'g'), css: 'variable' },
        { regex: new RegExp(this.getKeywords(keywords), 'gmi'), css: 'keyword' },
        { regex: new RegExp(this.getKeywords(macros), 'gmi'), css: 'keyword' },
        { regex: new RegExp(this.getKeywords(funcs), 'gmi'),css: 'functions' },
    ];

    this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
}

SyntaxHighlighter.brushes.CommonLisp.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.CommonLisp.aliases   = ['lisp', 'cl', 'el'];