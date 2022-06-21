const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dropDown = document.querySelector("#breed-dropdown")
const init = ()=> {
    fetchDogImages();
    addBreeds();
}
function fetchDogImages(){ 
    // Challenge 1: fetches the images using the url above 
    fetch(`${imgUrl}`)
            .then(response => response.json())
            .then(data => {
               data.message.forEach(x => {
                const dogImageCont = document.querySelector("#dog-image-container")
                const img = document.createElement("img")
                dogImageCont.appendChild(img)
                img.src = x
               })
            })
}
function addBreeds(){
    //Challenge 2: fetches all the dog breeds 
    fetch(`${breedUrl}`)
    .then(response => response.json())
    .then(data => {
       Object.keys(data.message).forEach(key => {
        const dogBreeds = document.querySelector("#dog-breeds")
        const li = document.createElement("li")
        li.addEventListener("click", (event) =>{
            // Challenge 3: when the user clicks on any one of the <li>s, the font color of that <li> changes. 
            event.target.style.color= "green"
        })
        dogBreeds.appendChild(li)
        li.textContent = key
       })
    })
}
function filterBreeds(event){
    console.log(event.target.value)
    // use an array filter 
}
document.addEventListener("DOMContentLoaded",init)
dropDown.addEventListener('change' , filterBreeds)