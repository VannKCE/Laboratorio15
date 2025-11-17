//EJERCICIO 03
const primerH2 = document.querySelector("h2");
console.log("Primer h2:", primerH2.textContent);

//EJERCICIO 04
document.querySelectorAll("p").forEach(p => {
    p.textContent = "Texto actualizado dinámicamente";
});