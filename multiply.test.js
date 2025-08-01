import { multiply } from "./multiply";

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
