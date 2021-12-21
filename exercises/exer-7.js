/*
INSTRUCCIONES:

1. Crear una función tomando como parámetro un "id" de "company" y devolver el nombre de la "company".

2: Crear una función tomando como parámetro un "id" de "company" y quitar la "company" de la lista.

4: Crear una función tomando como parámetro un "id" de "company" y un nuevo "user" cuyo el apelido es "Delgado",
   el nombre "Juan", de 35 años y dueño de un carro.
   El nuevo "user" debe agregarse a la lista de "users" de este "company" y tener un "id" generado automáticamente.
   La función también debe modificar el atributo "usersLength" de "company".

5: Crear una función tomando como parámetro un "id" de "company" y un "id" de "user".
   La función debe quitar este "user" de la lista de "users" de "company" y cambiar el atributo "usersLength" de "company".

6: Crear una función tomando como parámetro dos "id" de "company" y un "id" de "user".
   La función debe permitir que el user sea transferido de la primera "company" a la una "company".
   El atributo "usersLength" de cada "company" debe actualizarse. */

const { cleanConsole } = require('../helpers/system.helpers');
const { createAll } = require('../helpers/data.helper');

const companies = createAll();

//Busqueda por id de compañia
const searchCompany = (id)=>{

   //Se reccorre las companies buscando por su id y se obtiene solo el name
   return companies.find(element=>element.id === id).name;
}

const deleteCompany = (id)=>{
   return companies.filter(element=> element.id!== id);
}

const addUsertoCompany = (id)=>{
   const result = companies.map(element=> {
      if(element.id === id){
         element.usersLength = element.usersLength+1;
         element.users.push({
            lastName:'Delgado',
            firstName:'Juan',
            age:35,
            car:true,
            id:element.users.length
         })
      }  
      return {
         ...element
      }
   })

   return result;
}

const deleteUser = (idCompany, idUser)=>{
   const result = companies.map(element=> {
      if(element.id === idCompany){
         element.usersLength = element.usersLength-1;
         element.users.splice(idUser,1);
      } 
      return {
         ...element
      }
   })
   return result;
}

const traslateUser = (idCompany1, idCompany2, idUser)=>{
   const result = companies.map(element=> {
      if(element.id === idCompany1){
         element.usersLength = element.usersLength-1;
         element.users.splice(idUser,1);
      }

      if(element.id === idCompany2){
         element.usersLength = element.usersLength+1;
         companies[idCompany2].users.push(companies.find(element=> element.id === idCompany1))
      }

      return {
         ...element
      }
   })
   return result;
}
cleanConsole(7, companies);

console.log('%c ---- RES 7 --- part 1', 'background: #bada55; color: #222', 'Put here your method: ',searchCompany(2));
console.log('%c ---- RES 7 --- part 2', 'background: #bada55; color: #222', 'Put here your method: ',deleteCompany(4));
console.log('%c ---- RES 7 --- part 3', 'background: #bada55; color: #222', 'Put here your method: ');
console.log('%c ---- RES 7 --- part 4', 'background: #bada55; color: #222', 'Put here your method: ',addUsertoCompany(1));
console.log('%c ---- RES 7 --- part 5', 'background: #bada55; color: #222', 'Put here your method: ',deleteUser(2,3));
console.log('%c ---- RES 7 --- part 6', 'background: #bada55; color: #222', 'Put here your method: ',traslateUser(2,2,1));


