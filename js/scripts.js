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

// Loop which will print the content of the pokemon object
for ( var i = 0; i < 3; i++ ) {
  if (repository[i].heigth > 0.5) {
    document.write("<p>" + repository[i].name + "\( " + "heigth: " + repository[i].heigth +" \) -- Wow that's big!!! </p>" );
  } else {
      document.write("<p>" + repository[i].name + "\( " + "heigth: " + repository[i].heigth +" \)</p>" ); }
}
