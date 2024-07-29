//----------POST------------
// let data={
//     name:"Raj",
//     gender:"Male",
//     email:"raj@gmail.com",
//     status:"InActive",
// }
// let Options={
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json",
//         Accept:"application/json",
//         Authorization:"Bearer cc9a788bd50afcfbbc87fd69e6a88228cb421b60f9b38a1f44a891802f59d8ef"
//     },
//     body: JSON.stringify(data)
// };
// fetch("https://gorest.co.in/public/v2/users", Options)
// .then(function (response){
//     return response.json()
// })
// .then(function (jsonData){
//     console.log(jsonData);
// })

//--------PUT---------
// let data={
//     name:"MuthuMani",
//     gender:"Male",
//     email:"muthumani@gmail.com",
//     status:"InActive",
// }
// let Options={
//     method:"PUT",
//     headers:{
//         "Content-Type":"application/json",
//         Accept:"application/json",
//         Authorization:"Bearer cc9a788bd50afcfbbc87fd69e6a88228cb421b60f9b38a1f44a891802f59d8ef"
//     },
//     body: JSON.stringify(data)
// };
// fetch("https://gorest.co.in/public/v2/users/7183827", Options)
// .then(function (response){
//     return response.json()
// })
// .then(function (jsonData){
//     console.log(jsonData);
// })


// ----------DETELE--------
// let Options={
//     method:"DELETE",
//     headers:{
//         "Content-Type":"application/json",
//         Accept:"application/json",
//         Authorization:"Bearer cc9a788bd50afcfbbc87fd69e6a88228cb421b60f9b38a1f44a891802f59d8ef"
//     },
//     body: JSON.stringify()
// };
// fetch("https://gorest.co.in/public/v2/users/7183829", Options)
// .then(function (response){
//     return response.json()
// })
// .then(function (jsonData){
//     console.log(jsonData);
// })

let data={
    name:"ThiruMala",
    gender:"Male",
    email:"Thirumala@gmail.com",
    status:"Active",
}
let options={
    method:"DELETE",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:"Bearer cc9a788bd50afcfbbc87fd69e6a88228cb421b60f9b38a1f44a891802f59d8ef"
    },
body:JSON.stringify(data)
};
fetch("https://gorest.co.in/public/v2/users/7215243",options)
.then(function (response){
    return response.json();
})
.then(function (jsonData){
    console.log(jsonData);
})