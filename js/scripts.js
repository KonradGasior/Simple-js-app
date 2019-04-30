// This is my pokedex app which has been wrapped in IIFE to wrap and separed it from global scope.
var pokedexApp = (function (){

  // IIFE for pokemon repository variable
  pokemonRepository(function() {
    var repository = [];

    function add (item) {
      repository.push(item);
    };

    function getAll () {
      return repository;
    };

    return {
      add: add,
      getAll: getAll
    };
  })();
  
  // Definitions of the pokemon object
  var pokemon1 = {
    name: "Pikachu",
    heigth: 0.4,
    types: ["Electric"]
  };

  var pokemon2 = {
    name: "Charmander",
    heigth: 0.6,
    types: ["Fire"]
  };

  var pokemon3 = {
    name: "Squirtle",
    heigth: 0.5,
    types: ["Water"]
  };

  // Defined repository variable containing all of the objects in an array

  var top_value = repository[0].heigth;

  // Loop which will print the content of the pokemon object
  for ( var i = 0; i < 3; i++ ) {

    // this code will add extra text to the highest pokemon.
    if (repository[i].heigth > top_value) {
      top_value = repository[i].heigth;
      pokemonWrite(repository[i])
      document.write(" -- Wow that's big!!! " )
    } else  {
      pokemonWrite(repository[i])
    }
  };

  function pokemonWrite (pokemon) {
    // this function outoputs pokemon data and change color of the font based on type of pokemon.
    document.write("<p>" + pokemon.name + "\( " + "heigth: " + pokemon.heigth + ", Type: " )
    if (pokemon.types[0] === "Fire") {
      document.write("<span class = \"fire\">" + pokemon.types[0] + "</span> " + " \)")
    } else if(pokemon.types[0] === "Water") {
      document.write("<span class = \"water\">" + pokemon.types[0] + "</span> " + " \)")
    } else if(pokemon.types[0] === "Electric") {
      document.write("<span class = \"electric\">" + pokemon.types[0] + "</span> " + " \)")}
    }

// End of IIFE pokedexApp.
})();
