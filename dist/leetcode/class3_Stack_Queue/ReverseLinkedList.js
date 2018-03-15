"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = require("../class0/ListNode");
class ReverseLinkedList {
    // constructor() {}
    reverse(head) {
        if (head === null || head.next === null) {
            return head;
        }
        const newHead = this.reverse(head.next);
        head.next.next = head;
        head.next = null;
        return newHead;
    }
}
// (function f() {
//     const reverseLinkedList = new ReverseLinkedList();
//     const head = constructListNodes();
//     const res = reverseLinkedList.reverse(head);
//     printListNode(res);
// })();
function main() {
    const reverseLinkedList = new ReverseLinkedList();
    const head = ListNode_1.constructListNodes();
    const res = reverseLinkedList.reverse(head);
    ListNode_1.printListNode(res);
}
main();
//# sourceMappingURL=ReverseLinkedList.js.map