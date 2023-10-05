export function func(...a) {
    const data = topKFrequent(...a)
    console.log({ finalresult: data })
    return data
}

function topKFrequent(nums, k) {
    const data = {}
    nums.forEach(element => {
        if (data[element] == null)
            data[element] = 0
        data[element] += 1
    });
    const length = Object.keys(data)
    length.sort((a, b) => {
        return data[b] < data[a]?-1:1
    })
    const final = length.slice(0, k)
    return final
};
