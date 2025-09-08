const http = require( "http" ),
      fs   = require( "fs" ),
      // IMPORTANT: you must run `npm install` in the directory for this assignment
      // to install the mime library if you"re testing this on your local machine.
      // However, Glitch will install it automatically by looking in your package.json
      // file.
      mime = require( "mime" ),
      dir  = "public/",
      port = 3000

const appdata = []

const server = http.createServer( function( request,response ) {
  if( request.method === "GET" ) {
    handleGet( request, response )    
  }else if( request.method === "POST" ){
    handlePost( request, response ) 
  }
  else if (request.method === "DELETE"){
    handleDelete(request, response);
  }
  else if (request.method === "PATCH"){
    handlePatch(request, response);
  }
})

const handleGet = function( request, response ) {
  const filename = dir + request.url.slice( 1 ) 

  if( request.url === "/" ) {
    sendFile( response, "public/index.html" )
  }
  else if (request.url === "/data"){
    response.writeHead(200, {"Content-Type": "application/json"});
    response.end(JSON.stringify(appdata));
  }
  else{
    sendFile( response, filename )
  }
}

const handlePost = function( request, response ) {
  let dataString = ""

  let url = request.url.slice( 1 ) 
  if (url == "/submit"){
    //do something with data
  }
  else if (url == "/update"){
    //do something else with data
  }

  request.on( "data", function( data ) {
      dataString += data 
  })

  request.on( "end", function() {
    console.log( JSON.parse( dataString ) )

    // ... do something with the data here!!!

    appdata.push(JSON.parse( dataString ));

    response.writeHead( 200, "OK", {"Content-Type": "text/plain" })
    response.end(JSON.stringify(appdata))
  })
}

const handleDelete = function(request, response){
  console.log("deleteHandle");
  let dataString = "";

  request.on("data", chunk => {
    dataString += chunk;
  });

  request.on("end", () => {
    let parsed = JSON.parse(dataString);   
    let index = Number(parsed.index);
    index = index - 1;

    appdata.splice(index, 1);              
    response.end("deleted");
  });

  response.writeHead( 200, "OK", {"Content-Type": "text/plain" })
  response.end(JSON.stringify(appdata))
}

const handlePatch = function(request, response){
  let dataString = "";
  console.log("patchHandle");

  request.on( "data", function( data ) {
      dataString += data 
  })

  request.on( "end", function() {
    const json = JSON.parse(dataString);
    const row = json.row;
    const color = json.color;

    let index = parseInt(json.row);
    index = index - 1;

    if (appdata[index]) {
      appdata[index].color = json.color;
    }
    
    response.writeHead( 200, "OK", {"Content-Type": "text/plain" })
    response.end(JSON.stringify(appdata))
  })

  
}

const sendFile = function( response, filename ) {
   const type = mime.getType( filename ) 

   fs.readFile( filename, function( err, content ) {

     // if the error = null, then we"ve loaded the file successfully
     if( err === null ) {

       // status code: https://httpstatuses.com
       response.writeHeader( 200, { "Content-Type": type })
       response.end( content )

     }else{

       // file not found, error code 404
       response.writeHeader( 404 )
       response.end( "404 Error: File Not Found" )

     }
   })
}

server.listen( process.env.PORT || port )
 