//linked list data structure
class Node {
    constructor(data) {
        this.value = data;
        this.next = null
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++
        return this
    }

    prepend(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++
        return this
    }

    insert(index, value) {

        if (index < 0 || index > this.length) {
            return console.log("Invalid Index Number");
        }

        if (index === 0) {
            this.prepend(value)
            return undefined
        }

        if (index === this.length) {
            this.append(value)
            return undefined
        }
        //add middle node
        const leadingNode = this._traverseToIndex(index - 1)
        let holdingNode = leadingNode.next;
        const newNode = new Node(value)
        leadingNode.next = newNode;
        newNode.next = holdingNode

        this.length++
        return this
    }

    remove(index) {
        if (index === 0) {
            const removedItem = this.head.value
            this.head = this.head.next
            if (this.length === 1) {
                this.tail = null
            }
            this.length--
            return removedItem
        }

        const leadingNode = this._traverseToIndex(index - 1);
        const removeToNode = leadingNode.next
        leadingNode.next = removeToNode.next;

        if (leadingNode.next === null) {
            this.tail = leadingNode
        }


        this.length--
        return this
    }

    _traverseToIndex(index) {
        let count = 0
        let currentNode = this.head;
        while (count !== index - 1) {
            currentNode = currentNode.next;
            count++
        }

        return currentNode
    }



    print() {
        let currentNode = this.head;

        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(this.length, "Size")
    }
}

const list = new LinkedList();
list.append(1);
list.remove(0)



list.print();