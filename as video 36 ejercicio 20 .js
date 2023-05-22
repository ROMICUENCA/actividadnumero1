// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function sin_titulo() {
	var decada = new Number();
	document.write("digite una decada",'<BR/>');
	decada = Number(prompt());
	switch (decada) {
	case 10:
		document.write("bodas de hojalata",'<BR/>');
		break;
	case 20:
		document.write("bodas de porcelana",'<BR/>');
		break;
	case 30:
		document.write("bodas de perlas",'<BR/>');
		break;
	case 40:
		document.write("bodas de rubi",'<BR/>');
		break;
	case 50:
		document.write("bodas de oro",'<BR/>');
		break;
	case 60:
		document.write("bodas de diamante",'<BR/>');
		break;
	default:
		document.write("decada no existente",'<BR/>');
	}
}

