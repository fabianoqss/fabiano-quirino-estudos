import { Pessoa } from "./pessoa";

//Exercicio 1
export class Implementa implements Pessoa {
  name: string;
  lastName: string;
  age: number;
  isOlderThanEighteen: boolean;
  favoriteFoods: string[] = [];
  fullName: string = "";

  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.isOlderThanEighteen = age >= 18;
  }

  setFullName(name: string, lastName: string): void {
    this.fullName = `${name} ${lastName}`;
  }

  showUserData(): string {
    return `Nome Completo: ${this.fullName}, Idade: ${
      this.age
    }, Comidas Favoritas: ${this.favoriteFoods.join(", ")}`;
  }

  //Exercicio 2
  sumArray(numeros: number[]): number {
    if (numeros.length === 0) {
      return 0;
    }

    return numeros[0] + this.sumArray(numeros.slice(1));
  }

  //Exercicio 3
  reverseArray<T>(params: T[]): T[] {
    return params.reverse();
  }

  //Exercicio 4
  catchArray(number: number): number;
  catchArray(numbers: number[]): number[];

  catchArray(input: number | number[]): number | number[] {
    if (typeof input === "number") {
      return input * input;
    } else {
      return input.map((num) => num * num);
    }
  }
}
