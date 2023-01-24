const vinculosConceptos = document.querySelectorAll(".enlace");

vinculosConceptos.forEach((vinculo)=> {
    vinculo.addEventListener("click", accionDesempeñada);
});


function accionDesempeñada(evento) {
    alert("HA CLICKEADO EN UN CONCEPTO");
}

/*

- CLICK: Es el tipo de evento
- ACCIÓN DESEMPEÑADA: Es lo que va a pasar
- VINCULOSCONCEPTOS: Es el escuchador (listener)
*/