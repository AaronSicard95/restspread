const filterOutOdds=(...args)=>(args.filter(n=>n%2===0));

const findMin=(...nums)=>(nums.sort()[0]);

const merge = (obj1, obj2)=>({...obj1, ...obj2});

const doubleAndReturn = (arr,...args)=>([...arr, ...args.map(n=>(n*2))]);

const removeRandom=(items)=>(items.slice(Math.floor(Math.random()*items.length),1));

const addKeyVal=(obj, key, val)=>({...obj, [key]: val});

const removeKey = (obj, key)=>{
    let {[key]: lol, ...rest} = obj;
    return rest;
}

const combine = (obj1, obj2)=>({...obj1, ...obj2});

const update = (obj, key, val)=>({...obj, [key]: val});