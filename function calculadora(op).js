function calculadora(op)
{

var ops = {
    
sumar: function sumarNumeros(n1, n2) {
return (parseInt(n1) + parseInt(n2));
},

restar: function restarNumeros(n1, n2) {
return (parseInt(n1) - parseInt(n2));
},
        
multiplicar: function multiplicarNumeros(n1, n2) {
return (parseInt(n1) * parseInt(n2));
 },

dividir: function dividirNumeros(n1, n2) {
 return (parseInt(n1) / parseInt(n2));
 }
        }


    };

    var operacion;

    switch(op) {
        case 'sumar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "+";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "suma";
            break;
        case 'restar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "-";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "resta";
            break;
        case 'multiplicar':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "*";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "multiplicacion";
            break;
        case 'dividir':
            var operando1 = document.getElementById("resultado").value;
            document.getElementById("resultado").value = operando1 + "/";
            operacion = document.getElementById("resultado").value;
            document.getElementById("memoria").value = "division";
            break;
            
        case 'igual':	
            
            operacion = document.getElementById("resultado").value;
            
            var memoriaop = document.getElementById("memoria").value;
            
            switch(memoriaop) {
                case 'suma':
                    var operandos = operacion.split("+");
                    var resultado = ops.sumar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'resta':
                    var operandos = operacion.split("-");
                    var resultado = ops.restar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'multiplicacion':
                    var operandos = operacion.split("*");
                    var resultado = ops.multiplicar(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;
                case 'division':
                    var operandos = operacion.split("/");
                    var resultado = ops.dividir(operandos[0], operandos[1]);
                    document.getElementById("resultado").value = resultado;
                    break;					
                case "ecuacion cuadratica":
                    //Declaramos variables que seran necesarios para la solucion del problema
		var d; // Discriminate
		var x1; // d > 0
		var x2; // d > 0
		var x; // x para calcular en el caso que discriminate sea  d == 0 pero usamos estrictamente igual
		var a = prompt("Introduce a:"); // "a" de la ecuacion
		var b = prompt("Introduce b:"); // "b" de la ecuacion
		var c = prompt("Introduce c:"); // "c" de la ecuacion
		
		//Con esta Ecuacion calculamos la discriminante
		d= b*b - 4 * a * c;
			
	// Segun el valor de d entramos en una de esas condiciones
	// para discriminaten mayor a cero		     			 		 
	if(d > 0 ) {

				x1=(-b + Math.sqrt(d))*2*a
				x2=(-b - Math.sqrt(d))*2*a  
					alert("La ecuacion tiene dos soluciones, que son numeros reales distintos: x1= "+x1+"    x2= "+x2);			
	}
	// para discriminaten igual a cero	
	if(d == 0 ) {
				x=(-b + Math.sqrt(d))*2*a
					alert("La ecuacion tiene una solucion doble: x= "+x);				
	}
	// para discriminaten menor a cero
	if(d < 0 ) {

					alert("La ecuacion no tiene soluciones reales.");	
	}		
					  
</SCRIPT>
<body>
</body> 
</html>              
            }	
            

            break;
            

    }


}