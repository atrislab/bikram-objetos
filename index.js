/*
//1.- Crea un objeto de nombre Coche que tenga las propiedades: marca, modelo, matricula

//const Coche= {marca, modelo, matricula};

var Coche = {
    "marca": 'Ford',
    "modelo": 'Mustang',
    "matricula": 1969,
};

//2.- Crea un objeto de nombre Casa que tenga las propiedades: codPostal, calle, portal, piso

const Casa = {
    "codPostal":777,
    "calle":"",
    "portal": "",
    "piso":"",
};

//3.- Crea un objeto de nombre FullStackDeveloper que tenga las propiedades: array lenguajes, array proyectos

let FullStackDeveloper = {
    "lenguajes":[],
    "proyectos":[],
};

//4.- Crea un objeto de nombre Perro que tenga las propiedades: nombre, raza, color, edad, función ladrar
//(imprime por consola un ladrido), función popo (devuelve el valor: Math.random() * 3)

var Perro = {
    "nombre": "mistetas",
    "raza": "dogo",
    "color": "negro",
    "edad": 2,
    popo : function() { return Math.random() * 3 },
    ladrar : function() {console.log ("guau") },

};

*/

/*
5.- Dado un objeto de nombre Portatil 
obtén el valor de la propiedad marca con .marca 
guardándolo en la variable marcaPortatil
SE EJECUTA DE MANERA CORRECTA!

let Portatil = {"marca": "Asus", "modelo": "A33"};

var marcaPortatil = Portatil.marca;

console.log(`La marca del portatil es ${marcaPortatil}.`);

*/

/*
6.- Dado un objeto de nombre Portatil 
obtén el valor de la propiedad marca con ["marca"] 
guardándolo en la variable marcaPortatil2
SE EJECUTA DE MANERA CORRECTA!

let Portatil = {"marca": "Asus", "modelo": "A33"};

let marcaPortatil2 = Portatil.marca;

console.log(marcaPortatil2);

*/

/*
7.- Dado un objeto de nombre Concierto 
obtén el valor de la propiedad array grupos 
guardándolo en la variable grupos


let Concierto = {
    "grupos": ["Twenty One Pilots", "AC/DC", "Queen"],
    "cartelera": ["Queen"],
    "fecha": null
};

let grupos = Concierto.grupos;
console.log(grupos);

*/

/*
8.- 8.- Dado un objeto de nombre Led 
obtén el valor de las propiedades rojo, verde y azul 
guardándolo en la variable array RGB[Rojo, Verde, Azul]


let Led = {"rojo": "FF", "verde": "00", "azul": "00"};
let RGB = [];

rojo=Led.rojo;
verde=Led.verde;
azul=Led.azul;
  
RGB.push(rojo, verde, azul);
console.log(RGB);

*/

/*
9.- Dado un objeto de nombre Portatil 
modifica el valor de la propiedad modelo por el valor P345

let Portatil = {"marca": "Asus", "modelo": "A33"};
Portatil.modelo="P345";

console.log(Portatil.modelo);

*/

/*
10.- Dado un objeto de nombre Concierto 
añade el valor Guns N' Roses a la propiedad cartelera


let Concierto = {
    "grupos": ["Twenty One Pilots", "AC/DC", "Queen"],
    "cartelera": ["Queen"], 
    "fecha": null
};

Concierto.cartelera.push("Guns N Roses");
console.log(Concierto.cartelera);

*/

/*
11.- Dado un objeto de nombre Concierto 
modifica el valor de la propiedad fecha 
por el valor new Date() (fecha de hoy)


let Concierto = {
    "grupos": ["Twenty One Pilots", "AC/DC", "Queen"],
    "cartelera": ["Queen"], 
    "fecha": null
};

Concierto.fecha=new Date();
console.log(Concierto.fecha);


*/

/*
12.- Dado un objeto de nombre Impresora 
modifica el valor de la propiedad imprimiendo 
por el valor objeto con propiedades: nombreArchivo, copias, numPaginas


let Impresora = {"tinta": {"rojo": 75, "verde": 33, "azul": 2}, imprimiendo: null};
let Imprimiendo={"nombreArchivo":"midsummerdream", "copias":666, "numPaginas":777 };

Impresora.imprimiendo=Imprimiendo;
console.log(Impresora.imprimiendo);

*/

/*
13.- Crea un objeto de nombre Noticia que tenga las propiedades: titular, cuerpo


let Noticia = {"titular":"JON IS INSIDE GHOST", "cuerpo":"The North Remembers..."};

*/

/*
14.- Crea un objeto de nombre Persona que tenga las propiedades: nombre, apellidos, edad


let Persona = {"nombre":"Jon", "apellidos":"Targaryen Stark", "edad":17};

*/

