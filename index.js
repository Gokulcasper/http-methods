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
let data={
    name:"MuthuMani",
    gender:"Male",
    email:"muthumani@gmail.com",
    status:"InActive",
}
let Options={
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:"Bearer cc9a788bd50afcfbbc87fd69e6a88228cb421b60f9b38a1f44a891802f59d8ef"
    },
    body: JSON.stringify(data)
};
fetch("https://gorest.co.in/public/v2/users/7184055", Options)
.then(function (response){
    return response.json()
})
.then(function (jsonData){
    console.log(jsonData);
})