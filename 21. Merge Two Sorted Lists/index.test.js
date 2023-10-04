import test from "node:test"
import assert from "node:assert"
import { mergeTwoLists } from "./index.js"
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
class ListNode {
    ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


test("case 1", () => {
    assert.equal(mergeTwoLists([1, 2, 4], [1, 3, 4]), new ListNode([1,1,2,3,4,4]))
})



// [1,3,4]
// []
// []
// []
// [0]
