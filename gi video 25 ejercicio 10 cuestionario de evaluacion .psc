//Ejercicio 4: un profesor prepara tres cuestionarios para una evaluacion final:
//A, B y C. se sabe que se tarda 5 minutos en revisar el cuestionario A,
//8 en revisatr el cuestionario B y 6 en el C la cantidad de examenes de cada 
//tipo se entran teclado. ¿cuantas horas y cuantos minutos se tardara en 
//revisar todas las evaluaciones 

proceso ejercicio 
	definir cantidadA,cantidadadB,cantidadC como enteros;
	definir tiempoA,tiempoB,tiempoC como enteros;
	definir tiempo_total como entero;
	definir horas, minutos como enteros;
	
	escribir "digite la cantidad de cuestionarios A:";
	LEER cantidadA;
	escribir"digite la cantidad de cuestionarios: B ";
	leer cantidadB;
	escribir "digite la cantidad de cuestionarios C:";
	leer cantidadC;
	
	//calcular los minutos que tardara por cada cuestionario 
	tiempoA <- cantidadA * 5;
	tiempoB <- cantidadB * 8;
	tiempoC <- cantidadC * 6;
	
	//calculamos el tiempo total que le toma revisar todos los cuestionarios 
	tiempo_total <- tiempoA + tiempoB + tiempoC;
	
	//calculamos las horas y minutos
	horas <- trunc (tiempo-total / 60);
	minutos <- tiempo-total mod 60;
	
	escribir "se tardara",horas,"horas y ",minutos,"minutos";	
	
FinProceso


	
