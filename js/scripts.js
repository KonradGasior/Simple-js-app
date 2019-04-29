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

    // this line will add extra text only if pokemon heigth excedes 0.5m.
    document.write("<p>" + repository[i].name + "\( " + "heigth: " + repository[i].heigth + ", Type: ")

    if (repository[i].types[0] === "Fire") {
      document.write("<span class = \"fire\">" + repository[i].types[0] + "</span>")
    } else if(repository[i].types[0] === "Water") {
      document.write("<span class = \"water\">" + repository[i].types[0] + "</span>")
    } else if(repository[i].types[0] === "Electric") {
      document.write("<span class = \"electric\">" + repository[i].types[0] + "</span>")}

    document.write(" \) -- Wow that's big!!! </p>" )
  } else  {

    document.write("<p>" + repository[i].name + "\( " + "heigth: " + repository[i].heigth + ", Type: " )

    // this part change color of the pokemon based on type
    if (repository[i].types[0] === "Fire") {
      document.write("<span class = \"fire\">" + repository[i].types[0] + "</span> " + " \)" + "</p>")
    } else if(repository[i].types[0] === "Water") {
      document.write("<span class = \"water\">" + repository[i].types[0] + "</span> " + " \)" + " </p>")
    } else if(repository[i].types[0] === "Electric") {
      document.write("<span class = \"electric\">" + repository[i].types[0] + "</span> " + " \)" + "</p>") }
    }
}
