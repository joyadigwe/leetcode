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
firstRecurringCharacter([2,5,1,2,3,5,1,2,4])