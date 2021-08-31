// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    return Object.keys(someObject).join('');
    
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    let newObject = {};
    const keyArr = Object.keys(someObject);
    
    const upperKeys = keyArr.map(key => {
        return key.toUpperCase();
    });
    for(let key of upperKeys) {
        newObject[key] = someObject[key.toLowerCase()];
    } 
    console.log(newObject);
    return newObject;
    
    
    

    
    
     
    
}

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    
    const entries = Object.entries(someObject);
    return entries;
}
