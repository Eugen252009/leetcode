export function longestCommonPrefix(strs: string[]): string {
    let result = ""
    for (let i = 0; i < strs.length; i++) {
        const element = strs[i]
    for (let j = 0; j < strs.length; j++) {
        const element2 = strs[j]
           prefixoftwostrings(element,element2) 
        
        }
    }
    return result
};


console.log(
    longestCommonPrefix(["flower", "flow", "flight"])
)
console.log(
    longestCommonPrefix([
        "dog", "racecar", "car"]
    ))


function prefixoftwostrings(string1: string, string2: string): string {
    let result = ""
    for (let index = 0; index < string1.length; index++) {
        const element = string1[index];
        const element2 = string2[index]
        if (element === element2){
        result=element.slice(0,index)
        }
    }
    return result 
}
