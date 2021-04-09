api_handler=(query)=>{
const id = "7ee56e3d";
const key = "3e561c5158373e9f0c73f07bb569cc81";

const link =
  `https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`;

const api = fetch(link);

api.then((response) => {
  return response.json();
}).then((data)=>{
    const recipes= data.hits;
    recipes.forEach((element)=>{
     let recipe= document.createElement('div')
     recipe.classList.add('recipe')
     let recipeimage= document.createElement('img')
     let recipelabel= document.createElement('p')
     recipelabel.innerText= element.recipe.label
     let allrecipes= document.querySelector('.all-recipes-container')
     recipeimage.src= element.recipe.image
     recipe.appendChild(recipeimage)
     recipe.appendChild(recipelabel)
     allrecipes.appendChild(recipe)
    })
    console.log(data)

})
}

let searchbutton= document.querySelector('.search-button')

searchbutton.addEventListener('click',()=>{
    let input= document.querySelector('.input').value
    let allrecipes= document.querySelectorAll('.recipe')
    allrecipes.forEach((recipe)=>{
        recipe.remove()
        
    })
    api_handler(input)
})

const randomrecipe=[
    'chicken','pizza','burger','bread','indian','italian','noodle','momo'
]

let randomindex= Math.floor(Math.random()*randomrecipe.length)

api_handler(randomrecipe[randomindex])