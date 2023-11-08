let majorityCount = arr.length / 2;
        for (let [num, count] of countMap.entries()) {
            if (count > majorityCount) {
                return num;
            }
        }
