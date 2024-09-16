"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Implementa = void 0;
//Exercicio 1
class Implementa {
    constructor(name, lastName, age) {
        this.favoriteFoods = [];
        this.fullName = "";
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.isOlderThanEighteen = age >= 18;
    }
    setFullName(name, lastName) {
        this.fullName = `${name} ${lastName}`;
    }
    showUserData() {
        return `Nome Completo: ${this.fullName}, Idade: ${this.age}, Comidas Favoritas: ${this.favoriteFoods.join(", ")}`;
    }
    //Exercicio 2
    sumArray(numeros) {
        if (numeros.length === 0) {
            return 0;
        }
        return numeros[0] + this.sumArray(numeros.slice(1));
    }
    //Exercicio 3
    reverseArray(params) {
        return params.reverse();
    }
    catchArray(input) {
        if (typeof input === "number") {
            return input * input;
        }
        else {
            return input.map((num) => num * num);
        }
    }
}
exports.Implementa = Implementa;
