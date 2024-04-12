function plus(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');
    var plus = numero1 + numero2;
    resultado.innerText = plus;
}

function minus(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');
    var minus = numero1 - numero2;
    resultado.innerText = minus;
}

function multiply(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');
    var multiply = numero1 * numero2;
    resultado.innerText = multiply;
}

function divide(){
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');
    if (numero2 === 0) {
        resultado.innerText = "ERROR: Divisão por zero";
    } else {
        var divide = numero1 / numero2;
        resultado.innerText = divide;
    }
}

document.getElementById('plus').addEventListener('click', plus);
document.getElementById('minus').addEventListener('click', minus);
document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('divide').addEventListener('click', divide);
