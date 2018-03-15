"use strict";
/*
import {ListNode, printListNode, constructListNodes} from "../class0/ListNode";
import * as ListNode from "../class0/ListNode";
*/
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
exports.ListNode = ListNode;
function constructListNodes() {
    const l1 = new ListNode(1);
    const l2 = new ListNode(2);
    const l3 = new ListNode(3);
    const l4 = new ListNode(4);
    l1.next = l2;
    l2.next = l3;
    l3.next = l4;
    return l1;
}
exports.constructListNodes = constructListNodes;
function printListNode(head) {
    while (head != null) {
        console.log(head.value);
        head = head.next;
    }
}
exports.printListNode = printListNode;
// export = ListNode;
//# sourceMappingURL=ListNode.js.map