function checkEqual(num1, num2) {
    if (num1 === num2) {
        return true;
    } else {
        return false;
    }   

}

function approxEquals(num1, num2,epsilon=0.004) {
    return Math.abs(num1 - num2) < epsilon;
};
const approxEqual=(num1, num2, epsilon=0.004)=>(Math.abs(num1 - num2) < epsilon)
console.log(approxEqual(0.199, 0.2))