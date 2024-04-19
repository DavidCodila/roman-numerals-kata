export function convert(number: number): string {
  const romanNumerals: Array<string> = [""];
  for (var i = 0; i < number; i++) {
    romanNumerals.push("I");
  }
  return romanNumerals.join("");
}
