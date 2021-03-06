/*
INSTRUCCIONES:

Crear una función que reciba la variable "companies" como parámetro y reemplazar:

*1. Todos los valores "undefined" en "usuarios" por un string vacío.

*2. El nombre de cada "company" debe tener la primer letra en mayúscula.

*3. El nombre y el apellido de cada "user" debe tener la primer letra en mayúscula.

*4. Las "companies" deben ordenarse por su total de "user" (orden decreciente).

5. Los "users" de cada "company" deben aparecer en orden alfabético.
*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const companies = createAll();

const notUndefined = (array)=>{
    const result = array.map((element)=>{
        return {
            ...element,
            name:capitalize(element.name),
            users:element.users.map(user=>{
                return {
                    ...user,
                    firstName:user.firstName==undefined?'':capitalize(user.firstName),
                    lastName:user.lastName==undefined?'':capitalize(user.lastName),
                }
            }).sort((a,b)=> b.firstName - a.firstName)
        }
       
    } )

    return result.sort((a,b)=>b.users.length - a.users.length);
}

const capitalize = (text)=>{return `${text[0].toUpperCase()}${text.slice(1,text.length)}`}


cleanConsole(1, companies);
console.log('%c ---- RES 1 --- ', 'background: #bada55; color: #222', 'Put here your method: ', notUndefined(companies));
module.exports = {notUndefined}