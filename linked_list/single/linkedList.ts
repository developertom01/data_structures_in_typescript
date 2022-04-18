import LinkedListNode from "./node";
export default class LinkedList<T = any> {
  public head: LinkedListNode<T> | null;
  public tail: LinkedListNode<T> | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * We start at the head, and we keep going until we reach the end of the list
   * @returns The size of the linked list.
   */
  public get size() {
    let size = 0;
    let current = this.head;
    while (current) {
      size++;
      current = current.next;
    }
    return size;
  }

  /**
   * If there is a tail, set the next property of the tail to the new node, then set the tail to the new
   * node. If there is no head, set the head to the new node
   * @param {T} value - The value to append to the list.
   */
  public append(value: T) {
    const node = new LinkedListNode(value);
    let tail = this.tail;
    if (tail) {
      tail.next = node;
    }
    if (!this.head) {
      this.head = node;
    }
    this.tail = node;
  }

  /**
   * If the list has a head, set the new node's next to the current head, and if the list doesn't have a
   * tail, set the tail to the new node, and then set the head to the new node
   * @param {T} value - T - the value to be added to the list
   */
  public prepend(value: T) {
    const node = new LinkedListNode(value);
    if (this.head) {
      node.next = this.head;
    }
    if (!this.tail) {
      this.tail = node;
    }
    this.head = node;
  }

  /**
   * If the value is the head, set the head to the next node. If the value is the tail, set the tail to
   * the current node. If the value is in the middle, set the next node to the next node of the next node
   * @param {T} value - T - the value to be deleted
   */
  public delete(value: T) {
    if (this.head?.value === value) {
      this.head = this.head.next;
    }
    let current = this.head;
    while (current) {
      if (current.next?.value === value) {
        current.next = current.next.next;
      }
      current = current.next;
    }
    if (value === this.tail?.value) {
      this.tail === current;
    }
  }
  /**
   * We create an empty array, then we loop through the linked list and push each value into the array,
   * and then we return the array.
   * @returns An array of the values in the linked list.
   */
  public toArray() {
    let list: T[] = [];
    let current = this.head;
    while (current) {
      list.push(current.value);
      current = current.next;
    }
    return list;
  }
}
