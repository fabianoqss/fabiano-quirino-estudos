import { Implementa } from "./implementa";

// Exercicio 1
const pessoa = new Implementa("Fabiano", "Quirino", 25);
pessoa.setFullName("Fabiano", "Quirino");
pessoa.favoriteFoods = ["Sushi", "Pizza"];
console.log(pessoa.showUserData());

// Exercicio 2
const numbers = [1, 2, 3, 4, 5];
console.log(pessoa.sumArray(numbers));

// Exercicio 3
const arrayNumeros = [1, 2, 3, 4, 5];
const arrayStrings = ["São Paulo", "Rio Grande do Sul", "Paris", "NY"];
console.log(pessoa.reverseArray(arrayNumeros));
console.log(pessoa.reverseArray(arrayStrings));

// Exercicio 4
console.log(pessoa.catchArray(5));
console.log(pessoa.catchArray([1, 2, 3, 4, 5]));
