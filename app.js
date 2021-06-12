const process=require("process")
const tareas=require("./tareas")
const comando=process.argv[2]
const titulo=process.argv[3]
const estado=process.argv[4]

switch (comando) {
    case "agregar":
        console.log(tareas.guardarTarea(titulo,estado))
        break;

    default:
        break;
}