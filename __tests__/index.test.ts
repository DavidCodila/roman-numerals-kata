import { expect, test } from "bun:test";
import { convert } from "../src/index";

test("1 to I test", () => {
  expect(convert(1)).toEqual("I");
});
