import Search from "./models/Search"

//2.state:
/*Global state of the app
-search object
-current recipe object
-shoping list object 
-liked recipes
*/
const state = {}

//4. controller
const controlSearch = async () => {

    //a. get query from view
    const query ="pizza"
    if(query){
    //b. new search object and add to state 
    state.search = new Search(query)
    //c.prepare ui for results 
    //d. search for recipes 
    await state.search.getResults()
    //e. render reesults on ui
    console.log(state.search.result)
    }
}

//3. add event listener "submit", is used to valid data
document.querySelector(".search").addEventListener("submit", e => {
    e.preventDefault()
    controlSearch()
})

