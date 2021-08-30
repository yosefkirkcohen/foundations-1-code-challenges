// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const nameArray = [];
    arr.forEach((item) => {
        nameArray.push(item.name);
        
    });
    return nameArray;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const reversedArray = [];
    arr.forEach((item) => {
        reversedArray.unshift(item.type);
    });
    return reversedArray;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanArray = [];
    arr.forEach((item) => {
        const newItem = { nombre: item.name, tipo: item.type };
        spanArray.push(newItem);
    });
    return spanArray;
}

