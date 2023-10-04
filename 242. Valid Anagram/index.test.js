import test from "node:test"
import assert from "node:assert";
import { isAnagram } from "./index.js"

test("Tests", () => {
    assert.equal(isAnagram("anagram", "nagaram"), true)
    assert.strictEqual(isAnagram("rat", "car"), false)
})

