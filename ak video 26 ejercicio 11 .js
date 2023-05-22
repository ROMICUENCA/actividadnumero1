// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function sin_titulo() {
	var precio = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("digite el precio a pagar:",'<BR/>');
	precio = Number(prompt());
	descuento = precio*0.15;
	precio_final = precio-descuento;
	document.write("el precio a pagar es:",precio_final,'<BR/>');
}

