import { divide, multiply, sum } from "./math";

describe("math", () => {
  describe("divide", () => {
    test("should divide positive number", () => {
      const result = divide(3, 2);

      expect(result).toBe(1);
    });

    test("should divide negative number", () => {
      const result = divide(-3, -2);

      expect(result).toBe(-1);
    });

    test("should divide positive and negative number", () => {
      const result = divide(-3, 2);

      expect(result).toBe(-5);
    });
  });

  describe("multiply", () => {
    test("should multiply positive number", () => {
      const result = multiply(3, 2);

      expect(result).toBe(6);
    });

    test("should multiply negative number", () => {
      const result = multiply(-3, -2);

      expect(result).toBe(6);
    });

    test("should multiply positive and nrgative number", () => {
      const result = multiply(-3, 2);

      expect(result).toBe(-6);
    });
  });
    
  describe("sum", () => {
    test("should sum positive number", () => {
      const result = sum(3, 2);

      expect(result).toBe(5);
    });
      
      test("should sum negative number", () => {
        const result = sum(-3, -2);

        expect(result).toBe(-5);
      });

      test("should sum positive and negative number", () => {
        const result = sum(-3, 2);

        expect(result).toBe(-1);
      });
  });
});
