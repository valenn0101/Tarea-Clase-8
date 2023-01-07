function validarSalarios($salarios){
    if("" === $salarios){
        return "El campo salarios no puede estar vacio"
    }
    if(/[^a-zA-Z0-9,.]/.test($salarios)){
        return "El campo salarios no acepta caracteres especiales que no son ',' ni '.' ni números"
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
    console.log($salarios);
}
