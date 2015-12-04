;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Contributed by Horté gilles

		var keywords =  /*f77*/'assign go to backspace block data call close common continue data dimension do else else if end endfile endif entry equivalence external format function goto if implicit inquire intrinsic open parameter pause print program read return rewind rewrite save stop subroutine then write'+
						/*f90*/'allocatableallocatecasecontainscycledeallocateelsewhereexitincludeinterfaceintentmodulenamelistnullifyonlyoperatoroptionalpointerprivateprocedurepublicrecursiveresultselectsequencetargetusewhilewhere'

		var funcs = 'abs  achar  acos  acosh  adjustl  adjustr  aimag  aint  all  allocated  anint  any  asin  asinh  associated  atan  atan2  atanh  bessel_j0  bessel_j1  bessel_jn  bessel_y0  bessel_y1  bessel_yn  bge  bgt  bit_size  ble  blt  btest  c_associated  c_funloc  c_f_procpointer  c_f_pointer  c_loc  c_sizeof  ceiling  char  cmplx  command_argument_count  conjg  cos  cosh  count  cpu_time  cshift  date_and_time  dble  digits  dim  dot_product  dprod  dshiftl  dshiftr  eoshift  epsilon  erf  erfc  erfc_scaled  execute_command_line  exp  exponent  extends_type_of  float  floor  fraction  gamma  get_command  get_command_argument  get_environment_variable  huge  hypot  iachar  iand  ibclr  ibits  ibset  ichar  ieor  index  int  ior  is_iostat_end  is_iostat_eor  ishft  ishftc  kind  lbound  leadz  len  len_trim  lge  lgt  lle  llt  log  log10  log_gamma  logical  maskl  maskr  matmul  max  maxexponent  maxloc  maxval  merge  merge_bits  min  minexponent  minloc  minval  mod  modulo  move_alloc  mvbits  nearest  new_line  nint  not  norm2  null  pack  parity  popcnt  poppar  precision  present  product  radix  random_number  random_seed  range  real  repeat  reshape  rrspacing  same_type_as  scale  scan  selected_char_kind  selected_int_kind  selected_real_kind  set_exponent  shape  shifta  shiftl  shiftr  sign  sin  sinh  size  sngl  spacing  spread  sqrt  sum  system_clock  tan  tanh  tiny  trailz  transfer  transpose  trim  ubound  unpack  verify ';

		var special =  'integer real complex logical character ';

		this.regexList = [
				{ regex: /^C.*/gmi, css: 'comments' },
			    { regex: /!.*/gmi, css: 'comments' },
				{ regex: /"(?!")(?:\.|\\\"|[^\""\n])*"/gm,									css: 'string' },
				{ regex: /'(?!')(?:\.|(\\\')|[^\''\n])*'/gm,								css: 'string' },
				{ regex: /\+|\-|\*|\/|\%|=|==/gm,											css: 'keyword' },
				{ regex: /^\b\d+./gm,													css: 'color2' },
				{ regex: /\b\d+\.?\w*/g,													css: 'constants' },
				{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),			css: 'keyword' },
				{ regex: new RegExp(this.getKeywords(special), 'gmi'),			css: 'color3' },
				{ regex: new RegExp(this.getKeywords(funcs), 'gmi'),			css: 'functions' },
				{ regex: /\.false\.|\.true\.|\.EQ\.|\.NE\.|\.LT\.|\.LE\.|\.GT\.|\.GE\.|\.OR\.|\.AND\./gmi , css: 'color3' },
				
				
				];

		this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags);
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['f','f90', 'fortran'];

	SyntaxHighlighter.brushes.Fortran = Brush;

	// CommonJS
	typeof(exports) !== 'undefined' ? exports.Brush = Brush : null;
})();
