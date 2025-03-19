function crearCookie(nombre, valor, diasExpiracion){
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (diasExpiracion*24*60*60*1000));
    let expiracion = "expires="+ fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

function leerCookie (nombre){
    let nombreCookie = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookies = decodedCookie.split(';');

    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nombreCookie) == 0) {
            return cookie.substring(nombreCookie.length, cookie.length);
        }
    }
    return "";
}

function eliminarCookie (nombre){
    crearCookie(nombre, "", -1);
}