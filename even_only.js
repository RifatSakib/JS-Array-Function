
function evenNumbersOnly(numbers){
    const even = [];
    for(const number of numbers){
        if (number % 2 === 0){
            console.log(number);
            even.push(number);
        }
    }
    return even;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
// const evens = evenNumbersOnly(numbers);
// console.log(evens);


function sumOfEvenNumbers (numbers){

    let sum = 0;
    for(const number of numbers){

        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }

    }
    return sum;
}

const  sum = sumOfEvenNumbers(numbers);
console.log("sum of the even nums: "+sum);