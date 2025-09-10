// FRONT-END (CLIENT) JAVASCRIPT HERE

const submit = async function( event ) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()
  
  //alert("submit worked")

  const input = document.querySelector( "#yourname").value,
        fields = input.split(" ");
        //json = { "yourname": input.value }, //take data from input
        json = {model: fields[0], color: fields[1], year: fields[2], age: 2025-fields[2]};
        body = JSON.stringify( json ); //turn it into a string

  if (isNaN(Number(fields[2]))) {
    alert("Invalid year field for " + fields[0]);
    json = {model: fields[0], color: fields[1], year: fields[2], age: "??"};
    body = JSON.stringify( json );
  }
  else if (fields[2] > 2025){
    alert("Impossible guitar: built after 2025");
  }

  //alert(input.value);
  const response = await fetch( "/submit", { //wait until i get something back from fetch (dont continue until server responds)
    method:"POST",
    body 
  })//.then (function(reponse){return response.text();})
  //.then (function(text){console.log("text:", text);}) 

  fetchArray();
}

const deleteFunction = async function( event ){

  const input = document.querySelector(" #removeText").value,
        json = {index: input};
        body = JSON.stringify( json );
  
  const response = await fetch("/delete", {
    method:"DELETE",
    headers: {"Content-Type": "application/json"},
    body
  });

  //const updated = await response.json();
  //alert(updated);

  fetchArray();
}

const changeFunction = async function (event){
  
  const input = document.getElementById("changeText").value, //text from change color input box
        [row, color] = input.split(" "); //split the input on the space character, divide into row and color
        body = JSON.stringify({ row: parseInt(row), color });

  await fetch("/patch", { //patch request 
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body
  });

  

  fetchArray();
}

window.onload = function() { //when page is done loading, we'll run this function
  const button = document.querySelector("button"); 
  button.onclick = submit; //when button is clicked, run async function submit (above)

  const removeButton = document.getElementById("removeButton");
  removeButton.onclick = deleteFunction;

  const changeButton = document.getElementById("changeButton");
  changeButton.onclick = changeFunction;
}

const fetchArray = async function (event){
  const response = await fetch("/data", {
    method:"GET",
  })

  const data = await response.json();

  //finds the existing table and makes it blank 
  const existingTable = document.getElementById('table');
  existingTable.innerHTML = "";

  var table = document.createElement("table");
  
  let y = "";

  y += "<tr class='firstRow'><th>Model</th><th>Color</th><th>Year</th><th>Age</th>";
  //converts data array into table format
  for (var i = 0; i < data.length; i++){
    y += "<tr>";
    y += "<td>" + data[i].model + "</td>";
    y += "<td>" + data[i].color + "</td>";
    y += "<td>" + data[i].year + "</td>";
    y += "<td>" + data[i].age + "</td>";
   // let age = 2025 - (data[i].year).value; 

    //y += "<td>" + age + "</td>";
    y += "</tr>";
  }

  table.innerHTML = y;

  document.getElementById("table").append(table);
}


