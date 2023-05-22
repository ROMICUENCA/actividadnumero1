// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function sin_titulo() {
	var total_seg;
	var horas = new Number();
	var minutos = new Number();
	var seg = new Number();
	var horas_seg = new Number();
	var minutos_seg = new Number();
	document.write("digite las horas:",'<BR/>');
	horas = Number(prompt());
	document.write("digite los minutos:",'<BR/>');
	minutos = Number(prompt());
	document.write("digite los degundos:",'<BR/>');
	seg = Number(prompt());
	// calcular el equivalente en segundos 
	horas_seg = horas*3600;
	minutos_seg = minutos*60;
	total_seg = horas_seg+minutos_seg+seg;
	document.write("los segundos equivalente son:",total_seg,'<BR/>');
}

