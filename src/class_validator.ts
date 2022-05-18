// Allows use of decorator and non-decorator based validation. Internally uses validator.js 
// to perform validation. Class-validator works on both browser and node.js platforms.

// documentation: https://github.com/typestack/class-validator#readme

import { MinLength } from 'class-validator';
import { validate } from 'class-validator';

class Person {
    @MinLength(3)
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const person1 = new Person('Joaquim');

validate(person1)
.then(errors => {
    if (errors.length) {
        for (const error of errors) {
            console.log(error.constraints)
        }
    }
})