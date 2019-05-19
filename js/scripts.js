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
        pokemonRepository.loadDetails(item).then(function() {
          showModal(item)
        })
      }

      // function handling Modal
      function showModal (item) {
        var $modalContainer = document.querySelector('#modal-container');

        $modalContainer.innerHTML = '';

        // creating modal DOM element.
        var modal = document.createElement('div');
        modal.classList.add('modal');
        var closeButtonElement = document.createElement('button');

        // Pokemon Name:
        var pokemonName = document.createElement('h1');
        pokemonName.innerText = item.name

        // Pokemon ImageUrl:
        var pokemonImg = document.createElement('img');
        pokemonImg.setAttribute('src', item.imageUrl)

        // Pokemon Height:
        var pokemonHeight = document.createElement('p');
        pokemonHeight.innerText = 'Height: ' + item.height


        // Forging modal with created DOM elements;
        modal.appendChild(closeButtonElement);
        modal.appendChild(pokemonName);
        modal.appendChild(pokemonImg);
        modal.appendChild(pokemonHeight);
        $modalContainer.appendChild(modal);

        $modalContainer.classList.add('is-visible');

        // handling modal events:

        // closes modal with button click:
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);


        // Closes modal with escape:
        window.addEventListener('keydown', (e) => {
          var $modalContainer = document.querySelector('#modal-container');
          if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
            hideModal();
          }
        });
      }

      function hideModal () {
        var $modalContainer = document.querySelector('#modal-container');
        $modalContainer.classList.remove('is-visible');
      }

      //This function creat an nodes in DOM to create list of pokemons:
      function addListItem (item) {
        // create DOM elements
        var $listItem = document.createElement('LI');
        var $button = document.createElement('Input');
        var $list = document.querySelector('.pokedex-window');
        // append elements creating the list layout.
        $list.appendChild($listItem)
        $listItem.appendChild($button)
        $button.setAttribute('type', 'button')
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
