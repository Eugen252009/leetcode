import test from "node:test"
import assert from "node:assert";
import { containsDuplicate } from "./index.js"


test("Tests", () => {
    assert.equal(containsDuplicate([1, 2, 3, 1]), true)
    assert.strictEqual(containsDuplicate([1, 2, 3, 4]), false)
    assert.strictEqual(containsDuplicate([1, 2, 3, 1]), true)
})

