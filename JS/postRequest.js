
export const getRequest= async ()=>{
    const url="https://678e3089a64c82aeb11f6611.mockapi.io/students"
    const fetchRequest= await fetch(url)
    const dataJson=await fetchRequest.json()
    return dataJson;
}



getRequest().then((data) => {
const tableBody=document.querySelector(".tbody")

data.forEach((item, index) => {
tableBody.innerHTML+=`
<tr>
            <th scope="row">${index+1}</th>
            <td>${item.name}</td>
            <td>${item.surname}</td>
            <td>${item.age}</td>
            <td>${item.point}</td>
          </tr>
`
})
  });