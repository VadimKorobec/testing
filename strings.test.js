import { len, toLower, toUpper } from "./strings";

describe.skip("strings", () => {
  describe("toUpper", () => {
    test("converts string to uppercase", () => {
      const expected = "HELLO";

      const result = toUpper("hello");

      expect(result).toBe(expected);
    });
  });

  describe("toLower", () => {
    test("converts string to lowercase", () => {
      const expected = "hello";

      const result = toLower("HELLO");

      expect(result).toBe(expected);
    });
  });

  describe("len", () => {
    test("should return length of a string", () => {
      const expected = 5;

      const result = len("hello");

      expect(result).toBe(expected);
    });
  });
});
