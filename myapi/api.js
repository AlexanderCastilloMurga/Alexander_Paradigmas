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

        

        document.getElementById('resultado2').innerHTML = '';
        document.getElementById('resultado2').appendChild(imagenElement);
     })

     .catch(function (err){
        console.log(err);
     });
}

function llamarConvertirViaCDN(){
        $.getJSON("https://dog.ceo/api/breeds/image/random",
        function(json){
                console.log(json);
		if(json.message){
			var imagenElement = document.createElement("img");
            imagenElement.src = json.message;
            
            $('#resultado3').html(imagenElement);
		}
                $('#resultado').text(JSON.stringify(json));
        }
        );
}

function ConvertirLocal(){
    var cantidadSeleccionada = $("#cantidadImagenes").val();

	$.getJSON("https://dog.ceo/api/breeds/image/random/"+cantidadSeleccionada,
	function(json){
		console.log(json);
        console.log(json.message);

        $('#resultado4').html('');

        for(var i = 0; i < json.message.length; i++){
        var imagenElement = document.createElement("img");
        imagenElement.src = json.message[i];
		$('#resultado4').append(imagenElement);
    }
	}
	);
}

function listaDePerros() {
    var request = new XMLHttpRequest();

    request.open('GET', "https://dog.ceo/api/breeds/list/all", true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            var json = JSON.parse(request.responseText);
            
            console.log(json);
            console.log(json.message);

            var ulElement = document.createElement("ul");

            for (var breed in json.message) {
                var liElement = document.createElement("li");
                liElement.textContent = breed;
                ulElement.appendChild(liElement);
            }

            document.getElementById('resultado5').innerHTML = '';
            document.getElementById('resultado5').appendChild(ulElement);
        }
    };

    request.send();
}

function getDog() {
    var selectedDog = $(".dog-selector option:selected").val();
    dogURL = selectedDog.replace(/-/g, '/');
    $.getJSON("https://dog.ceo/api/breed/" + dogURL + "/images/random", function(result) {
        $(".demo-image").html("<img src='" + result.message + "'>");
    });
}
function loadDogs() {
    $.getJSON("https://dog.ceo/api/breeds/list/all", function(result) {
        var breeds = result.message;
        firstDog = Object.keys(breeds)[0];
        $.each(breeds, function(dog, breed) {
            if (breeds[dog].length >= 1) {
                for (i = 0; i < breeds[dog].length; i++) {
                    $(".dog-selector").append('<option value="' + dog + '-' + breeds[dog][i] + '">' + breeds[dog][i] + ' ' + dog + '</option>');
                }
            } else if (breeds[dog].length < 1) {
                $(".dog-selector").append('<option value="' + dog + '">' + dog + '</option>');
            }
        });
        $.getJSON("https://dog.ceo/api/breed/" + firstDog + "/images/random", function(result) {
            $(".demo-image").html("<img src='" + result.message + "'>");
        });
    });
}
$(".dog-selector").change(function() {
    $(".dog-selector option:selected").each(function() {
        getDog();
    });
});
$(".get-dog").click(function() {
    getDog();
});
$(document).ready(function() {
    loadDogs();
});
