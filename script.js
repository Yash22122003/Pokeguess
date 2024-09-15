
document.addEventListener("DOMContentLoaded", fetchData);
var pokename;
async function fetchData() {
    try {
        const response1 = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
        data = await response1.json();
        randomkey = Math.floor(Math.random() * (90)) + 1;
        const response2 = await fetch(data.results[randomkey].url);
        const pokemonData = await response2.json();
        const imgEl =  document.getElementById("papi");
        // imgEl.src = pokemonData.sprites.front_shiny;
        imgEl.src = pokemonData.sprites.front_default;
        pokename = pokemonData.name;
    } 
    catch (error) {
        console.error(error);
    }
}

function checkGuess(event){

    if(event.key === "Enter"){
        const guess = event.target.value;
        if(guess.toLowerCase() === pokename){
            alert("You guessed correctly!");
        }
        else{
            alert("You guessed wrong!");

        }
        window.location.reload();
    }
}