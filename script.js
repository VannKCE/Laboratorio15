//EJERCICIO 03
const primerH2 = document.querySelector("h2");
console.log("Primer h2:", primerH2.textContent);

//EJERCICIO 04
document.querySelectorAll("p").forEach(p => {
    p.textContent = "Texto actualizado dinámicamente";
});

//EJERCICIO 05
const img = document.querySelector("img");
img.src = "imagen2.JPG";
img.alt = "Imagen cambiada";