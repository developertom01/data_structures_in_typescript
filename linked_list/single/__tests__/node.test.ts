import LinkedListNode from "../node";

it("Test for next returns correct value", () => {
  const node = new LinkedListNode(20);
  expect(node.value).toBe(20);
  expect(node.next).toBeNull();
});

it("Test for next value", () => {
  const node = new LinkedListNode(20);
  node.next = new LinkedListNode(40);
  expect(node.next.value).toBe(40);
});
