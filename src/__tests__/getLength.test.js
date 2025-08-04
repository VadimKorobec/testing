import { getLength } from "../getLength";

describe("getLength", () => {
  test("should return 0 for an empty array", () => {
    const res = getLength([]);

    expect(res).toBe(0);
  });

  test("should return 3 from array with 3 elements", () => {
    const res = getLength([1, 2, 3]);

    expect(res).toBe(3);
  });

  test("should return 5 from array with 5 elements", () => {
    const res = getLength([1, 2, 3, 4, 5]);

    expect(res).toBe(5);
  });
});
