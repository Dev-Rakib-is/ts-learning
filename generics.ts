// Basic Generic 
function bascis<t>(prams: t): t {
    return prams
}

const number = <number>(123);
const names = <string>("Billal");


console.log(names);
console.log(number);



//  Generic with interface 

interface apiResponse<t> {
    data: t;
    status: number
    message: string;
}

const response: apiResponse<string> = {
    data: "Success",
    status: 200,
    message: "Request Not Found "


}