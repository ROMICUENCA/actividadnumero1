Algoritmo sin_titulo
	definir n_elementos,i,num como enteros;
	definir suma_pares,conteo_pares como entero;
	definir suma_impares,conteo_impares como entero;
	definir promedio_impares Como Real;
	
	escribir "digite la cantidad de elementos a ingresar:";
	leer n_elementos;
	
	i<- 1;
	suma_pares <- 0;
	conteo_pares<- 0;
	
	suma_impares <- 0;
	conteo_impares <- 0;
	
	mientras i <= n_elementos Hacer
		escribir i,"digite un numero:";
		leer num;
		
		si num mod 2 = 0 entonces
			
			suma_pares <- suma_pares + num;
			
			conteo_pares <- conteo_pares +1 
		sino
			
			suma_impares <- suma_impares + num;
			
			conteo_impares <- conteo_impares + 1;
		FinSi
		i <- i + 1;
	FinMientras
	
	si conteo_pares = 0 Entonces
		escribir "no se han digitado numeros pares es";
	sino 
		escribir "la suma de los numeros :",suma_pares;
		escribir "el conteo de los numeros pares es:",conteo_pares;
	FinSi
	
	si conteo_impares = 0 Entonces
		escribir "no se han digitado numeros_impares";
	sino 
		promedio <- suma_impares/conteo_impares;
		escribir "el promedio es:",promedio
	FinSi
FinAlgoritmo
