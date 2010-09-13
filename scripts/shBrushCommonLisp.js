SyntaxHighlighter.brushes.CommonLisp = function()
{
    var funcs = '\\* \\*\\* \\*\\*\\* \\+ \\+\\+ \\+\\+\\+ - / / // /// 1\\+ 1- \\< \\<= = \\> \\>= abort abs ' +
	'acons acos acosh add-method adjoin adjust-array adjustable-array-p ' +
	'alpha-char-p alphanumericp alter always and append append appending ' +
	'apply applyhook \\*applyhook\\* apropos apropos-list aref arithmetic-error ' +
	'arithmetic-error-operands arithmetic-error-operation array-dimension ' +
	'array-dimension-limit array-dimensions array-element-type ' +
	'array-has-fill-pointer-p array-in-bounds-p array-rank array-rank-limit ' +
	'array-row-major-index array-total-size array-total-size-limit arrayp ' +
	'as ash asin asinh assert assert assoc assoc-if assoc-if-not atan ' +
	'atanh atom augment-environment bit bit-and bit-andc1 bit-andc2 ' +
	'bit-eqv bit-ior bit-nand bit-nor bit-not bit-orc1 bit-orc2 bit-vector-p ' +
	'bit-xor block boole both-case-p boundp break break \\*break-on-signals\\* ' +
	'\\*break-on-warnings\\* broadcast-stream-streams butlast byte byte-position ' +
	'byte-size caaaar caaadr caaar caadar caaddr caadr caar cadaar cadadr ' +
	'cadar caddar cadddr caddr cadr call-arguments-limit call-method ' +
	'call-next-method car case catch catenate ccase ccase cdaaar cdaadr ' +
	'cdaar cdadar cdaddr cdadr cdar cddaar cddadr cddar cdddar cddddr ' +
	'cdddr cddr cdr ceiling cell-error cell-error-name cerror cerror ' +
	'change-class char char-bit char-bits char-bits-limit char-code ' +
	'char-code-limit char-control-bit char-downcase char-equal char-font ' +
	'char-font-limit char-greaterp char-hyper-bit char-int char-lessp ' +
	'char-meta-bit char-name char-not-equal char-not-greaterp char-not-lessp ' +
	'char-super-bit char-upcase char/= char\\< char\\<= char= char\\> char\\>= ' +
	'character characterp check-type check-type choose choose-if chunk ' +
	'cis class-name class-of clear-input close clrhash code-char coerce ' +
	'collect collect collect-alist collect-and collect-append collect-file ' +
	'collect-first collect-fn collect-hash collect-last collect-length ' +
	'collect-max collect-min collect-nconc collect-nth collect-or ' +
	'collect-plist collect-sum collecting collecting-fn commonp compile ' +
	'compile-file compile-file-pathname \\*compile-file-pathname\\* ' +
	'\\*compile-file-truename\\* \\*compile-print\\* \\*compile-verbose\\* ' +
	'compiled-function-p compiler-let compiler-let compiler-macro-function ' +
	'compiler-macroexpand compiler-macroexpand-1 complement complex ' +
	'complexp compute-applicable-methods compute-restarts concatenate ' +
	'concatenated-stream-streams cond condition conjugate cons consp ' +
	'constantp continue control-error copy-alist copy-list copy-pprint-dispatch ' +
	'copy-readtable copy-seq copy-symbol copy-tree cos cosh cotruncate ' +
	'count count count-if count-if-not counting ctypecase ctypecase ' +
	'\\*debug-io\\* \\*debugger-hook\\* decf declaim declaration-information ' +
	'declare decode-float decode-universal-time \\*default-pathname-defaults\\* ' +
	'defclass defgeneric define-compiler-macro define-condition ' +
	'define-declaration define-method-combination define-modify-macro ' +
	'define-setf-method defmacro defmethod defpackage defstruct deftype ' +
	'defun defvar delete delete-duplicates delete-file delete-if ' +
	'delete-if-not delete-package denominator deposit-field describe ' +
	'describe-object destructuring-bind digit-char digit-char-p directory ' +
	'directory-namestring disassemble division-by-zero do do do\\* ' +
	'do-all-symbols do-external-symbols do-symbols documentation ' +
	'documentation doing dolist dotimes double-float-epsilon ' +
	'double-float-negative-epsilon dpb dribble ecase echo-stream-input-stream ' +
	'echo-stream-output-stream ed eighth elt encapsulated enclose ' +
	'encode-universal-time end-of-file endp enough-namestring ' +
	'ensure-generic-function eq eql equal equalp error error error ' +
	'\\*error-output\\* etypecase etypecase eval eval-when evalhook \\*evalhook\\* ' +
	'evenp every exp expand export expt fboundp fdefinition \\*features\\* ' +
	'ffloor fifth file-author file-error file-error-pathname file-length ' +
	'file-namestring file-position file-string-length file-write-date ' +
	'fill fill-pointer finally find find-all-symbols find-class find-if ' +
	'find-if-not find-method find-package find-restart find-symbol ' +
	'finish-output first flet float float-digits float-precision float-radix ' +
	'float-sign floating-point-overflow floating-point-underflow floatp ' +
	'floor for format formatter fourth funcall function function-information ' +
	'function-keywords function-lambda-expression functionp gatherer ' +
	'gathering gcd generator generic-flet generic-function generic-labels ' +
	'gensym \\*gensym-counter\\* gentemp get get-decoded-time get-internal-real-time ' +
	'get-internal-run-time get-output-stream-string get-properties ' +
	'get-setf-method get-setf-method-multiple-value get-universal-time ' +
	'getf gethash go graphic-char-p handler-bind handler-case hash-table-count ' +
	'hash-table-p hash-table-rehash-size hash-table-rehash-threshold ' +
	'hash-table-size hash-table-test host-namestring identity if if ' +
	'ignore-errors imagpart import in-package in-package incf ' +
	'initialize-instance initially input-stream-p inspect int-char ' +
	'integer-decode-float integer-length integerp interactive-stream-p ' +
	'intern internal-time-unchar-bit ' +
	'set-difference set-dispatch-macro-character set-exclusive-or ' +
	'set-macro-character set-pprint-dispatch set-syntax-from-char setf ' +
	'setq seventh shadow shadowing-import shared-initialize shiftf ' +
	'short-float-epsilon short-float-negative-epsilon short-site-name ' +
	'signal signum simple-bit-vector-p simple-condition ' +
	'simple-condition-format-arguments simple-condition-format-string ' +
	'sitrim string-lessp ' +
	'string-not-equal string-not-greaterp string-not-lessp string-right-trim ' +
	'string-trim string-upcase string/= string\\< string\\<= string= string\\> ' +
	'string\\>= stringp sublis subseq subseries subsetp subst subst-if ' +
	'subst-if-not substitute substitute-if substitute-if-not subtypep ' +
	'sum summing \\*suppress-series-warnings\\* svref sxhash symbol-function ' +
	'symbol-macrolet symbol-name symbol-package symbol-plist symbol-value ' +
	'symbolp synonym-stream-symbol t tagbody tailp tan tanh tenth ' +
	'\\*terminal-io\\* terminate-producing terpri the thereis third throw ' +
	'time to-alter trace \\*trace-output\\* translate-logical-pathname ' +
	'translate-pathname tree-equal truename truncate two-way-stream-input-stream ' +
	'two-way-stream-output-stream type-error type-error-datum ' +
	'type-error-expected-type type-of typecase typep unbound-variable ' +
	'undefined-function unexport unintern union unless unless unread-char ' +
	'until until-if untrace unuse-package unwind-protect ' +
	'update-instance-for-different-class update-instance-for-redefined-class ' +
	'upgraded-array-element-type upgraded-complex-part-type upper-case-p ' +
	'use-package use-value user-homedir-pathname values values-list ' +
	'variable-information vector vector-pop vector-push vector-push-extend ' +
	'warn warning when when while wild-pathname-p with with-accessors ' +
	'with-added-methods with-compilation-unit with-condition-restarts ' +
	'with-hash-table-iterator with-input-from-string with-open-file ' +
	'with-open-stream with-output-to-string with-package-iterator ' +
	'with-simple-restart with-slots with-standard-io-syntax write ' +
	'write-byte write-char write-string write-to-string y-or-n-p yes-or-no-p ' +
	'zerop unprofile reset report profile stream-read-char-no-hang ' +
	'stream-fresh-line stream-peek-char stream-write-char stream-write-byte ' +
	'stream-write-string stream-line-column stream-write-sequence ' +
	'stream-read-byte stream-read-line stream-line-length stream-read-sequence ' +
	'stream-read-char stream-clear-output stream-unread-char stream-clear-input ' +
	'stream-finish-output stream-start-line-p stream-force-output ' +
	'stream-terpri stream-advance-to-column stream-file-position ' +
	'stream-listen weak-pointer-p package-locked-p step-condition-result ' +
	'native-pathname defconstant-uneql-new-value defconstant-uneql-name ' +
	'cancel-finalization purify process-status-hook process-output ' +
	'timer-scheduled-p package-lock-violation process-plist interactive-eval ' +
	'list-all-timers process-p process-status get-bytes-consed process-error ' +
	'defconstant-uneql-old-value hash-table-weakness step-next ' +
	'package-implements-list float-nan-p octets-to-string with-unlocked-packages ' +
	'enable-debugger float-denormalized-p with-timeout ' +
	'package-locked-error-symbol process-pid package-implemented-by-list ' +
	'process-pty posix-getenv step-condition-args gc-off finalize ' +
	'without-package-locks unschedule-timer schedule-timer make-timer ' +
	'native-namestring parse-native-namestring float-infinity-p lock-package ' +
	'process-kill process-exit-code step-continue string-to-octets ' +
	'unlock-package quit process-alive-p remove-implementation-package ' +
	'find-executable-in-search-path weak-pointer-value process-wait ' +
	'disable-debugger process-core-dumped define-source-context ' +
	'add-implementation-package run-program process-close step-condition-form ' +
	'posix-environ timer-name process-input bytes-consed-between-gcs ' +
	'gc-on make-weak-pointer save-lisp-and-die describe-compiler-policy ' +
	'step-into gc float-trapping-nan-p truly-the internal-debug ' +
	'frame-has-debug-tag-p backtrace-as-list arg var backtrace ' +
	'unwind-to-frame-and-call slot alien-funcall def-alien-variable deref ' +
	'addr with-alien load-shared-object define-alien-routine def-alien-routine ' +
	'make-alien free-alien alien-sap cast get-errno load-foreign sap-alien ' +
	'def-alien-type null-alien define-alien-type define-alien-variable ' +
	'extern-alien load-1-foreign alien-size clear-output print princ-to-string ' +
	'defsetf remove-if-not vectorp print-not-readable-object copy-structure ' +
	'read-sequence get-dispatch-macro-character define-setf-expander ' +
	'fmakunbound write-sequence constantly labels prin1-to-string ' +
	'get-setf-expansion defconstant simple-condition-format-control ' +
	'ensure-directories-exist unbound-slot-instance /= get-macro-character ' +
	'allocate-instance remove-if array-displacement fceiling special-operator-p ' +
	'force-output princ lambda invoke-restart-interactively ftruncate ' +
	'fround write-line macrolet define-symbol-macro pprint fresh-line';

        this.regexList = [
                { regex: new RegExp(';.*$', 'gm'),                           css: 'comments' },
		{ regex: SyntaxHighlighter.regexLib.multiLineDoubleQuotedString, css: 'string' },
                { regex: /\[|\]/g,                                               css: 'keyword' },
		{ regex: /'[a-z][A-Za-z0-9_]*/g,                                 css: 'color1' }, // symbols
		{ regex: /:[a-z][A-Za-z0-9_]*/g,                                 css: 'color2' }, // keywords
		{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),             css: 'functions' }
            ];

	this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
}

SyntaxHighlighter.brushes.CommonLisp.prototype     = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.CommonLisp.aliases       = ['lisp'];