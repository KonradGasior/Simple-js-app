// This is my pokedex app which has been wrapped in IIFE to wrap and separed it from global scope.
var pokedexApp = (function (){

  // IIFE for pokemon repository variable
  var pokemonRepository = (function() {
    var repository = [];
    // api url address:
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add (item) {
      if(typeof item === 'object'){
        repository.push(item);}
    };

    function getAll () {
      return repository;
    };

    // Detailed pokemon information display function:
    function showDetails (item) {
      pokemonRepository.loadDetails(item).then(function ()
    {
      console.log(item); })
    }

    //This function creat an nodes in DOM to create list of pokemons:
    function addListItem (item) {
      var $listItem = document.createElement('LI');
      var $button = document.createElement('Input');
      var $list = document.querySelector('.pokedex-window');
      $list.appendChild($listItem);
      $listItem.appendChild($button);
      $button.setAttribute('type', 'button');
      $button.setAttribute('value', item.name)
      $button.addEventListener('click', function () {
        showDetails(item);
      })
    }

    // function loading data from api:
    function loadList() {
      showLoadingMessage()
      return fetch(apiUrl).then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon)
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    // Function loading pokemon details from api:
    function loadDetails(pokemon) {
      var url = pokemon.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = Object.keys(details.types);
      }).catch(function (e) {
        console.error(e);
      });
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails
    };
  })();


  // Promise:
  pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function(pokemon) {
      pokemonRepository.addListItem(pokemon)
    });
    hideLoadingMessage ()
  });

// Loading message fucntion - on
function showLoadingMessage () {
  var $message = document.createElement('p');
  var $textNode = document.createTextNode('Loading...');
  $message.appendChild($textNode)

  var $body = document.querySelector('body');
  $body.appendChild($message)

  $message.classList.add('loading-messageBox__show')
}

// Loading message function - off
function hideLoadingMessage () {
  var $body = document.querySelector('body');
  var $message = document.querySelector('.loading-messageBox__show')
  $body.removeChild($message)
}
// End of IIFE pokedexApp.
})();
