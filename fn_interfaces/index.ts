// Interfaces & Functions

interface SquareFunction {
    (x: number): number;
}

var squareItBasic: SquareFunction = (num) => num * num;

// interface rectangle
interface Rectangle {
    h: number;
    w?: number;
}

var squareIt: (rect: Rectangle) => number;

squareIt = (rect) => {
    return (rect.w === undefined) ? rect.h & rect.h : rect.h * rect.w;
};

interface Person {
    name: string;
    age?: number;
    kid: number;
    calcPets: () => number;
    makeYounger: (years: number) => void;
    greet: (msg: string) => string;
}

var p: Person = {
    name: 'Brian',
    age: 34,
    kid: 1,
    calcPets: () => {
        return this.kids * 2;
    },
    makeYounger: function (years: number) {
        this.age -= years;
    },
    greet: function (msg: string) {
        return msg + ', ' + this.name;
    }
}
