// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function sin_titulo() {
	var pi;
	var radio = new Number();
	var area = new Number();
	var lon = new Number();
	document.write("digite el valor del radio:",'<BR/>');
	radio = Number(prompt());
	area = Math.PI*Math.pow(radio,2);
	lon = 2*Math.PI*radio;
	document.write("el lado de la circunferencia es:",lon,'<BR/>');
	document.write("la longitud es:",lon,'<BR/>');
}

