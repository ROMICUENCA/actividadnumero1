// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function sin_titulo() {
	var factorial;
	var num = new Number();
	var i = new Number();
	var factoria = new Number();
	do {
		document.write("digite un numero:",'<BR/>');
		num = Number(prompt());
	} while (num<0);
	i = 1;
	factorial = 1;
	while (i<=num) {
		factorial = factorial*i;
		i = i+1;
	}
	document.write("el factorial es:",factorial,'<BR/>');
}

