export function convert(number: number): string {
  const romanNumerals: Array<string> = [""];
  for (var i = 0; i < number; i++) {
    if (i === 4) {
      setRomanNumeralsTo5(romanNumerals);
      return romanNumerals.join("");
    }
    if (i === 3) {
      setRomanNumeralsTo4(romanNumerals);
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
  clearRomanNumerals(romanNumerals);
  romanNumerals.push("I");
  romanNumerals.push("V");
}

function setRomanNumeralsTo5(romanNumerals: Array<string>) {
  clearRomanNumerals(romanNumerals);
  romanNumerals.push("V");
}
