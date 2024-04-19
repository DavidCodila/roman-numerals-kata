export function convert(number: number): string {
  const romanNumerals: Array<string> = [""];
  for (var i = number; i > 0; i--) {
    if (i === 9) {
      setRomanNumeralsTo9(romanNumerals);
      i = 0;
    } else if (i > 5) {
      setRomanNumeralsTo5(romanNumerals);
      i = i - 4;
    } else if (i === 5) {
      setRomanNumeralsTo5(romanNumerals);
      i = 0;
    } else if (i === 4) {
      setRomanNumeralsTo4(romanNumerals);
      i = 0;
    } else {
      romanNumerals.push("I");
    }
  }
  return romanNumerals.join("");
}

function setRomanNumeralsTo4(romanNumerals: Array<string>) {
  romanNumerals.push("I");
  romanNumerals.push("V");
}

function setRomanNumeralsTo5(romanNumerals: Array<string>) {
  romanNumerals.push("V");
}

function setRomanNumeralsTo9(romanNumerals: Array<string>) {
  romanNumerals.push("I");
  romanNumerals.push("X");
}

convert(9);
