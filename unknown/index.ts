function longestCommonPrefix(strs: string[]): string {
    let result = ""
    for (let i = 0; i < strs.length; i++) {
        const element = strs[i]
        if (strs[i] === element) {
            result = strs[i]
            break;
        }
    }
    return result
};


console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
