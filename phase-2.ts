type userType = {
    name: string,
    age?: number,
    gender: string,
    email: string | null
}

const User: userType = {
    name: "Rakib",
    gender: "male",
    email: "ri3390990@gmail.com",
    age: 25,
}
function employ(user: userType): string {
    if (user.age === undefined) {
        return "Age not provided"
    }

    if (user.email === null) {
        return "Email not provided"
    }

    return `Name: ${user.name}, Age: ${user.age ?? "Not Prodided"}`
}

const result3 = employ(User)
console.log(result3);


// ID handling 
type ID = string | number

function formetID(id: ID): string {
    if (typeof id === "string") {
        return id.toUpperCase()
    } else {
        return `ID-${id}`
    }

}

const employId1 = formetID("Rakib")
const employId2 = formetID(1025014)
console.log(employId1);
console.log(employId2);

