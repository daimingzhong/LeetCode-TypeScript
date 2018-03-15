import {ListNode, constructListNodes, printListNode} from "../class0/ListNode";


class ReverseLinkedList {
    // constructor() {}

    public reverse(head: ListNode) : ListNode {
        if(head === null || head.next === null) {
            return head;
        }
        const newHead : ListNode = this.reverse(head.next);
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
    const head = constructListNodes();
    const res = reverseLinkedList.reverse(head);
    printListNode(res);
}

main();

