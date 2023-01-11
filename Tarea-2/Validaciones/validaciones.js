function validarSalarios(salarios){
    if("" === salarios){
        return "El campo salarios no puede estar vacio"
    }
    if(/[^a-zA-Z0-9,.]/.test(salarios)){
        return "El campo salarios no acepta caracteres especiales que no son ',' ni '.' ni números"
    }
    if (/[a-zA-Z]/.test(salarios)) {
      return "El campo salarios solo acepta números";
  }
    return "";
}

function validarFormularioSalarios(){
    const integrantes = document.querySelectorAll(".salarios");
    const $salarios = {};
  
    for (let i = 0; i < integrantes.length; i++) {
      if (integrantes[i].value !== "") {
        $salarios[integrantes[i].id] = integrantes[i];
      }
    }
    evaluarSalarios($salarios);
  }

let hayError = false;

function evaluarSalarios($salarios) {
  const $errores = document.getElementById("errores")
  $errores.innerText = "";
  for (const id in $salarios) {
    const salario = $salarios[id];
    const valorSalario = salario.value;
    const validacion = validarSalarios(valorSalario);
    if (validacion !== "") {
      salario.classList.add("error");
      hayError = true;

      const $error = document.createElement("li");
      $error.innerText = validacion;
      $errores.appendChild($error);
    }
  }
}