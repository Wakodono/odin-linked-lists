import { linkedList } from "./linked-lists.js";

test("linkedList is defined", () => {
  expect(linkedList).toBeDefined();
});

test("append on empty list", () => {
  const list = linkedList();
  list.append("dog");
  expect(list.toString()).toBe("( dog ) -> null");
});

test("append adds to the end", () => {
  const list = linkedList();
  list.append("dog");
  list.append("cat");
  expect(list.toString()).toBe("( dog ) -> ( cat ) -> null");
});

test("head returns the value of the first node", () => {
  const list = linkedList();
  list.append("dog");
  list.append("dog2");
  list.append("dog3");
  list.append("dog4");
  expect(list.head()).toBe("dog")
})

test("tail returns the value of the last node", () => {
  const list = linkedList();
  list.append("dog");
  list.append("dog2");
  list.append("dog3");
  list.append("dog4");
  expect(list.tail()).toBe("dog4")
})

test("size returns the total number of nodes in the list", () => {
  const list = linkedList();
  list.append("dog");
  list.append("dog2");
  list.append("dog3");
  list.append("dog4");
  expect(list.size()).toBe(4);
})

describe("at", () => {
  test("first index", () => {
    const list = linkedList();
    list.append("cat");
    list.append("dog");

    expect(list.at(0)).toBe("cat")
  })

  test("middle index", () => {
    const list = linkedList();

    list.append("cat");
    list.append("dog");
    list.append("rabbit");

    expect(list.at(1)).toBe("dog");
  })

  test("last valid index", () => {
    const list = linkedList();

    list.append("anakin");
    list.append("yoda");
    list.append("windu");

    expect(list.at(2)).toBe("windu");
  })

  test("index too large", () => {
    const list = linkedList();

    list.append("anakin");
    list.append("yoda");
    list.append("windu");

    expect(list.at(3)).toBeUndefined();
  })

  test("an empty list returns undefined", () => {
    const list = linkedList();

    expect(list.at(0)).toBeUndefined();
  })
})

test("pop returns value of head node", () => {
  const list = linkedList();

  list.append("Aaron Rodgers");
  list.append("Patrick Mahomes");
  list.append("Chulo");
  list.append("Beau");
  list.append("Davante Adams");

  expect(list.pop()).toBe("Aaron Rodgers");
})


describe("findIndex", () => {
  test("returns the index of the node containing chulo", () => {
    const list = linkedList();

    list.append("Aaron Rodgers");
    list.append("Patrick Mahomes");
    list.append("Chulo");
    list.append("Beau");
    list.append("Davante Adams");

    expect(list.findIndex("Chulo")).toBe(2)
  })

  test("returns -1 if value can't be found", () => {
    const list = linkedList();

    list.append("Aaron Rodgers");
    list.append("Patrick Mahomes");
    list.append("Chulo");
    list.append("Beau");
    list.append("Davante Adams");

    expect(list.findIndex("Wako")).toBe(-1)
  })

  test("expect an empty list to return -1", () => {
    const list = linkedList()

    expect(list.findIndex("Wako")).toBe(-1)
  })

  test("return index of first node if multiple nodes contain matching values", () => {
    const list = linkedList();

    list.append("Aaron Rodgers");
    list.append("Patrick Mahomes");
    list.append("Chulo");
    list.append("Chulo");
    list.append("Beau");
    list.append("Davante Adams");

    expect(list.findIndex("Chulo")).toBe(2);
  })
})

// contains(value) returns true if the passed in value is in the list and otherwise returns false.
describe("contains", () => {
  test("contains method exists", () => {
    const list = linkedList()

    expect(list.contains).toBeDefined();
  })

  test("an empty call to contains should return false", () => {
    const list = linkedList()

    expect(list.contains()).toBe(false);
  })

  test("value not in list", () => {
    const list = linkedList();

    list.append("My hero Academia")
    list.append("Haikyuu")
    list.append("DanDaDan")
    list.append("One Piece")
    list.append("Shippuden")
    list.append("Bleach")

    expect(list.contains("Shaman King")).toBe(false);
  })

  test("value in list", () => {
    const list = linkedList();

    list.append("My hero Academia")
    list.append("Haikyuu")
    list.append("DanDaDan")
    list.append("One Piece")
    list.append("Shippuden")
    list.append("Bleach")

    expect(list.contains("Bleach")).toBe(true);
  })
})

/* 
insertAt(index, ...values) should insert new nodes with the given values at the given index
*/
describe("insertAt", () => {
  test("inserts a single value at index 0", () => {
    const list = linkedList();
    list.append("dog");
    list.insertAt(0, "cat");

    expect(list.toString()).toBe("( cat ) -> ( dog ) -> null");
  });

  test("inserts a value in the middle", () => {
    const list = linkedList();
    list.append("cat");
    list.append("rabbit");
    list.insertAt(1, "dog");

    expect(list.toString()).toBe("( cat ) -> ( dog ) -> ( rabbit ) -> null");
  });

  test("inserts multiple values", () => {
    const list = linkedList();
    list.append("cat");
    list.append("rabbit");
    list.insertAt(1, "dog", "fox", "panda");

    expect(list.toString()).toBe("( cat ) -> ( dog ) -> ( fox ) -> ( panda ) -> ( rabbit ) -> null");
  });

  test("indexes < 0 trigger RangeError", () => {
    const list = linkedList();
    list.append("cat");
    list.append("rabbit");

    expect(() => list.insertAt(-1, "wolf")).toThrow(RangeError);
  })

  test("indexes > size of array trigger RangeError", () => {
    const list = linkedList();
    list.append("cat");
    list.append("rabbit");

    expect(() => list.insertAt(99, "wolf")).toThrow(RangeError);
  })
});

describe("removeAt", () => {
  test("removes a single value at index 0", () => {
    const list = linkedList();
    list.append("Naruto");
    list.append("Bleach");
    list.append("One Piece");
    list.removeAt(0)

    expect(list.toString()).toBe("( Bleach ) -> ( One Piece ) -> null");
  })

  test("removes a value in the middle", () => {
    const list = linkedList();
    list.append("Naruto");
    list.append("Bleach");
    list.append("Onepunch man");
    list.removeAt(1);

    expect(list.toString()).toBe("( Naruto ) -> ( Onepunch man ) -> null");
  });
})