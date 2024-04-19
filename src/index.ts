export function convert(number: number): string {
  const romanNumerals: Array<string> = [""];
  for (var i = number; i > 0; i--) {
    if (i > 5) {
      setRomanNumeralsTo5(romanNumerals);
      i = i - 5;
    }
    if (i === 5) {
      setRomanNumeralsTo5(romanNumerals);
      return romanNumerals.join("");
    }
    if (i === 4) {
      setRomanNumeralsTo4(romanNumerals);
      return romanNumerals.join("");
    } else {
      romanNumerals.push("I");
    }
  }
  return romanNumerals.join("");
}

function clearRomanNumerals(romanNumerals: Array<string>) {
  romanNumerals.splice(0, romanNumerals.length);
}

function setRomanNumeralsTo4(romanNumerals: Array<string>) {
  romanNumerals.push("I");
  romanNumerals.push("V");
}

function setRomanNumeralsTo5(romanNumerals: Array<string>) {
  clearRomanNumerals(romanNumerals);
  romanNumerals.push("V");
}

console.log(convert(3));
