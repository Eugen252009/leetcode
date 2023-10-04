export function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    const set = {}
    const set2 = {}
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        const element2 = t[index];
        const size = set[element] ?? 0
        set[element] = size + 1
        const size2 = set2[element2] ?? 0
        set2[element2] = size2 + 1
    }
    console.log(set, set2)
    let result = Object.keys(set).map(item => {
        console.log(set[item], set2[item])
        if (set[item] === set2[item]) return true
        else return false
    })
   return result.find(item => item === false)??true
}
