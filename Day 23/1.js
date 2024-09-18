async function fetchApi() 
{
    // fetch("https://dog.ceo/api/breeds/image/random") 
    // .then(response =>{
    //     console.log(response);
    //     return response.json();
    // })   
    // .then(data =>{
    //     console.log(data);
    //     let image = document.createElement("img");
    //     image.src = data.message
    //     document.body.appendChild(image)
    // })

    let fetchdata = await fetch("https://dog.ceo/api/breeds/image/random");
    let response = await fetchdata.json();
    let image = document.createElement("img");
    image.src = response.message
    document.body.appendChild(image);
}
fetchApi();