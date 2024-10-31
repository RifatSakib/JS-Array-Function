function sumOfNumbers (numbers){

    let sum = 0;
    for(const number of numbers){
        sum = sum + number;

    }
    return sum;
}

const numbs = [1,2,3,4,8];
const sum = sumOfNumbers(numbs);
console.log(sum); 
