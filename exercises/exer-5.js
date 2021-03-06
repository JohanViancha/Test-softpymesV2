/*
INSTRUCCIONES:

1. Use la función creada en el ejemplo 4 para crear una nueva función tomando como parámetro
   la variable "companies" y devolver un nuevo objeto con los siguientes atributos:

    'size' => total de "users"
    'average' => edad promedio de "users"
    'hasCar' => total de "users" propietarios de un carro
    'averageWithCar' => edad promedio de los "users" con un carro
 */
const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const { updateArray } = require('./exer-4');

const companies = createAll();

const newObjectArray = (companies)=>{

      return{
         size: companies.length,
         average: Math.round(companies.reduce((sum, user)=> sum+user.age,0)/companies.length),
         hasCar:  companies.reduce((sum,user) => user.car?sum+1:sum,0)
      }
}

cleanConsole(5, companies);
console.log('%c ---- RES 5 --- ', 'background: #bada55; color: #222', 'Put here your method: ',newObjectArray(updateArray(companies)));
