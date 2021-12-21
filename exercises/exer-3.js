/*
INSTRUCCIONES:

Cree una función que reciba la variable "companies" como parámetro; esta función debe devolver
un booleano que:

*1. Valide que todos los nombres de las empresas y los atributos "firstName" y "lastName" de "users" están en mayúsculas.

*2. Probar la operación de esta función importando la función creada en el "exer-1.js". */

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');
const { notUndefined } = require('./exer-1');

const companies = notUndefined(createAll());

const validate = (companies)=>{
    const result = companies.every(element=>{
        return element.name[0].toUpperCase() === element.name[0] && 
        element.users.every(user=>{
                return user.firstName!==''?user.firstName[0].toUpperCase() === user.firstName[0]:true &&
                user.lastName!==''?user.lastName[0].toUpperCase() === user.lastName[0]:true;
        });
    });

    return result;
}



cleanConsole(3, companies);
console.log('%c ---- RES 3 --- ', 'background: #bada55; color: #222', 'Put here your method: ',validate(companies));
