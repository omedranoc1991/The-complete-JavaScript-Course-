import Search from "./models/Search"
import {elements, renderLoader,clearLoader} from "./views/base"
import * as searchView from "./views/searchViews"
import Recipe from "./models/Recipe"
import recipe from "./models/Recipe"

//2.state:
/*Global state of the app
-search object
-current recipe object
-shoping list object 
-liked recipes
*/
const state = {}

//4. search controller
const controlSearch = async () => {

    //a. get query from view
    const query = searchView.getInput()
    
    if(query){
    //b. new search object and add to state 
    state.search = new Search(query)
    //c.prepare ui for results 
    searchView.clearInput()
    searchView.clearResults()
    renderLoader(elements.searchRes)
    try{
   //d. search for recipes 
   await state.search.getResults()
   //e. render reesults on ui
   clearLoader()
   searchView.renderResults(state.search.result)
    }catch(err){
        alert("Something went wrong")
    }
 
    }
}

//10. recipe controller
const controlRecipe = async () =>{

    //get id from url
    const id = window.location.hash.replace("#","")
    
    if(id){
        //prepare UI for changes 
        //create a new recipe object
        state.recipe = new Recipe(id)
      
        try{
            //get recipe data
            await state.recipe.getRecipe()
            //calculate servings and time
            state.recipe.calcTime()
            state.recipe.calcServings()
           
            //render the recipe
            console.log(state.recipe)
        }catch(err){
            alert("Something went wrong")
        }
        }
       
}

window.addEventListener("hashchange", controlRecipe)
window.addEventListener("load", controlRecipe)

//3. add event listener "submit", is used to valid data
elements.searchForm.addEventListener("submit", e => {
    e.preventDefault()
    controlSearch()
})

elements.searchResPages.addEventListener("click", e => {
    const btn = e.target.closest(".btn-inline")
    if (btn){
        const goToPage = parseInt(btn.dataset.goto, 10)
        searchView.clearResults()
        searchView.renderResults(state.search.result, goToPage)
        
    }
    
})
