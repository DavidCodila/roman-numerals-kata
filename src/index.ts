export function convert(number: number): string {
  const romanNumerals: Array<string> = [""];
  for (var i = 0; i < number; i++) {
    if (i === 3) {
      for (var j = 0; j < i; j++) {
        romanNumerals.pop();
      }
      romanNumerals.push("I");
      romanNumerals.push("V");
    } else {
      romanNumerals.push("I");
    }
  }
  return romanNumerals.join("");
}
