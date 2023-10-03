console.log(removeTrailingZeros("51230100"))
console.log(removeTrailingZeros("123"))

function removeTrailingZeros(num: string): string {
	let result = num
	for (let index = num.length - 1; index >= 0; index--) {
		const element = num[index];
		if (element === "0") {
			result = result.slice(0, -1)
		} else {
			return result
		}
	}
	return result
};
