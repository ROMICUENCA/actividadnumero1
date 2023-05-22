// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function sin_titulo() {
	var num = new Number();
	document.write("Digite el numero:",'<BR/>');
	num = Number(prompt());
	if (num%2==0) {
		document.write("el numero ",num," es par",'<BR/>');
	} else {
		document.write("el numero",num,"es impar",'<BR/>');
	}
}

