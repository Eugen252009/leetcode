console.log(isValid("()"), true)
console.log(isValid("()[]{}"), true)
console.log(isValid("(]"), false)
console.log(isValid("()"), true)
console.log(isValid("([)]"), false)





interface items {
	"(": number,
	"[": number,
	"{": number
}
function isValid(s: string): boolean {
	// let acc: items = { "{": 0, "(": 0, "[": 0 }
	// const arr=[...s]
	// for (let index = 0; index < arr.length; index++) {
	// 	const element = [...s][index];
	// 	if ("(" === element) {
	// 		acc["("]++
	// 	}
	// 	if ("[" === element) {
	// 		acc["["]++
	// 	}
	// 	if ("{" === element) {
	// 		acc["{"]++
	// 	}
	// 	if ("}" === element) {
	// 		acc["{"]--
	// 		if (acc["{"] < 0) return false
	// 	}
	// 	if (")" === element) {
	// 		acc["("]--
	// 		if (acc["("] < 0) return false
	// 	}
	// 	if ("]" === element) {
	// 		acc["["]--
	// 		if (acc["["] < 0) return false
	// 	}
	// }
	// if (acc["("]===0 && acc["["]===0&& acc["{"]===0)	return true
	// return false

	const arr = [...s]
	let tmp: string[] = []
	for (let index = 0; index < arr.length; index++) {
		const element = [...s][index];
		console.log(element)
		if ("(" === element) {
			tmp.push("(")
		}
		if ("[" === element) {
			tmp.push("[")
		}
		if ("{" === element) {
			tmp.push("{")
		}
		if (")" === element) {
			const pop = tmp.pop()
			if (pop === "(") continue
			return false
		}
		if ("}" === element) {
			const pop = tmp.pop()
			if (pop === "{") continue
			return false
		}
		if ("]" === element) {
			const pop = tmp.pop()
			if (pop === "[") continue
			return false
		}
		console.log(tmp)
	}
	if (tmp.length > 0) return false
	return true
};
