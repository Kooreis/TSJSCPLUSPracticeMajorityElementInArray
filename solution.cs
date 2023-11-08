for (let i = 0; i < arr.length; i++) {
        if (!countMap[arr[i]]) {
            countMap[arr[i]] = 1;
        } else {
            countMap[arr[i]]++;
        }
}