// EXEMPLO 06 - forEach usa callback para percorrer um array.

// Array: uma lista com três elementos.
const animais = ["Gato", "Cachorro", "Coelho"];

// Este callback recebe UM animal por vez.
function mostrarAnimal(animal) {
  console.log("Animal:", animal);
}

// forEach executa mostrarAnimal automaticamente para cada item.
// Sem parênteses: passamos a funcão, não o resultado dela.
animais.forEach(mostrarAnimal);

// Outra maneira de escrever a mesma ideia: arrow function.
animais.forEach((animal, indice) => {
  // indice comeca em 0; por isso somamos 1 para mostrar 1, 2 e
  console.log(`Posição ${indice + 1}: ${animal}`);
  });

// IMPORTANTE: forEach nao cria automaticamente um novo array.