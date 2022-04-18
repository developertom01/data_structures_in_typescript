/* It's a class that has a value property and a next property that points to another LinkedListNode */
export default class LinkedListNode<T = any> {
  public next: LinkedListNode<T> | null;
  constructor(public value: T) {
    this.next = null;
  }
}
