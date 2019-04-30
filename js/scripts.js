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
var repository = [ pokemon1, pokemon2, pokemon3 ];

var top_value = repository[0].heigth;

// Loop which will print the content of the pokemon object
for ( var i = 0; i < 3; i++ ) {

  // this code will add extra text to the highest pokemon.
  if (repository[i].heigth > top_value) {
    top_value = repository[i].heigth;
    pokemon_write();
    document.write(" -- Wow that's big!!! " )
  } else  {
    pokemon_write()

}

function pokemon_write () {
  // this function outoputs pokemon data and change color of the font based on type of pokemon.
  document.write("<p>" + repository[i].name + "\( " + "heigth: " + repository[i].heigth + ", Type: " )
  if (repository[i].types[0] === "Fire") {
    document.write("<span class = \"fire\">" + repository[i].types[0] + "</span> " + " \)")
  } else if(repository[i].types[0] === "Water") {
    document.write("<span class = \"water\">" + repository[i].types[0] + "</span> " + " \)")
  } else if(repository[i].types[0] === "Electric") {
    document.write("<span class = \"electric\">" + repository[i].types[0] + "</span> " + " \)") }
  }
};
