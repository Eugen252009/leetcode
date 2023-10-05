export function func(...a) {
    const data = productExceptSelf(...a)
    console.log({ finalresult: data })
    return data
}

function productExceptSelf(nums) {
    console.log({ nums })

    let result = nums.reduce((acc, item, id, arr) => {
        return acc * item
    }, 1)
    return nums.map((_, index) =>
        result / nums[index]
    )
};
// function productExceptSelf(nums) {
//     console.log({ nums })
//     return nums.reduce((acc, item, id, arr) => {
//         for (let index = 0; index < arr.length; index++) {
//             const element = arr[index];
//             if (index === id) continue
//             if (acc[id] == null) acc[id] = 1
//             acc[id] *= element
//         }
//         return acc
//     }, [])
// };



// var productExceptSelf = function(nums) {
//   const length = nums.length;
//   const result = new Array(length).fill(1);
//
//   // Calculate the product of elements before the current index
//   let productBefore = 1;
//   for (let i = 0; i < length; i++) {
//     result[i] *= productBefore;
//     productBefore *= nums[i];
//   }
//
//   // Calculate the product of elements after the current index
//   let productAfter = 1;
//   for (let i = length - 1; i >= 0; i--) {
//     result[i] *= productAfter;
//     productAfter *= nums[i];
//   }
//
//   return result;
// };
