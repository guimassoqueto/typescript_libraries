// Its ES6 and Typescript era. Nowadays you are working with classes and constructor objects 
// more than ever. Class-transformer allows you to transform plain object to some instance of 
// class and versa. Also it allows to serialize / deserialize object based on criteria. 
// This tool is super useful on both frontend and backend.

// Documentation: https://github.com/typestack/class-transformer#installation

import { plainToInstance } from 'class-transformer';
import 'reflect-metadata';

type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

class Todo {
    constructor (
        public readonly id: number,
        public readonly title: string,
        public readonly completed: boolean,
    ){}

    sayHello() {
        console.log(`Todo ID: ${this.id}, Todo Task: ${this.title}`);
    }
}

async function getTodos(url: string): Promise<Todo[]> {
    try {
        const response: Response = await fetch(url);
        const todos: TodoType[] = await response.json();
        return plainToInstance(Todo, todos);
    }
    catch (error: any) {
        throw error
    }
}

/*************************************************************************/

getTodos('https://jsonplaceholder.typicode.com/todos')
.then(todos => {
    for(const todo of todos) {
        todo.sayHello()
    }
})
.catch((error: Error) => {
    console.error(error.name)
})
