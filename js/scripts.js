// This is my pokedex app which has been wrapped in IIFE to wrap and separed it from global scope.
var pokedexApp = (function (){

  // IIFE for pokemon repository variable
  var pokemonRepository = (function() {
    var repository = [];

    function add (item) {
      if(typeof item === 'object'){
        repository.push(item);}
    };

    function getAll () {
      return repository;
    };


    //This function creat an nodes in DOM to create list of pokemons.
    function addListItem (item) {
      var $listItem = document.createElement('LI');
      var $button = document.createElement('Input');
      var $list = document.querySelector('.pokedex-window');
      $list.appendChild($listItem);
      $listItem.appendChild($button);
      $button.setAttribute('type', 'button');
      $button.setAttribute('value', item.name)
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
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

  pokemonRepository.add(pokemon1);
  pokemonRepository.addListItem(pokemon2);
  pokemonRepository.addListItem(pokemon3);


// End of IIFE pokedexApp.
})();
