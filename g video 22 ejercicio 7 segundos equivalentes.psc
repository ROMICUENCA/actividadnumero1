Algoritmo sin_titulo
	definir horas,minutos,seg como enteros;
	definir horas_seg, minutos_seg como enteros;
	escribir "digite las horas:";
	leer horas;
	escribir "digite los minutos:";
	leer minutos;
	escribir "digite los degundos:";
	leer seg;
	//calcular el equivalente en segundos 
	horas_Seg<- horas*3600;
	minutos_seg<- minutos*60;
	total_seg<- horas_seg+minutos_seg+seg;
	escribir "los segundos equivalente son:",total_seg;
	
FinAlgoritmo

