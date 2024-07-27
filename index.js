let data={
    name:"Gokul",
    gender:"Male",
    email:"gokul@gmail.com",
    status:"Active",
}
let Options={
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        Authorization:"Bearer cc9a788bd50afcfbbc87fd69e6a88228cb421b60f9b38a1f44a891802f59d8ef"
    },
    body: JSON.stringify(data)
};
fetch("https://gorest.co.in/public/v2/users", Options)
.then(function (response){
    return response.json()
})
.then(function (jsonData){
    console.log(jsonData);
})