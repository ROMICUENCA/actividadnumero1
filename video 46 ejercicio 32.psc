Algoritmo sin_titulo

		Definir i, suma_total como entero;
		Definir numero_T, salario, horas, suma como entero;
		escribir "Digite el numero de trabajadores";
		leer numero_T;
		escribir "Digite el salario por hora";
		leer salario;
		i <- 1;
		mientras  i <= numero_T Hacer
			
			escribir i, " . Dame el numero de horas del trabajador";
			leer horas;
			
			i <- i + 1;
			suma <- salario *  horas;
			escribir "El valor a pagar a este trabajador es: ",suma;
			suma_total <- suma * numero_T;
			
		FinMientras
		escribir "El salario total de los trabajadores es: ",suma_total;
     FinProceso
	 

