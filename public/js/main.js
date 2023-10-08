// const btn=document.getElementById("sumitbtn");
// const CityName=document.getElementById("CityName");
// const city_name=document.getElementById("city_name")
// const  temp1=document.getElementById("temp1") ;                   
// const temp_status=document.getElementById("temp_status");
// const data_hide=document.querySelector(".middle_layer");

// const getinfo=async(event)=>{
//       event.preventDefault();
//       let cityval=CityName.value;
//       data_hide.classList.add("data_hide");
//     if(cityval==="")
//     {
//         city_name.innerText=`please write the name before the search`;
//     }
//     else
//     {
//         try
//         {
//             let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=31ff7923061645360b58520f06131086`;
//             const respone=await fetch(url);
//             const data= await respone.json();
//             const arrdata=[data];
//             city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`
//              temp1.innerText = (arrdata[0].main.temp - 273.15).toFixed(2); 
//                tempmood=arrdata[0].weather[0].main.toLowerCase();;


//             if (tempmood === "clear") 
//             {
//                 temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
//             } else if (tempmood === "cloud") 
//             {
//                 temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
//             } else if (tempmood === "Rain") 
//             {
//                 temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
//             } else 
//             {
//                 temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
//             }
            
//             data_hide.classList.remove("data_hide");
//         }
//         catch
//         {
//             city_name.innerText=`please write the name before the search`;
//             data_hide.classList.add("data_hide");
//         }
        

//     }
// }

// btn.addEventListener("click",getinfo);
