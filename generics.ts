// Basic Generic 
function bascis<t>(prams: t): t {
    return prams
}

const number = <number>(123);
const names = <string>("Billal");


console.log(names);
console.log(number);

// Array of object 
function addNumber<t>(ary: t[], item: t): t[] {
    return [...ary, item]
}
const result1 = addNumber([1, 2], 3)
const result2 = addNumber(["a", "b"], "c")

console.log(result1);
console.log(result2);


// product function 

type StatusC = "Available" | "Out Of Stock";

interface productTypeA {
    id: number,
    name: string,
    price: number,
    status: StatusB
    discount?: number
};

const sobProduct: productTypeA[] = [
    { id: 1, name: "Mango", price: 22, status: "Available", discount: 0 },
    { id: 2, name: "Jack-fruit", price: 24, status: "Available", discount: 2 },
    { id: 3, name: "Orange", price: 20, status: "Out Of Stock", discount: 0 },
    { id: 4, name: "Guava", price: 19, status: "Available", discount: 1 },
    { id: 5, name: "Avocado", price: 25, status: "Available", discount: 0 },
]


function filteredProduct<T extends {id:number, name: string, price: number, status: StatusC, discount?: number }>(products: T[]) {
    return products
        .filter(p => p.status === "Available" && p.price > 20)
        .map(p => ({
            name: p.name,
            discount: p.discount ?? 0
        }))
}

 