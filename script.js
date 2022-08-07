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