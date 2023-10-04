export function twoSum(nums, target) {
    const m = new Map();
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];
        const diff = target - n;
        if (m.has(diff)) return [m.get(diff), i];
        else m.set(n, i);
    }
};
