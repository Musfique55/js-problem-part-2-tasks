// Task -1:
// Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(numbers){
    let min = numbers[0];
    for(const number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}

console.log(lowestNumber(heights2));

// Task -2:
// Find the friend with the smallest name.

const friends = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(names){
    let small = names[0];
    for(let name of names){
        if(name.length < small.length){
            small = name;
        }
    }
    return small;
}

console.log(smallestName(friends));

// Your task is to calculate the total budget required to buy electronics:
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

function calculateElectronicsBudget(quanL,quanT,quanM){
    const laptopTotal = laptop * quanL;
    const tabletTotal = tablet * quanT;
    const mobileTotal = mobile * quanM;
    const totalBudget = laptopTotal + tabletTotal + mobileTotal;
    return totalBudget;
}

console.log(calculateElectronicsBudget(2,2,1));


// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice(mobiles){
    let sum = 0;
    for(let phone of mobiles){
        sum += phone.price;
    }
    const avg = sum / mobiles.length;
    return avg;
}

console.log(findAveragePhonePrice(phones));

// // Task -5: (Hard)
// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

    const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalSalary (arr){
    let currentTotalSalary = 0;
    let increment = 0; 
for(let a = 0; a < arr.length; a++){
    const salary = arr[a].starting;
    increment += arr[a].experience * arr[a].increment;
    currentTotalSalary += arr[a].experience * arr[a].increment + salary;
    }
   return `Company have to pay ${currentTotalSalary} in a month.`;
}       

console.log(totalSalary(employees));