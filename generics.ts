// Basic Generic 
function bascis<t>(prams: t): t {
    return prams
}

const number = bascis<number>(123);
const names = bascis<string>("Billal");


console.log(names);
console.log(number);



//  Generic with interface 

interface ApiResponse<T> {
    data: T;
    status: number
    message: string;
}

const response1: ApiResponse<string> = {
    data: "Success",
    status: 200,
    message: "Requested complited"
}

const response2: ApiResponse<number> = {
    data: 1254,
    status: 500,
    message: " Id Returened"
}


function handleResponse<T>(response: ApiResponse<T>): string {
    return `
    Status: ${response.status}, 
    Message: ${response.message}, 
    Data: ${response.data}`;
}



const res1 = handleResponse(response1)
console.log(res1);

const res2 = handleResponse(response2)
console.log(res2);

// simple generic 

function simple<T>(param: T): T {
    return param
}

const a = simple(20)
const b = simple("Mirja Abbas")
console.log(a);
console.log(b);


// Array Generic 

function ArrayGeneric<T>(array: T[]): T[] {
    return array
}

const arr = ArrayGeneric([1, 2, 3])
const arry = ArrayGeneric(["abbas", "Galib", "Motin"])
console.log(arr);
console.log(arry);

// Multiple Generics 

function multipleGenerics<T, U>(a: T, b: U): [T, U] {
    return [a, b]
}

const Multiple = multipleGenerics("Billal", 20)
console.log(Multiple);


// Generic Interface


interface dnterface<T> {
    data: T;
    success: boolean
}

const res: dnterface<{ name: string, age: number }> = {
    data: { name: "aswat", age: 20 },
    success: true
}

// Constraint
function Constraint<T extends { length: number }>(params: T): T {
    return params
}

const f = Constraint("Hellow")
const g = Constraint([123])
console.log(f);
console.log(g);

// Real-Life Scenario
type User = {
    name: string,
    email: string,
    password: string
}

const getData = async<T>(url: string): Promise<T> => {
    const response = await fetch(url);
    const data: T = await response.json()
    return data
}

const main = async (): Promise<void> => {
    const user = await getData<User>("https://jsonplaceholder.typicode.com/users/1")
    console.log(user);

}

main()