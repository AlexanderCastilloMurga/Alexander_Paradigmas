function convertirJsonAImagen(){
    var request = new XMLHttpRequest()
    
    request.open('GET',"https://api.disneyapi.dev/character",true);
    request.onload = function (){
        if (request.status >= 200 && request.status < 400) {
            
            var json = JSON.parse(request.responseText);
            var characters = json.data;
            var randomIndex = Math.floor(Math.random() * characters.length);
            var randomCharacter = characters[randomIndex];
            
            console.log(randomCharacter);

            var imagenElement = document.createElement("img");
            imagenElement.src = randomCharacter.imageUrl;

            var nameElement = document.createElement("p");
            nameElement.textContent = randomCharacter.name;

            var filmElement = document.createElement("p");
            filmElement.textContent = randomCharacter.films.join(", ");

            document.getElementById('resultado1').innerHTML = '';
            document.getElementById('resultado1').appendChild(imagenElement);
            document.getElementById('resultado1').appendChild(nameElement);
            document.getElementById('resultado1').appendChild(filmElement);
        }
    };
    request.send();
}

function convertirJsonAImagenConFetch(){
fetch("https://api.disneyapi.dev/character")
 .then(function(response){
    return response.json();
 })
.then(function(respjson){
    console.log(respjson);
    var characters = respjson.data;
    var randomIndex = Math.floor(Math.random() * characters.length);
    var randomCharacter = characters[randomIndex];

    var imagenElement = document.createElement("img");
    imagenElement.src = randomCharacter.imageUrl;

    var nameElement = document.createElement("p");
    nameElement.textContent = randomCharacter.name;

    var filmElement = document.createElement("p");
    filmElement.textContent = randomCharacter.films.join(", ");

    document.getElementById('resultado2').innerHTML = '';
    document.getElementById('resultado2').appendChild(imagenElement);
    document.getElementById('resultado2').appendChild(nameElement);
    document.getElementById('resultado2').appendChild(filmElement);
 })

 .catch(function (err){
    console.log(err);
 });
}

function llamarConvertirViaCDN(){
    $.getJSON("https://api.disneyapi.dev/character",
    function(json){
            console.log(json);
    var characters = json.data;
    var randomIndex = Math.floor(Math.random() * characters.length);
    var randomCharacter = characters[randomIndex];

    var imagenElement = document.createElement("img");
    imagenElement.src = randomCharacter.imageUrl;
    
    var nameElement = document.createElement("p");
    nameElement.textContent = randomCharacter.name;

    var filmElement = document.createElement("p");
    filmElement.textContent = randomCharacter.films.join(", ");

    $('#resultado3').html(imagenElement);
    $('#resultado3').append(nameElement);
    $('#resultado3').append(filmElement);
    }
    );
}

function ConvertirLocal(){
var cantidadSeleccionada = $("#cantidadImagenes").val();

$.getJSON("https://api.disneyapi.dev/character?pageSize="+cantidadSeleccionada,
function(json){
    console.log(json);
    console.log(json.data);

    $('#resultado4').html('');

    for(var i = 0; i < json.data.length; i++){
    var imagenElement = document.createElement("img");
    imagenElement.src = json.data[i].imageUrl;

    var nameElement = document.createElement("p");
    nameElement.textContent = json.data[i].name;

    var filmElement = document.createElement("p");
    filmElement.textContent = json.data[i].films.join(", ");

    $('#resultado4').append(imagenElement);
    $('#resultado4').append(nameElement);
    $('#resultado4').append(filmElement);
}
}
);
}

function listaDePersonajes() {
var request = new XMLHttpRequest();

request.open('GET', "https://api.disneyapi.dev/character", true);

request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var json = JSON.parse(request.responseText);
        
        console.log(json);
        console.log(json.data);

        var ulElement = document.createElement("ul");

        for (var i = 0; i < json.data.length; i++) {
            var liElement = document.createElement("li");
            liElement.textContent = json.data[i].name;
            ulElement.appendChild(liElement);
        }

        document.getElementById('resultado5').innerHTML = '';
        document.getElementById('resultado5').appendChild(ulElement);
    }
};

request.send();
}

function getCharacter() {
var selectedCharacter = $(".disney-character-selector option:selected").val();
characterURL = selectedCharacter.replace(/ /g, '%20');
$.getJSON("https://api.disneyapi.dev/character?name=" + characterURL, function(result) {
    $(".demo-image").html("<img src='" + result.data[0].imageUrl + "'>");
});
}

function loadCharacters() {
    $.getJSON("https://api.disneyapi.dev/character", function(result) {
        var characters = result.data;
        firstCharacter = characters[0].name;
        $.each(characters, function(index, character) {
            $(".disney-character-selector").append('<option value="' + character.name + '">' + character.name + '</option>');
        });
        $.getJSON("https://api.disneyapi.dev/character?name=" + firstCharacter, function(result) {
            $(".demo-image").html("<img src='" + result.data[0].imageUrl + "'>");
        });
    });
}
$(".disney-character-selector").change(function() {
    $(".disney-character-selector option:selected").each(function() {
        getCharacter();
    });
});
$(".get-character").click(function() {
    getCharacter();
});
$(document).ready(function() {
    loadCharacters();
});

