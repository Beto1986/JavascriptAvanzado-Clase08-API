// Inicio Ejercicio realizado en clase.
// const p = document.querySelector("#planeta")
// const planetas = new XMLHttpRequest(); // Crear un objeto de tipo REQUEST
// const url = 'https://swapi.dev/api/planets/1/'; // Definimos la URI que queremos llamar
// const method = "GET" // Definimos el metodo
// planetas.open(method, url); // Preparamos y abrimos la conexion HTTP
// planetas.send(); // Ejecutamos la conexion HTTP
// let planeta;

// planetas.onreadystatechange = (e) => { // Creamos un evento que escucha y espera a que cambie el estado de mi peticion
//     //console.log(planetas);
//     planeta = JSON.parse(planetas.responseText); // Guardamos en una variable y convertimos la respuesta a JSON
//     console.log(planeta);
//     p.innerHTML = planeta.diameter;
// }
// Fin ejercicio realizado en clase.


// Ejemplo de implementacion de API (Desarrollado por CoinDesk)
const precio = document.querySelector("#precio");
const cotizaciones = new XMLHttpRequest(); // Crear un objeto de tipo REQUEST
const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'; // Definimos la URI que queremos llamar
const method = "GET" // Definimos el metodo
cotizaciones.open(method, url); // Preparamos y abrimos la conexion HTTP
cotizaciones.send(); // Ejecutamos la conexion HTTP
//console.log(cotizaciones);

// Una vez que se recibió la respuesta OK.(operación completada)
cotizaciones.onreadystatechange = (e) => { // Creamos un evento que escucha y espera a que cambie el estado de mi peticion

    console.log(cotizaciones); // texto en xml (sin conversion JSON)
    cotizacion = JSON.parse(cotizaciones.responseText); // Guardamos en una variable y convertimos la respuesta a JSON
    console.log(cotizacion); // texto convertido a JSON

    // Solicito la cotizacion real del Bitcoin en USD.
    precio.innerHTML = `La cotización en ${cotizacion.bpi.USD.code} del ${cotizacion.chartName} es de: ${cotizacion.bpi.USD.rate}`;

}

actualizar = () => location.reload(true); //Función actualizar
setInterval("actualizar()", 5000); // Invoco a la función para actualizar cada 5 segundos(5000 milisegundos)