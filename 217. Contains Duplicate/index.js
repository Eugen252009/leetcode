"use strict";
export function containsDuplicate(nums) {
    var set = new Set();
    nums.forEach(function (item) {
        set.add(item);
    });
    return set.size !== nums.length;
}
