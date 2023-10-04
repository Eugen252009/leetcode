import test from "node:test"
import assert from "node:assert";
import { func } from "./index.js"

test("Tests", () => {
    assert.deepEqual(func([1, 1, 1, 2, 2, 3], 2), [1, 2])
    assert.deepEqual(func([1], 1), [1])
    assert.deepEqual(func([-1, -1], 1), [-1])
    assert.deepEqual(func([1, 2], 2), [1, 2])
    assert.deepEqual(func([4, 1, -1, 2, -1, 2, 3], 2), [2, -1])
})

