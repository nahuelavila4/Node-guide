/* async function cargar(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json()
    console.log(data);
}
cargar(); */

// con ecmascript module se puede escribir
// con try/catch sin estar dentro de funcion

try{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json()
    console.log(data);
}catch (error){
    console.log(error)
}


