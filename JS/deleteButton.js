import { deleteButton } from "./consts.js";

export function deleteFunction(){
    deleteButton.forEach((data)=>{
      const name = document.querySelector(".name").value;
         const surname = document.querySelector(".surname").value;
         const age = document.querySelector(".age").value;
         const point = document.querySelector(".point").value;
         data.addEventListener('click', async function() {    
             const data = {
                 name: name,
                 surname: surname,
                 age: age,
                 point:point
             };
         
             const url="https://678e3089a64c82aeb11f6611.mockapi.io/students"
         
             const response=await fetch(url,{
                 method:"DELETE",
                 body:JSON.stringify(data)
             })

             
         })  
    
        
    })
}