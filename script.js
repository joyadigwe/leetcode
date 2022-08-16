function hello () {
    return "hello edabit.com"
}

/* Create a function that takes two numbers as arguments and returns their sum */
function addition(a,b) {
    return a + b;
}

//Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(arr) {
    return arr[0];
}

/*Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that ecah input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order */

var twoSum = function(nums, target) {
    for (var i=0; i<nums.length; i++) {
        for (var j= i +1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return[i, j];
            }
        }
    }
};



//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4];
//Check for the first reoccuring element
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5];
//It should return undefined


//brute force approach
function firstRecurringCharacter(input) {
    for(let i = 0; i < input.length; i++){
        //every time outer for loop shifts then j will still be reset to 1 so you need to make it i + 1
        for(let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i]
            }
        }
    }
    return undefined;
}
//time complexity O(n^2)

function firstRecurringCharacter2(input) {
    let map = {};
    for(let i=0; i<input.length; i++) {
        if(map[input[i]] !== undefined) {
            return input[i]
        }
        else {
            map[input[i]] = i
        }
    } 
    return undefined;
}

firstRecurringCharacter2([2,5,1,2,3,5,1,2,4])

//Create a function that takes a number as an argument
//increments the number by +1 and returns the result
function addition(num) {
    return ++num
}

//Call a function and save the return value in x:
var x = myFunction(4,3);

function myFunction(a, b) {
    //Return the product of a and b
    return a * b;
}

//Write a function that takes the base and height of a triangle
//Return its area
function triArea(base, height) {
    return (base*height)/2;
}

//Return true if the given string is a palindrome. Otherwise, return false.
//check if string given as input, is the same as reversed
function palindrome(str) {
    //convert to an array of letters
    //reverse to reverse all the letters in array
    //join to convert back to a string
    var reversed = str.split("").reverse().join("");
    if (reversed === str) {return true;
    
    } else {
    
    return false;
    }
}
console.log(palindrome("eye"));

//Linked Lists
//10-->5-->16

/* let myLinkedList = {
    //object with head property
    head: {
        //node with data 
        value: 10,
        next: {
            value: 5, 
            next: {
                value: 16,
                next: null
            }
        }
    }
}*/

class LinkedList {
    //constructor is about creating the very first linked list
    constructor(value) {
    this.head = {
        value: value,
        next: null
    };
    this.tail = this.head;
    this.length = 1;
    }
    append(value) {
        //Code here
        const newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
        }
    }


const myLinkedList = new LinkedList(10);
//myLinkedList.append(5);
//myLinkedList.append(16);
console.log(myLinkedList);