import LinkedList from "../linkedList";
// import LinkedListNode from "../node";

describe("Test append value", () => {
  let linkedList: LinkedList<number | string | boolean> | null;
  beforeEach(() => {
    linkedList = new LinkedList();
  });
  afterEach(() => {
    linkedList = null;
  });
  it("First element append should be equal to head and tail", () => {
    linkedList!.append(20);
    expect(linkedList!.head?.value).toBe(20);
    expect(linkedList!.tail?.value).toBe(20);
  });
  it("Test for tail to be last value after multiple appends", () => {
    linkedList!.append(43);
    linkedList!.append("Hello");
    linkedList!.append(true);
    expect(linkedList!.tail?.value).toBe(true);
  });
});

describe("Test size getter", () => {
  let linkedList: LinkedList<number | string | boolean> | null;
  beforeEach(() => {
    linkedList = new LinkedList();
  });
  afterEach(() => {
    linkedList = null;
  });
  it("Should return zero for empty list", () => {
    expect(linkedList!.size).toBe(0);
  });
  it("Should return 3 after 3 appends", () => {
    linkedList!.append(43);
    linkedList!.append("Hello");
    linkedList!.append(true);
    expect(linkedList!.size).toBe(3);
  });
});

describe("Test prepend method", () => {
  let linkedList: LinkedList<number | string | boolean> | null;
  beforeEach(() => {
    linkedList = new LinkedList();
  });
  it("Should set head and tail value for empty list", () => {
    linkedList!.prepend(true);
    expect(linkedList!.head!.value).toBe(true);
    expect(linkedList!.tail!.value).toBe(true);
  });
  it("Should set first value when append method is called before", () => {
    linkedList!.append(20);
    linkedList!.append("more");
    linkedList!.prepend(false);
    expect(linkedList!.head!.value).toBe(false);
  });
  it("Should set first value when prepend method is called multiple times", () => {
    linkedList!.prepend(20);
    linkedList!.prepend("more");
    linkedList!.prepend(false);
    expect(linkedList!.head!.value).toBe(false);
  });
  it("Should set correct size when prepend is called multiple times", () => {
    linkedList!.prepend(20);
    linkedList!.prepend("more");
    linkedList!.prepend(false);
    expect(linkedList!.size).toBe(3);
  });
});

describe("Test delete method", () => {
  let linkedList: LinkedList<number | string | boolean> | null;
  beforeEach(() => {
    linkedList = new LinkedList();
  });
  it("Should be delete both head and tail if it matches", () => {
    linkedList?.append(20);
    expect(linkedList?.head?.value).toBeNull();
    expect(linkedList?.tail?.value).toBeNull();
  });
  it("Should delete all values if multiple exists", () => {
    linkedList?.append(20);
    linkedList?.append(true);
    linkedList?.append(20);
    linkedList?.delete(20);
    expect(linkedList?.head?.value).toBe(true);
    expect(linkedList?.tail?.value).toBe(true);
  });
});

describe("Test toArray method", () => {
  let linkedList: LinkedList<number | string | boolean> | null;
  beforeEach(() => {
    linkedList = new LinkedList();
  });
  it("Should return empty array for empty linked list", () => {
    expect(linkedList?.toArray()).toEqual([]);
  });
  it("Should preserve order in array", () => {
    linkedList?.append("First");
    linkedList?.append("Second");
    const listArray = linkedList!.toArray();
    expect(listArray[0]).toBe("first");
    expect(listArray[1]).toBe("second");
  });
  it("Should return correct array after many operations", () => {
    linkedList!.append("First");
    linkedList!.append("Second");
    linkedList!.prepend("prepend");
    linkedList!.delete("Second");
    expect(linkedList!.toArray()).toBe(["prepend", "First"]);
  });
});