/*
15.- Crea un objeto de nombre Avion que tenga las propiedades: 
numPasajeros, 
función despegar (imprime por consola 'despegando'), 
función volar (imprime por consola llegando al destino), 
función aterrizar (imprime por consola 'aterrizando'


let Avion = {
    "numPasajeros":99,
    despegar: function() {console.log ("despegando") },
    volar: function() {console.log ("llegando al destino") },
    aterrizar: function() {console.log ("aterrizando") },
};

*/

/*
16.- Crea un objeto de nombre Paquete que tenga las propiedades: 
array contenido con todos los objetos que contenga el paquete


let Paquete = {"items":["item01","item02","item03","item04","item05"]};

*/

/*
17.- Crea un objeto de nombre Pais que tenga las propiedades: numHabitantes, continente, gentilicio


let Pais = {"numHabitantes":undefined, "continente":undefined, "gentilicio":undefined};

*/

/*
18.- Dado un objeto de nombre O_Error 
obtén el valor de la propiedad codigo guardándolo en la variable codError


let O_Error = {"codigo": 404};
let codError = O_Error.codigo;
console.log(codError);

*/

/*

/*
19.- Dado un objeto de nombre Grupo obtén 
el valor de la propiedad array integrantes guardándolo en la variable integrantes


let Grupo = {"nombre":"Queen", "integrantes": ["Freddie","John","Bryan","Roger"] };
let integrantes = Grupo.integrantes;
console.log(integrantes);
*/
/*
20.- Dado un objeto de nombre Impresora 
obtén el valor de la propiedad objeto tinta{rojo, verde, azul} 
guardándolo en la variable nivelesTinta


let Impresora = {"tinta": {"rojo": 75, "verde": 33, "azul": 2}, imprimiendo: null};
let nivelesTinta = Impresora.tinta;
console.log(nivelesTinta);

*/

/*
 21.- Dado un objeto de nombre Pantalla 
 obtén el valor de la propiedad array bidimensional pixeles 
 guardándolo en la variable pixeles


let Pantalla = {
    "pixeles": [["#333", "#123", "#9AF"], ["#777", "#444", "#444"], ["#333", "#444", "#7A7F9D"]],
    "dimensiones": "1080X720"
};
let pixeles = [];//let pixeles = [[]];tiene algún sentido?
pixeles = Pantalla.pixeles;
//console.log(pixeles);
console.table(Pantalla.pixeles);
*/

/*
22.- Dado un objeto de nombre Movil 
obtén el valor de la propiedad especificaciones con ["especificaciones"] 
guardándolo en la variable especificaciones


let Movil = {"especificaciones": { "ancho": 1920, "altura": 1080 }, "temperatura": "50º"};

let Especificaciones = { "ancho": 1920, "altura": 1080 };
let especificaciones = [];
especificaciones.push (Especificaciones.ancho,Especificaciones.altura);
console.log(especificaciones);

*/

/*
23.- Dado un objeto de nombre Grupo 
modifica el valor de la propiedad numIntegrantes por el valor 5

let Grupo = {"nombre":"Queen", "integrantes": ["Freddie","John","Bryan","Roger", "Atris"], "numIntegrantes": 4 };
Grupo.numIntegrantes=5;
console.log(Grupo.numIntegrantes);

*/

/*
24.- Dado un objeto de nombre Pantalla modifica el valor de la propiedad dimensiones por el valor 1920x1080

let Pantalla = {"dimensiones": "1080X720"};
Pantalla.dimensiones = "1920x1080";
console.log(Pantalla.dimensiones);
*/


/*
25.- Dado un objeto de nombre Led 
modifica el valor de la propiedad encendido por el valor false si vale true y true si vale false

let powered = (Math.round(Math.random()) ? true : false)
let Led = {"rojo": "FF", "verde": "00", "azul": "00", "encendido": true};
let encendido= Boolean; 
encendido = Led.encendido;

if (Led.encendido == false) {
    Led.encendido = true;
  } else if (Led.encendido == true) {
    Led.encendido = false;
  }

  console.log(Led.encendido);
*/


/*
 26.- Dado un objeto de nombre Movil modifica el valor de la propiedad temperatura por el valor 20º


let Movil = {"especificaciones": { "ancho": 1920, "altura": 1080 }, "temperatura": "50º"};
Movil.temperatura = "20º";
console.log(Movil.temperatura);

*/

/*Bonus Track

let phone = {brand: "Samsung", model: "Galaxy 777"};
let phoneProsVals = Object.entries(phone);
console.log(phoneProsVals);

*/