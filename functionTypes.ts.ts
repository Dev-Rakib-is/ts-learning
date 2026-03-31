
// type Status = "Out of Stock" | "Available"
// type Product = { id: number, name: string, status: Status, price: number, discount?: number }

// const products: Product[] = [
//     {
//         id: 1,
//         name: "Mango",
//         status: "Available",
//         price: 2
//     },
//     {
//         id: 2,
//         name: "Banana",
//         status: "Available",
//         price: 3
//     },
//     {
//         id: 3,
//         name: "Jackfruit",
//         price: 2,
//         status: "Available",
//         discount: .5
//     },
//     {
//         id: 4,
//         name: "Water melon",
//         price: 2.2,
//         status: "Out of Stock"
//     }
// ]

// const allProduct = (products: Product[]): string[] => {
//     return products
//         .filter(p => p.price >= 1.2 && p.status === "Available" && p.discount !== undefined)
//         .map(m => m.name)
// }

// const result = allProduct(products)
// console.log(result);


