
// array 
function holderName<allName>(...params: allName[]): allName[] {
    return params
}

const holder = holderName("jon", "akash", "jack");
console.log("Name:", holder);


// bascis
function holderNameA<allName>(params: allName): allName {
    return params
}

const holdeA = holderNameA("billal")
console.log("Name:", holdeA);


// object 
function afsar<obj>(params: obj): { data: obj } {
    return { data: params }
}

const alloff = afsar("object make done ")
console.log(alloff);


