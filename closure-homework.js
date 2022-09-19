function getMathModule(x){
    const y = 2;
    return{
        sum(){
            return x + y;
        },
        substract() {
            return x - y;
        },
        multiply() {
            return x * y;
        },
        divide() {
            return x / y;
        }
    };
}

const math = getMathModule(2);

console.log(math.sum());
console.log(math.substract());
console.log(math.multiply());
console.log(math.divide());