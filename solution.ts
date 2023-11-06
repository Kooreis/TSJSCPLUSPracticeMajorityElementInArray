Here is a TypeScript console application that solves the problem:

```typescript
class MajorityElementFinder {
    findMajorityElement(arr: number[]): number | null {
        let countMap = new Map<number, number>();
        for (let num of arr) {
            if (countMap.has(num)) {
                countMap.set(num, countMap.get(num)! + 1);
            } else {
                countMap.set(num, 1);
            }
        }

        let majorityCount = arr.length / 2;
        for (let [num, count] of countMap.entries()) {
            if (count > majorityCount) {
                return num;
            }
        }

        return null;
    }
}

let finder = new MajorityElementFinder();
let arr = [2, 2, 1, 1, 1, 2, 2];
console.log(finder.findMajorityElement(arr));
```

This application defines a `MajorityElementFinder` class with a `findMajorityElement` method that takes an array of numbers and returns the majority element or `null` if there is no majority element. The method uses a `Map` to count the occurrences of each number in the array, then iterates over the entries in the `Map` to find a number that occurs more than half the length of the array. The application then creates an instance of `MajorityElementFinder` and uses it to find the majority element in a sample array.