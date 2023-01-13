function probarValidarSalarios(salarios){
    console.assert(
        validarSalarios("") === "El campo salarios no puede estar vacio",
        "Validar salarios falló con un string vació"
    );
    console.assert(
        validarSalarios("$23") === "El campo salarios no acepta caracteres especiales que no son ',' ni '.' ni números",
        "Validar salarios falló con un signo especial"
    );
    console.assert(
        validarSalarios("Dos mil pesos") === "El campo salarios no acepta caracteres especiales que no son ',' ni '.' ni números",
        "Validar salarios falló con letras"
    );
    console.assert(
        validarSalarios("32000") === "",
        "Validar salarios falló con un numero valido"
    )
}
probarValidarSalarios();