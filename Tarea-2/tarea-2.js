/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $botonAgregar = document.getElementById("agregar-familiar");
const $botonQuitar = document.getElementById("quitar-familiar");
const $botonCalcular = document.getElementById("calcular-sueldos");

function mostrarBotones() {
  document.getElementById("calcular-sueldos").className = " ";
  document.getElementById("resultados-finales").className = " ";
}
function ocultarResultados(){
  document.getElementById("resultados-finales").className = "ocultar";
}
let i = 0;
$botonAgregar.onclick = function crearFormularios() {
  i++;
  mostrarBotones();
  const formularios = document.getElementById("lista-de-familiares");
  formularios.innerHTML += `
    <h3>Familiar ${i}</h3>
    <label for="salario-anual-familiares">Salario Anual</label>
    <input name="Salario" class="salarios" id="salario${i}" required>
   <br/>`;
};

$botonQuitar.onclick = function borrarFormulario() {
  const $familiares = document.getElementById("contenedor-formularios");
  const formularioHijo = $familiares.lastElementChild;
  $familiares.removeChild(formularioHijo);
};

$botonCalcular.onclick = function () {
  validarFormularioSalarios();
  if(hayError){
    ocultarResultados();
    return;
  }

  const numeros = obtenerSalarios();
  const mesesDelAño = 12;
  mostrarSalario("mayor", obtenerSalarioMayor(numeros));
  mostrarSalario("menor", obtenerSalarioMenor(numeros));
  mostrarSalario("mensualidad", obtenerPromedioAnual(numeros) / mesesDelAño);
  mostrarSalario("promedio", obtenerPromedioAnual(numeros));
  mostrarBotones();
};

function obtenerSalarios() {
  const integrantes = document.querySelectorAll(".salarios");
  const salarios = [];
  for (let i = 0; i < integrantes.length; i++) {
    if (integrantes[i].value !== "") {
      salarios.push(Number(integrantes[i].value));
    }
  }
  return salarios;
}
function mostrarSalario(tipo, valor) {
  document.querySelector(`#${tipo}-salario`).textContent = valor;
}
