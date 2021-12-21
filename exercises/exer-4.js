/*
INSTRUCCIONES:

Crear una función que reciba la variable "companies" como parámetro:

*1. Agrupar todos los "users" de todas las "companies" en una sola tabla.

*2. Cada "user" debe tener un nuevo atributo "company" que tenga como valor el nombre de la "company".

*3. Los "users" deben ordenarse de acuerdo con su edad (de mayor a menor).
*/
const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

const updateArray = (companies)=>{
    const result = companies.flatMap(element=>{
        return element.users.reduce((userArray,user)=>{
            return userArray = [...userArray, {...user, company:element.name}];
        }, [])
    })
  return result.sort((a,b)=> b.age - a.age);
}

cleanConsole(4, companies);
console.log('%c ---- RES 4 --- ', 'background: #bada55; color: #222', 'Put here your method: ',updateArray(companies));

module.exports = {updateArray};
