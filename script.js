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

//EJERCICIO 06
document.querySelectorAll("li").forEach(li => {
    li.classList.add("resaltado");
    li.classList.remove("oculto");
});

//EJERCICIO 07
const ul = document.getElementById("lista");
for (let li of ul.children) {
    console.log(li.textContent);
}

//EJERCICIO 08
const colores = ["lightblue", "lightgreen", "pink", "orange", "violet"];
document.querySelectorAll("div").forEach((div, i) => {
    div.style.backgroundColor = colores[i % colores.length];
});

//EJERCICIO 09
const nuevoP = document.createElement("p");
nuevoP.textContent = "Elemento insertado con JS";
document.body.appendChild(nuevoP);

//EJERCICIO 10
const h3 = document.createElement("h3");
h3.textContent = "Subtítulo insertado";
const primerP = document.querySelector("p");
document.body.insertBefore(h3, primerP);

//EJERCICIO 11
const nuevaLista = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `Elemento ${i}`;
    nuevaLista.appendChild(li);
}
const section = document.querySelector("section");
section.appendChild(nuevaLista);

//EJERCICIO 12
const parrafoAReemplazar = document.querySelector("p");
const nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Párrafo reemplazado";
parrafoAReemplazar.replaceWith(nuevoDiv);

//EJERCICIO 13
const todosP = document.querySelectorAll("p");
if (todosP.length > 0) {
    todosP[todosP.length - 1].remove();
}

//EJERCICIO 14
document.getElementById("contenido").innerHTML = "";

//EJERCICIO 15
const art = document.querySelector("article");
const clon = art.cloneNode(true);
document.querySelector("main").appendChild(clon);

//EJERCICIO 16
const primerUl = document.querySelector("ul");
const ultimoLi = primerUl.lastElementChild;
primerUl.insertBefore(ultimoLi, primerUl.firstElementChild);

//EJERCICIO 17
const contenedorP = document.getElementById("contenido");
const parrafos = Array.from(contenedorP.querySelectorAll("p"));
parrafos.sort((a, b) => a.textContent.localeCompare(b.textContent));
parrafos.forEach(p => contenedorP.appendChild(p));

//EJERCICIO 18
document.querySelectorAll("section").forEach((sec, i) => {
    sec.dataset.index = i;
});

//EJERCICIO 19
const numDivs = document.querySelectorAll("div").length;
const pDivs = document.createElement("p");
pDivs.textContent = `Cantidad de DIVs: ${numDivs}`;
document.body.appendChild(pDivs);

//EJERCICIO 20
const ulInterno = document.createElement("ul");
for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = "Nivel interno";
    li.appendChild(span);
    ulInterno.appendChild(li);
}
document.body.appendChild(ulInterno);

//EJERCICIO 21
const contenedor = document.getElementById("contenedor");
for (let i = 1; i <= 3; i++) {
    const p = document.createElement("p");
    p.textContent = `Párrafo ${i}`;
    contenedor.appendChild(p);
}
const segundoP = contenedor.querySelectorAll("p")[1];
segundoP.remove();

//EJERCICIO 22
const sectionModificar = document.getElementById("seccion-ejemplo");

// eliminar h2 original si existe
const h2Original = sectionModificar.querySelector("h2");
if (h2Original) h2Original.remove();

// insertar uno nuevo
const nuevoH2 = document.createElement("h2");
nuevoH2.textContent = "Título nuevo";
sectionModificar.appendChild(nuevoH2);

// agregar párrafo
const pDesc = document.createElement("p");
pDesc.textContent = "Descripción generada";
sectionModificar.appendChild(pDesc);

// lista con 3 ítems
const listaNueva = document.createElement("ul");
for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = `Ítem ${i}`;
    listaNueva.appendChild(li);
}
sectionModificar.appendChild(listaNueva);