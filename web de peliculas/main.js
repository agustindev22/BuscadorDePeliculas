
//--------------------------------------     JS de la barra de navegacion           ------------------------------------------

const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const nav = document.querySelector("#nav");

abrir.addEventListener("click",()=>{
  nav.classList.add("visible")

})

nav .addEventListener("click",()=>{
  nav.classList.remove("visible")
})


//-------------------------   JS de las peliculas -------------------------
const searchInput = document.getElementById('searchInput');
const apiKey='ea98fcbf';



searchInput.addEventListener('input', searchMovies);

async function searchMovies(){
    const searchterm = searchInput.value;
    if(searchterm.length > 2){
       
        const url =  ` http://www.omdbapi.com/?apikey=${apiKey}&s=${searchterm}`;

        try {
           const response = await fetch(url);
           const data = await response.json();
           console.log(data.Search);

           if(data.Search){
             displayResults(data.Search);
           } else {
            displayResults([]);
           }

        } catch(error){
           console.log ('Error al buscar peliculas' , error);   
        }
    } else {
      clearResults();
    }
}
function displayResults (movies){
  const resultsContainer =  document.getElementById("results");
  resultsContainer .innerHTML='';

   movies.forEach(movie => {
    const listItem = document.createElement("li");
    listItem.classList.add("movie");
    listItem .innerHTML=`
              <img class="img" src="${movie.Poster}"> 
              <h1 class="title">${movie.Title}</h1>
              <p class="año">Año:${movie.Year}</p> 
              <button class="btn" >Ver</button>
            
             `
           
             ;
             resultsContainer.appendChild(listItem);
    
   });
}

