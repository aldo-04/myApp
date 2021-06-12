const fs=require("fs")
leerJson= JSON.parse(fs.readFileSync("./data/tareas.json","utf-8")),
module.exports={
 
    guardarTarea: ()=>{
        let tarea=function(titulo,estado){
            titulo=titulo,
            estado=estado
        }
    leerJson.push(tarea)
    }
}