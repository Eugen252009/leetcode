export function func(...a) {
    const data = groupAnagrams(...a)
    console.log({ result: data })
    return data
}

function sortString(str){
    return str.split('').sort().join('')
}


function groupAnagrams(strs) {
    const map = new Map()

    for(let str of strs){
        const sortedStr = sortString(str)

        const foundKey = map.get(sortedStr)
        
        if(foundKey){
            foundKey.push(str)
            map.set(sortedStr, foundKey)
            continue
        }

        map.set(sortedStr, [str])
    }

    return Array.from(map.values())
};
