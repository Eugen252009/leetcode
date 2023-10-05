import test from "node:test"
import assert from "node:assert"
import { func } from "./index.js"
import fs from "node:fs"



export const data = JSON.parse(fs.readFileSync("data.txt"))
export const result = JSON.parse(fs.readFileSync("result.txt"))
test("Tests", () => {
	assert.deepEqual(func([1, 2, 3, 4]), [24, 12, 8, 6])
	assert.deepEqual(func([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0])
	// assert.deepEqual(func(data),result)
})
