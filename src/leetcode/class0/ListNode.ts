/*
import {ListNode, printListNode, constructListNodes} from "../class0/ListNode";
import * as ListNode from "../class0/ListNode";
*/


class ListNode {
    public value: number;
    public next: ListNode;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function constructListNodes() : ListNode {
    const l1 = new ListNode(1);
    const l2 = new ListNode(2);
    const l3 = new ListNode(3);
    const l4 = new ListNode(4);
    l1.next = l2; l2.next = l3; l3.next = l4;
    return l1;
}

function printListNode(head : ListNode) {
    while (head != null) {
        console.log(head.value);
        head = head.next;
    }
}


export {ListNode, constructListNodes, printListNode};


// export = ListNode;

