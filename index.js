var x = document.createElement("li")

var btnCargar = document.getElementById("btnCargar");
btnCargar.addEventListener("click", () => {
    axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8", {

        })
        .then(function(res) {
            let json = res.data;
            let listaUsuarios = document.getElementById("usuarios");

            for (var clave in json) {

                if (json.hasOwnProperty(clave)) {

                    let usuario = document.createElement("li");
                    usuario.textContent = clave + " " + json[clave].name;
                    usuario.textContent = clave + " " + json[clave].city;
                    listaUsuarios.appendChild(usuario);
                }
            }
        })
        .catch(function(error) {
            console.log(error)
        })
});