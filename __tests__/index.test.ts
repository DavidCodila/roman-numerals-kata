import { expect, test } from "bun:test";
import { convert } from "../src/index";

test("1 to I test", () => {
  expect(convert(1)).toEqual("I");
});

test("2 to II test", () => {
  expect(convert(2)).toEqual("II");
});

test("3 to III test", () => {
  expect(convert(3)).toEqual("III");
});

test("4 to IV test", () => {
  expect(convert(4)).toEqual("IV");
});
