function stopWatch(){
    let counter = 0;
    return function (){
        countr ++;
        return counter;
    }
}

let clock1 = stopWatch();
console.log(clock1);