const { toSnakeCase } = require("../index");

test("converts string to snake_case", () => {
  expect(toSnakeCase("Hello World")).toBe("hello_world");
});

const { toKebabCase } = require("../index");

test("converts string to kebab-case", () => {
  expect(toKebabCase("Hello World")).toBe("hello-world");
});