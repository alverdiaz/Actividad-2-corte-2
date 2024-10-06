const listaUsuarios = [
    {
        id: "7446917",
        nombre: "Enrique",
        apellido: "Arteta",
        edad: "75",
        sexo: "M",
        anime: "Blue Lock",
        celular: "3006936304",
        ciudad: "Malambo"
    },
    {
        id: "1002001261",
        nombre: "Camilo",
        apellido: "Arteta",
        edad: "21",
        sexo: "M",
        anime: "Kimetsu No Yaiba",
        celular: "3196936304",
        ciudad: "Barranquilla"
    },
    {
        id: "123456789",
        nombre: "Alver",
        apellido: "Díaz",
        edad: "22",
        sexo: "M",
        anime: "Dr. Stone",
        celular: "3216846304",
        ciudad: "Barranquilla"
    }
]

const $ = el => document.querySelector(el)
const $tableBody = $("#table-body")
const $registerForm = $("#register-form")
const $registerSpan = $("#register-span")

const renderTable = () => {
    let inner = ""

    listaUsuarios.forEach((e) => {
        inner += `<tr>
            <td>${e.id}</td>
            <td>${e.nombre}</td>
            <td>${e.apellido}</td>
            <td>${e.edad}</td>
            <td>${e.sexo}</td>
            <td>${e.anime}</td>
            <td>${e.celular}</td>
            <td>${e.ciudad}</td>
            </tr>`
    })
        
    $tableBody.innerHTML = inner
}

const verifyId = (id) => {
    for (let i = 0; i < listaUsuarios.length; i += 1) {
        if (listaUsuarios[i].id === id) {
            return false
        }
    }

    return true
}
    
renderTable()

$registerForm?.addEventListener('submit', e => {
    e.preventDefault()
    const id = "" + $("#id").value
    const nombre = $("#nombre").value
    const apellido = $("#apellido").value
    const edad = "" + $("#edad").value
    const sexo = $("#sexo").value
    const anime = $("#anime").value === "" ? "NA" : $("#anime").value
    const celular = "" + $("#celular").value
    const ciudad = $("#ciudad").value

    
    const verify = verifyId(id)

    if (sexo === "default") {
        $registerSpan.innerHTML = "El campo 'sexo' no puede estar en blanco"
        $registerSpan.style.color = "red"
    } else if (celular.length > 10 || celular.length < 10) {
        $registerSpan.innerHTML = "El campo 'celular' debe tener 10 digitos"
        $registerSpan.style.color = "red"
    } else if (!verify) {
        $registerSpan.innerHTML = "Este 'id' ya esta registrado"
        $registerSpan.style.color = "red"
    } else {
        listaUsuarios.push({id, nombre, apellido, edad, sexo, anime, celular, ciudad})
    }

    renderTable()
})
