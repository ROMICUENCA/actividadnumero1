// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

// Ejercicio 4: un profesor prepara tres cuestionarios para una evaluacion final:
// A, B y C. se sabe que se tarda 5 minutos en revisar el cuestionario A,
// 8 en revisatr el cuestionario B y 6 en el C la cantidad de examenes de cada 
// tipo se entran teclado. ¿cuantas horas y cuantos minutos se tardara en 
// revisar todas las evaluaciones 
function ejercicio() {
	var cantidadb, tiempo, total;
	var cantidada = new Number();
	var cantidadadb = new Number();
	var cantidadc = new Number();
	var tiempoa = new Number();
	var tiempob = new Number();
	var tiempoc = new Number();
	var tiempo_total = new Number();
	var horas = new Number();
	var minutos = new Number();
	document.write("digite la cantidad de cuestionarios A:",'<BR/>');
	cantidada = Number(prompt());
	document.write("digite la cantidad de cuestionarios: B ",'<BR/>');
	cantidadb = Number(prompt());
	document.write("digite la cantidad de cuestionarios C:",'<BR/>');
	cantidadc = Number(prompt());
	// calcular los minutos que tardara por cada cuestionario 
	tiempoa = cantidada*5;
	tiempob = cantidadb*8;
	tiempoc = cantidadc*6;
	// calculamos el tiempo total que le toma revisar todos los cuestionarios 
	tiempo_total = tiempoa+tiempob+tiempoc;
	// calculamos las horas y minutos
	horas = Math.trunc(tiempo-total/60);
	minutos = tiempo-total%60;
	document.write("se tardara",horas,"horas y ",minutos,"minutos",'<BR/>');
}

