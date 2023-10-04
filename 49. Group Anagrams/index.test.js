import test from "node:test"
import assert from "node:assert";
import { func } from "./index.js"

test("Tests", () => {
    assert.deepEqual(func(["eat", "tea", "tan", "ate", "nat", "bat"]), [["eat","tea","ate"],["tan","nat"],["bat"]])
    assert.deepEqual(func([""]), [[""]])
    assert.deepEqual(func(["a"]), [["a"]])
    assert.deepEqual(func(["b", ""]), [["b"], [""]])
    assert.deepEqual(func(["", ""]), [["", ""]])
})

