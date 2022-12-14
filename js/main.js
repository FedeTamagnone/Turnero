let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let ingreso = parseInt(prompt("Por favor seleccione número del especialista:\n 1-Nutrición \n 2-Oculista \n 3-Médico Clínico \n 4-Otro"))
let otro = ""
let horario = ""
let listaPaciente = []



/* --------------------------- clase constructora --------------------------- */

class Turno {
    constructor(nombre, apellido, ingreso, horario) {
        this.nombre = nombre
        this.apellido = apellido
        this.ingreso = ingreso
        this.horario = horario
    }
}
let paciente = new Turno(nombre, apellido, ingreso, horario);

/* ------------------------ Funcion para cargar datos ------------------------ */
function cargarTurno() {
    switch (ingreso) {
        case 1:
            alert("Selecionó Nutrición")
            ingreso = "Nutrición"
            break
        case 2:
            alert("Selecionó Oculista")
            ingreso = "Oculista"
            break
        case 3:
            alert("Selecionó Médico clínico")
            ingreso = "Médico clínico"
            break
        default:
            otro = prompt("Por favor ingrese opción")
            ingreso = otro
            break
    }
}
/* ---------------------- Funcion para definir horario ---------------------- */

function horariosDisponibles() {
    if (ingreso == "Nutrición") {
        horario = parseInt(prompt("Por favor seleccione día:\n 1-Lunes 10hs \n 2-Lunes 12hs"))
        switch (horario) {
            case 1:
                alert("Selecionó Lunes 10hs")
                horario = "Lunes 10hs"
                break
            case 2:
                alert("Selecionó Lunes 12hs")
                horario = "Lunes 12hs"
                break
            default:
                alert("opcion inexistente")
                horariosDisponibles()
                break
        }
    } else if (ingreso == "Oculista") {
        horario = parseInt(prompt("Por favor seleccione día:\n 1-Martes 10hs \n 2-Martes 12hs"))
        switch (horario) {
            case 1:
                alert("Selecionó Martes 10hs")
                horario = "Martes 10hs"
                break
            case 2:
                alert("Selecionó Martes 12hs")
                horario = "Martes 12hs"
                break
            default:
                alert("opcion inexistente")
                horariosDisponibles()
                break
        }
    } else if (ingreso == "Médico clínico") {
        horario = parseInt(prompt("Por favor seleccione día:\n 1-Jueves 10hs \n 2-Jueves 12hs"))
        switch (horario) {
            case 1:
                alert("Selecionó Jueves 10hs")
                horario = "Jueves 10hs"
                break
            case 2:
                alert("Selecionó Jueves 12hs")
                horario = "Jueves 12hs"
                break
            default:
                alert("opcion inexistente")
                horariosDisponibles()
                break
        }
    } else {
        horario = parseInt(prompt("Por favor seleccione día:\n 1-Viernes 10hs \n 2-Viernes 12hs"))
        switch (horario) {
            case 1:
                alert("Selecionó Viernes 10hs")
                horario = "Viernes 10hs"
                break
            case 2:
                alert("Selecionó Viernes 12hs")
                horario = "Viernes 12hs"
                break
            default:
                alert("opcion inexistente")
                horariosDisponibles()
                break
        }
    }
}

/* ------------------------ Opcion de cambio de datos ----------------------- */
function cambioDatos() {
    let cambio = prompt("¿Desea realizar un cambio? \n Si \n No ")
    if (cambio == "Si" || cambio == "si" || cambio == "SI") {
        ingreso = parseInt(prompt("Por favor seleccione número del especialista:\n 1-Nutrición \n 2-Oculista \n 3-Médico Clínico \n 4-Otro"))
        cargarTurno()
        horariosDisponibles()
    } else {
        alert("Muchas gracias")
    }
}

/* ------------------------ funcion agregar pacientes ----------------------- */
function agregarPaciente() {
    let pregunta = prompt("¿Desea cargar otro turno? \n Si \n No")
    while (pregunta == "Si" || pregunta == "si" || pregunta == "SI") {
    nombre = prompt("Ingrese su nombre")
    apellido = prompt("Ingrese su apellido")
    ingreso = parseInt(prompt("Por favor seleccione número del especialista:\n 1-Nutrición \n 2-Oculista \n 3-Médico Clínico \n 4-Otro"))
    cargarTurno()
    horariosDisponibles()
    alert(apellido + " " + nombre + " tiene turno con " + ingreso + " el día " + horario)
    cambioDatos()
    paciente = new Turno(nombre, apellido, ingreso, horario);
    listaPaciente.push(paciente)
    pregunta = prompt("¿Desea cargar otro turno? \n Si \n No")
    } 
}

/* -------------- Declaro funciones, alert con datos obtenidos, capturo valores en [] y los pusheo a lista ------------- */

cargarTurno()
horariosDisponibles()
alert(apellido + " " + nombre + " tiene turno con " + ingreso + " el día " + horario)
cambioDatos()
paciente = new Turno(nombre, apellido, ingreso, horario);
listaPaciente.push(paciente)
agregarPaciente()
console.log("Total de pacientes:");
console.log(listaPaciente);


/* ------------------------- Filtro por especialista ------------------------ */

let turnosNutricion = listaPaciente.filter((persona) => {return persona.ingreso == "Nutrición"})
console.log("Turnos con Nutricionistas: ");
console.log(turnosNutricion);

let turnosOculista = listaPaciente.filter((persona) => {return persona.ingreso == "Oculista"})
console.log("Turnos con Oculista: ");
console.log(turnosOculista);

let turnosMedicoClinico = listaPaciente.filter((persona) => {return persona.ingreso == "Médico clínico"})
console.log("Turnos con Médico Clinico: ");
console.log(turnosMedicoClinico);
