//? Se exporta para que le main la puedea utilizar

//? Destructurisamos para enviarlo a main, extraemos las propiedades 'title' y 'subtitle' de la funcion 
//? ahora Header puede acceder a ellas como variables locales

//? Crea y devuelve un elemto del encabezado
export default function Header({title, subtitle}) {

    // se crea un elemento encabezado  del DOM
    const header = document.createElement('header')
    //asiganarle una clase
    header.classList = 'header'
    //se establece el contenido de html se inyecta
    //se usa ${} para insertar el valor de las propiedades title y subtitle que se pasaron como argumento 
    header.innerHTML = `
        <h1 class = 'header-title'>${title}</h1>
        <h3 class = 'header-subtitle'>${subtitle}</h3>
           
    `
    return header;

}

