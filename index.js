let Options={
    method:"GET",
};
fetch("https://gorest.co.in/public/v2/users", Options)
.then(function (response){
    return response.json()
})
.then(function (jsonData){
    console.log(jsonData);
})