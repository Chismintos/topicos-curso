//& AREGLOS
//& 2023/09/01

// const vowels = ['a','e','i','o','u']


// vowels.map(vowel =>{
//     console.log(vowel);
// })


//^ Es como for of en el vowel y for in en index
// vowels.map((vowel,index) =>{
//     console.log(vowel,index);
// })

//^ Haces una copia del array vowels 
// const newVowels = vowels.map((vowel) =>{
//     return vowel
// })
// console.log(newVowels);

//^ Para cambiar la forma de devolverlo, se utiliza una funcion 
// const newVowels = vowels.map((vowel) =>{
//     return vowel.toLocaleUpperCase();
// })
// console.log(newVowels);


//? 1. Crear un arr de  calificaciones  (6)

// const calificaciones = [7.6, 3.3, 2.9, 8.0, 6.5, 4.9]
// console.log(calificaciones);

//? 2. Entrega un arr nuevo donde aparareza la palabra aprobado, reprobado
//?   >7.0          <7.0

// const cali = calificaciones.map((cali) =>{
//     if(cali>7.0){
//         return 'Aprobado'
//     }
//     else{
//         return 'Valiste'
//     }
// })
//  console.log(cali);




'use strict'
const restaurant = {
    name: 'Classico italiano',
    location: 'Via Angelo Tavari 23, Firenze Italy',
    categories: ['Italian','Mexican','Vegetorians','Oraganic'],
    startedMenu: ['Garlic Bread','Foccacia','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Rosotto'],
    order : function(startedIndex, mainIndex){
        return [this.startedMenu[startedIndex],this.mainMenu[mainIndex]]

    }
};

const arr =[]



const a = restaurant.categories[0];
const b = restaurant.categories[1];
// console.log(a,b);

//de un areglo puede sacar lo qur quieras
//la mejor manera
let [main, secondary] = restaurant.categories
console.log(main, secondary);

let temp = main; //Italian
main = secondary; //Mexican

// console.log(main, secondary)

// [main, secondary] = [secondary, main]

// console.log(main, secondary)

const [starter, menu] = restaurant.order(1,0)
console.log(starter);
console.log(menu);