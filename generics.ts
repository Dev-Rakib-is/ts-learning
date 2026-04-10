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
const b = simple("mirja abbas")
console.log(a);
console.log(b);


