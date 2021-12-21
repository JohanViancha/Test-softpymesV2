/*
INSTRUCCIONES:
1. Cree una función tomando la variable "companies" como parámetro y devolviendo un nuevo objeto
   cuyos atributos son la concatenación del apellido, nombre y edad de cada "user".

2. Cada atributo debe tener el valor de boolean "car".

Ver ejemplo de la variable exampleObj. */

const exampleObj = {
  johnDoe32: true,
  BernardoMinet45: false,
  alinaChef23: true
};

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const { updateArray } = require('./exer-4');
const { notUndefined } = require('./exer-1');

const companies = createAll();
const companiesSinUndefined = notUndefined(companies);

const concatProperties = (companies)=>{

    const result = companies.reduce((object,element)=>{ 
      return object ={...object,[`${element.firstName}${element.lastName}${element.age}`]:element.car}
    },{}) 

    return result;
    
}


console.log(`%c ---- EXAMPLE TEST 6 --- Example object: `, 'background: #222; color: #bada55', exampleObj);
cleanConsole(6, companies);
console.log('%c ---- RES 6 --- ', 'background: #bada55; color: #222', 'Put here your method: ',concatProperties(updateArray(companiesSinUndefined)));
