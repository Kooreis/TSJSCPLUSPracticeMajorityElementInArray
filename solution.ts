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
