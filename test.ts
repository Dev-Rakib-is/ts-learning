// Function + Optional Parameter

const add = (a: number, b: number, c?: number): number => {
    return a + b
}

console.log(add(5, 6));

// union 
type Id = number | string

function typeID(id: Id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());

    } else {
        console.log(id);

    }
}

// literal type 

type Status = "Success" | "Error" | "Loading"

const handleStatus = (status: Status) => {
    if (status === "Success") {
        console.log("Done");

    } else if (status === "Error") {
        console.log("Error");

    } else {
        console.log("Loading ..");

    }
}

// enam 

enum Role {
    admin = "ADMIN",
    user = "USER",
    guiest = "GUIEST"
}

const roleHandler = (role: Role) => {
    switch (role) {
        case Role.admin: return "access full";
        case Role.user: return "Limited Access";
        case Role.guiest: return "Guiest Access"
    }

}

// Tupel
type userTupel = [string, number]
const userType: userTupel = ["Rakib", 10]

// litaral + interface+function 
type StatusB = "Available" | "Out Of Stock";

interface productType {
    id: number,
    name: string,
    price: number,
    status: StatusB
    discount?: number
};

const allProduct: productType[] = [
    { id: 1, name: "Mango", price: 22, status: "Available", discount: 0 },
    { id: 2, name: "Jack-fruit", price: 24, status: "Available", discount: 2 },
    { id: 3, name: "Orange", price: 20, status: "Out Of Stock", discount: 0 },
    { id: 4, name: "Guava", price: 19, status: "Available", discount: 1 },
    { id: 5, name: "Avocado", price: 25, status: "Available", discount: 0 },
]

const product = (typeProduct: productType[]): { name: string, discount: number }[] => {
    return typeProduct
        .filter(p => p.status === "Available" && p.price > 20)
        .map(n => ({ name: n.name, discount: n.discount ? n.discount : 0 }))
}
const result = product(allProduct);
console.log(result);

