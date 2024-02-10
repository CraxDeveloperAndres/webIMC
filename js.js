

function calcularIMC(){

  const nombre = document.getElementById('inputName').value;
  const peso = parseFloat(document.getElementById('inputPeso').value);
  const estatura =parseFloat( document.getElementById('inputEstatura').value);

  const imc = peso / (estatura * estatura);

  alert(imc);

}

function CalularEstadoNutricional(imc){

    /*Si su IMC es menos de 18.5, se encuentra dentro del rango de peso insuficiente. 
    Si su IMC es entre 18.5 y 24.9, se encuentra dentro del rango de peso normal o saludable. 
    Si su IMC es entre 25.0 y 29.9, se encuentra dentro del rango de sobrepeso.*/

    let CalularEstadoNutricional = "Aun no ha ingresado un imc valido";

    imc < 18.5? CalularEstadoNutricional = "se encuentra dentro del rango de peso insuficiente." : CalularEstadoNutricional = "se encuentra dentro del rango de peso normal o saludable.";
    imc >= 18.5 && imc <= 24.9? CalularEstadoNutricional="se encuentra dentro del rango de peso normal o saludable." : CalularEstadoNutricional=" se encuentra dentro del rango de sobrepeso.";
   
    alert(CalularEstadoNutricional);
}

