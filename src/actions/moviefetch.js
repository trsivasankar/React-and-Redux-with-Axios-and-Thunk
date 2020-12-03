import axios from 'axios';


export function LatestMovies() {
    const output = {
        url: 'http://localhost:8900/latestMovies',
        method: 'GET'

     }   
     
     let request = axios.request(output)
     .then((response) => {
        return response.data
     })

     return request
   


}




export function LatestMoviesDetail(id) {
   const output = {
       url: `${'http://localhost:8900/latestMovies'}/${id}`,
       method: 'GET'

    }   
    
    let request = axios.request(output)
    .then((response) => {
       return response.data
    })

    return request
  


}




export function UpcomingMovies() {
   const output = {
       url: 'http://localhost:8900/upcomingMovies',
       method: 'GET'
    }   
    
    let request = axios.request(output)
    .then((response) => {
       return response.data
    })

    return request
  


}


export function NearbyEvents() {
   const output = {
       url: 'http://localhost:8900/events',
       method: 'GET'
    }   
    
    let request = axios.request(output)
    .then((response) => {
       return response.data
    })

    return request
  


}

export function SliderGallery() {
   const output = {
       url: 'http://localhost:8900/galleries',
       method: 'GET'
    }   
    
    let request = axios.request(output)
    .then((response) => {
       return response.data
    })

    return request
  


}

export function PostDate(selectedOption,phone,date,email,subject) {
   
   var random = Math.floor(Math.random()*1000)
       var data = {
               id:random,
               selectedOption: selectedOption,
               date:date ,
               phone:phone ,
               email:email,
               tickets:subject,
       }

   const output = {
       url: 'http://localhost:8900/ticketbooked',
       method: 'POST',
       body: JSON.stringify(data)
    }   
    
    let request = axios.post(output)
    .then((response) => {
       return response.data
    })

    return request
  


}


// const turl ='http://localhost:8900/ticketbooked';

// export function PostDate(selectedOption,phone,date,email,subject){

//     var random = Math.floor(Math.random()*1000)
//     var data = {
//             id:random,
//             selectedOption: selectedOption,
//             date:date ,
//             phone:phone ,
//             email:email,
//             tickets:subject,
//     }
//       fetch(turl,{
//           method:'POST',
//           headers:{
//             'Accept':'application/json',
//             'Content-Type':'application/json'
//             },
//             body: JSON.stringify(data)
//       })

//       .then((response) => response.json())


//       return{
//           type:'POST_FORM',
//           payload:''
//       }
// }

