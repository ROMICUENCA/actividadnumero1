// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function sin_titulo() {
	var opcion = new Number();
	document.write("menu",'<BR/>');
	document.write("1. Elevar un numero a una potencia x",'<BR/>');
	document.write("2. Sacar la raiz cuadrada de un numero",'<BR/>');
	document.write("3. Salir",'<BR/>');
	document.write("Digite una opcion:",'<BR/>');
	opcion = Number(prompt());
	switch (opcion) {
	case 1:
		var num = new Number();
		var pot = new Number();
		var resultado = new Number();
		document.write("Digite un numero:",'<BR/>');
		num = Number(prompt());
		document.write("Digite la potencia:",'<BR/>');
		pot = Number(prompt());
		resultado = Math.pow(num,pot);
		document.write("el resultado es:",resultado,'<BR/>');
		break;
	case 2:
		var num = new Number();
		var resultado = new Number();
		document.write("Digite un numero:",'<BR/>');
		num = Number(prompt());
		resultado = Math.sqrt(num);
		document.write("el resultado es:",resultado,'<BR/>');
		break;
	case 3:
		break;
	default:
		document.write("se equivoco de menu",'<BR/>');
	}
}

