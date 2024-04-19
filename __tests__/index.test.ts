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

test("5 to V test", () => {
  expect(convert(5)).toEqual("V");
});

test("6 to VI test", () => {
  expect(convert(6)).toEqual("VI");
});

test("7 to VII test", () => {
  expect(convert(7)).toEqual("VII");
});

test("8 to VIII test", () => {
  expect(convert(8)).toEqual("VIII");
});

test("9 to IX test", () => {
  expect(convert(9)).toEqual("IX");
});

test("10 to X test", () => {
  expect(convert(10)).toEqual("X");
});
