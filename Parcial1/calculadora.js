var operandoa;
var operandob;
var operacion;

function init() {
   function init() {
    // Asignamos eventos a los botones
    document.getElementById("uno").addEventListener("click", function() {
        agregarNumero(1);
    });
    document.getElementById("dos").addEventListener("click", function() {
        agregarNumero(2);
    });
    // Agrega eventos para los otros números (tres, cuatro, etc.)

    document.getElementById("suma").addEventListener("click", function() {
        seleccionarOperacion("+");
    });
    document.getElementById("resta").addEventListener("click", function() {
        seleccionarOperacion("-");
    });
    // Agrega eventos para los otros operadores (multiplicación, división, etc.)

    document.getElementById("igual").addEventListener("click", function() {
        calcularResultado();
    });
}

function agregarNumero(numero) {
    var resultado = document.getElementById("resultado").textContent;
    document.getElementById("resultado").textContent = resultado + numero;
}

function seleccionarOperacion(op) {
    operandoa = parseFloat(document.getElementById("resultado").textContent);
    operacion = op;
    document.getElementById("resultado").textContent = "";
}

function calcularResultado() {
    operandob = parseFloat(document.getElementById("resultado").textContent);
    var resultado;

    switch (operacion) {
        case "+":
            resultado = operandoa + operandob;
            break;
        case "-":
            resultado = operandoa - operandob;
            break;
        // Agrega casos para los otros operadores (multiplicación, división, etc.)
        default:
            resultado = "Error";
    }

    document.getElementById("resultado").textContent = resultado;
}


function sumar() {
    // Obtenemos los valores de los operandos
    operandoa = parseFloat(document.getElementById("resultado").textContent);
    operandob = parseFloat(document.getElementById("resultado").textContent);

    // Realizamos la suma
    var resultado = operandoa + operandob;

    // Mostramos el resultado
    document.getElementById("resultado").textContent = resultado;
}

function restar() {
    operandoa = parseFloat(document.getElementById("resultado").textContent);
    operandob = parseFloat(document.getElementById("resultado").textContent);
    var resultado = operandoa - operandob;
    document.getElementById("resultado").textContent = resultado;
}

function multiplicar() {
    operandoa = parseFloat(document.getElementById("resultado").textContent);
    operandob = parseFloat(document.getElementById("resultado").textContent);
    var resultado = operandoa * operandob;
    document.getElementById("resultado").textContent = resultado;
}
function dividir() {
    operandoa = parseFloat(document.getElementById("resultado").textContent);
    operandob = parseFloat(document.getElementById("resultado").textContent);
    var resultado = operandoa / operandob;
    document.getElementById("resultado").textContent = resultado;
}
function elevarAlCuadrado() {
    operandoa = parseFloat(document.getElementById("resultado").textContent);
    var resultado = Math.pow(operandoa, 2);
    document.getElementById("resultado").textContent = resultado;
}

