/* INSTRUCCIONES:

Crear una función que reciba los parámetros la variable "companies" y un booleano "hasCar":

*1. Para cada "company" debe conservar solo "users" cuyo valor de atributo "car" es igual al parámetro del booleano "hasCar".

*2. El atributo "usersLength" deben indicar el total de "users" correspondientes al parámetro "hasCar".

*/

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

const updateArray = (companies,hasCar)=>{
    const result = companies.map((element)=>{
        return {
            ...element, 
            users:filterUsers(element.users,hasCar),
            usersLength:filterUsers(element.users,hasCar).length
        }
    })

    return result;
}

const filterUsers = (array,hasCar)=>{return array.filter(user=>user.car===hasCar)}

cleanConsole(2, companies);
console.log('%c ---- RES 2 --- ', 'background: #bada55; color: #222', 'Put here your method: ',updateArray(companies, true));
