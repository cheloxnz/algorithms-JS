// Exercises of CODEWARS, KATA 8 kyu

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
    // Code here
    var sum = 0;
    for (let i = 0; i < num; i++) {
        var res = sum += i
        var total = res + num
    }
    return total;
}

// ---------------------------------------------------------------------- //

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name) {
    //your code here
    return `Hello, ${name} how are you doing today?`;
}

// ---------------------------------------------------------------------- //

// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

function generateRange(min, max, step) {
    let arr = [];
    for (let i = min; i <= max; i += step) {
        arr.push(i);
    }
    return arr;
}

// ---------------------------------------------------------------------- //

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons) {
    //Get Coding!
    return bullets >= dragons * 2
}

// ---------------------------------------------------------------------- //

//  Your task is to create functionisDivideBy (or is_divide_by) to check if an integer number is divisible by each out of two arguments.

function isDivideBy(number, a, b) {
    // good luck
    if (number % a === 0 && number % b === 0) {
        return true;
    } else {
        return false
    }
}

// ---------------------------------------------------------------------- //

//  We want an array, but not just any old array, an array with contents!

//  Write a function that produces an array with the numbers 0 to N-1 in it.

//  For example, the following code will result in an array containing the numbers 0 to 4:

//  arr(5) // => [0,1,2,3,4]

const arr = (N) => {
    var arr = [];
    for (let i = 0; i < N; i++) {
        arr.push(i)
    }
    return arr;
}

// ---------------------------------------------------------------------- //

// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
    let myTime = pontoonDistance / youSpeed
    let sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)

    return sharkTime < myTime ? 'Shark Bait!' : 'Alive!'
}

// ---------------------------------------------------------------------- //

// You are given an array with positive numbers and a number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function index(array, n) {
    //your code here
    return (array.length) > n ? Math.pow(array[n], n) : -1;
}

// ---------------------------------------------------------------------- //

//   It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks) {
    //TODO : calculate the downwar rounded average of the marks array
    return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}

// ---------------------------------------------------------------------- //

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.

function checkAlive(health) {
    if (health > 0) {
        return true
    } else {
        return false
    }
}

// ---------------------------------------------------------------------- //

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function nextId(ids) {
    //this will be awesome!
    for (i = 0; i < ids.length; i++) {
        if (ids.indexOf(i) == -1) {
            return i;
        }
    }
    return ids.length;
}

// ---------------------------------------------------------------------- //

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
    return Math.floor(time * 0.5)
}

// ---------------------------------------------------------------------- //

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

function invert(array) {
    return array.map(e => e * -1)
}

// ---------------------------------------------------------------------- //

// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0

function sakuraFall(v) {
    let distance = 400;
    let time = 0;
    if (v <= 0) {
        return time;
    } else {
        time = distance / v;
    }
    return time;
}

// ---------------------------------------------------------------------- //

// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

// Example output:

// Hello, Mr. Spock

function sayHello(name) {
    return 'Hello, ' + name
}

// ---------------------------------------------------------------------- //

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
}

// ---------------------------------------------------------------------- //

// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

function weatherInfo(temp) {
    var c = convertToCelsius(temp);
    if (c <= 0)
        return (c + " is freezing temperature");
    else
        return (c + " is above freezing temperature");
}

function convertToCelsius(temperature) {
    var celsius = (temperature - 32) * (5 / 9);
    return celsius;
}

// ---------------------------------------------------------------------- //

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    // Implement me
    if (name[0].toLowerCase() === 'r') {
        return name + ' plays banjo';
    } else {
        return name + ' does not play banjo';
    }
}

// ---------------------------------------------------------------------- //

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('')
}

// ---------------------------------------------------------------------- //

// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
    return s.repeat(n);
}

// ---------------------------------------------------------------------- //

// ---------------------------------------------------------------------- //

// ---------------------------------------------------------------------- //

// ---------------------------------------------------------------------- //

// ---------------------------------------------------------------------- //

// ---------------------------------------------------------------------- //

// ---------------------------------------------------------------------- //

// ---------------------------------------------------------------------- //

// ---------------------------------------------------------------------- //