let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: "blablabla",
        id
    }
    if (id === 20) {
        callback("No se encontro " + id)
    } else
        callback(usuario);
}


getUsuarioById(20, (usuario) => {
    console.log("Usuario de DB", usuario);
});