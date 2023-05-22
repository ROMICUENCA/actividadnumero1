Algoritmo sin_titulo
	// leer dos numeros; si son iguales que los multiplique, si el
	// primero es mayor que el segundo que los reste si no los sume
	definir num1,num2,resultado como entero;
	
	escribir "digite dos numeros:";
	leer num1,num2;
	
	
	si num1=num2 Entonces
		
		resultado <- num*num2;
	sino 
		si num1>num2 entonces 
			
			resultado <- num1-num2;
		sino 
			resultado <- num1+num2;
			
		FinSi
		
		
		
		
	FinSi
	
	escribir "el resultado es:",resultado;
FinAlgoritmo
