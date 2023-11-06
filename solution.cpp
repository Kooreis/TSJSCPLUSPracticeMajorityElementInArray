```cpp
#include <iostream>
#include <unordered_map>
#include <vector>

int findMajorityElement(std::vector<int>& nums) {
    std::unordered_map<int, int> counts;
    int count = 0;
    for (const int& num : nums) {
        if (++counts[num] > count) {
            count = counts[num];
        }
    }
    for (const auto& kv : counts) {
        if (kv.second == count) {
            return kv.first;
        }
    }
    return -1;
}

int main() {
    std::vector<int> nums = {2,2,1,1,1,2,2};
    std::cout << findMajorityElement(nums) << std::endl;
    return 0;
}
```