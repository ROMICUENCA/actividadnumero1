// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function sin_titulo() {
	var compra = new Number();
	var descuento = new Number();
	var precio_final = new Number();
	document.write("digite la cantida a pagar:",'<BR/>');
	compra = Number(prompt());
	if (compra>100) {
		descuento = compra*0.2;
	} else {
		descuento = 0;
	}
	precio_final = compra-descuento;
	document.write("el precio a pagar es:",precio_final,'<BR/>');
}

