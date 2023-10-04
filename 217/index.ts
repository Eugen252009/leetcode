export function containsDuplicate(nums: number[]): boolean {
	const set = new Set()
	nums.forEach((item)=>{
	set.add(item)
	})
	return set.size!==nums.length
};
