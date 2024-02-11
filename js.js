const personas = [];

function mostrar(){

 personas.forEach(persona => {

  var nombre = persona.nombre;
  var estatura = persona.estatura;
  var peso = persona.peso;
  var imc = persona.IMC;
  var estado1 = persona.estado;

  // Esas comillas se usan para crear algo qur se llama templateString (creo que asi se escribe)

  document.querySelector("#contentTable").insertAdjacentHTML('afterbegin',`<tr>
  <td>${nombre}</td>
  <td>${peso}</td>
  <td>${estatura}</td>
  <td>${imc}</td>
  <td>${estado1}</td>                     
  </tr>`);
 });
  
}

function cargarDatosPersona(){
  
  const nombre = document.getElementById('inputName');
  const peso = document.getElementById('inputPeso');
  const estatura = document.getElementById('inputEstatura');
  var  imc = calcularIMC();
  var Estado = calularEstadoNutricional()

  const persona = {
   nombre: nombre.value,
   peso: parseFloat(peso.value) ,
   estatura: parseFloat(estatura.value),
   IMC:imc,
   estado: Estado
  }

  personas.push(persona);

  nombre.value = "";
  peso.value = "";
  estatura.value= "";

  alert("se cargo la persona correctamente");

}


function calcularIMC(){

  const nombre = document.getElementById('inputName').value;
  const peso = parseFloat(document.getElementById('inputPeso').value);
  const estatura = parseFloat( document.getElementById('inputEstatura').value);

  const imc = peso / (estatura * estatura);
  
  return imc;

}

function calularEstadoNutricional(){

  /*Si su IMC es menos de 18.5, se encuentra dentro del rango de peso insuficiente. 
  Si su IMC es entre 18.5 y 24.9, se encuentra dentro del rango de peso normal o saludable. 
  Si su IMC es entre 25.0 y 29.9, se encuentra dentro del rango de sobrepeso.*/

  var imc = calcularIMC();

  var Estado ="";

  if(imc > 25.0){

    Estado = "sobrepeso.";

  }else{

    if(imc < 18.5){

      Estado = "peso insuficiente." ;

    }else{

      Estado = "peso saludable.";

    }
  }

  return Estado;

}

