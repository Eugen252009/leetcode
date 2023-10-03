export function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 1) return strs[0]
    let result = ""
    result = prefixoftwostrings(strs[0], strs[1])
    console.log(result)
    if (strs.length === 2) return result
    for (let index = 1; index < strs.length; index++) {
        result = prefixoftwostrings(result, strs[index])
    }

    return result
};



function prefixoftwostrings(string1: string, string2: string): string {
    let result = ""
    for (let index = 0; index < string1.length+1; index++) {
        const element = string1.slice(0, index);
        const element2 = string2.slice(0, index)
        console.log(element,element2)
        if (element === element2) {
            result = element.slice(0, index)
        }
    }
    return result
}
//
console.log(
    longestCommonPrefix(["flower", "flow", "flight"])
)
console.log(
    longestCommonPrefix([
        "dog", "racecar", "car"]
    ))
console.log(longestCommonPrefix(["ab", "a"]))
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]))

