const primaryStudents=(array)=>{
    const filtrado = array.filter(student=>student.curso==="Primero")
    const filtradoEstudiante=filtrado.map(filtrado=>filtrado.nombre).sort()

    console.log(filtradoEstudiante)

}

module.exports=primaryStudents