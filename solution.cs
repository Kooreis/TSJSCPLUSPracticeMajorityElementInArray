Here is a JavaScript solution for the problem:

```javascript
function findMajorityElement(arr) {
    let countMap = {};
    let majorityElement = null;
    let majorityCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (!countMap[arr[i]]) {
            countMap[arr[i]] = 1;
        } else {
            countMap[arr[i]]++;
        }

        if (countMap[arr[i]] > majorityCount) {
            majorityCount = countMap[arr[i]];
            majorityElement = arr[i];
        }
    }

    if (majorityCount > arr.length / 2) {
        return majorityElement;
    } else {
        return null;
    }
}

console.log(findMajorityElement([3, 2, 3]));
console.log(findMajorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(findMajorityElement([1]));
console.log(findMajorityElement([3, 2, 3, 2, 2, 2, 2]));
```

This console application defines a function `findMajorityElement` that takes an array as input and returns the majority element if it exists, or `null` if it doesn't. The function uses a map to count the occurrences of each element in the array, and keeps track of the element with the highest count that is also more than half the length of the array. The application then tests this function with several example arrays.