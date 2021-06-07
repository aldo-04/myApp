const fs=require("fs")

module.exports={
    leerJson: ()=> fs.readFileSync("./data/tareas.json","utf-8"),
    guardarTarea: (titulo,estado)=>{
        let tareas = this.leerJson
        let tarea={
            titulo,
            estado
        }
    tareas.push(tarea)
    }
}