function validarSalarios(value){
    if("" === value){
        return "El campo salarios no puede estar vacio"
    }
    if(/[^a-zA-Z0-9,.]/.test(value)){
        return "El campo salarios no acepta caracteres especiales que no son ',' ni '.' ni números"
    }
    if (/[a-zA-Z]/.test(value)) {
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
    const element = $salarios[id];
    const value = element.value;
    const validacion = validarSalarios(value);
    if (validacion !== "") {
      element.classList.add("error");
      hayError = true;

      const $error = document.createElement("li");
      $error.innerText = validacion;
      $errores.appendChild($error);
    }
  }
}