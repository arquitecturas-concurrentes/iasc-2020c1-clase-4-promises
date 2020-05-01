Promise(15)
    .then(numero => numero + 1)
    .then((numero) => console.log(numero));

const respuestaHTTP = fetch('https://pokeapi.co/api/v2/pokemon/1');

respuestaHTTP.then(response => console.log(response.status));

respuestaHTTP
    .then(response => {
        response.json().then(pokemon => {
            console.log(`Encontre a: ${pokemon.name}`)
        })
    });

// `then` funciona como `map` y como `flatMap`
fetch('https://pokeapi.co/api/v2/pokemon/1')
    // response.json() devuelve una Promesa
    .then(response => response.json())
    .then(pokemon => console.log(`Encontre a: ${pokemon.name}`));