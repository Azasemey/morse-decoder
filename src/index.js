const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const str = expr.split("**********");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let letters = str[i].match(/.{1,10}/g);
    letters.forEach(
      (letter) =>
        (result +=
          MORSE_TABLE[
            `${letter
              .replace(/00/g, "")
              .replace(/10/g, ".")
              .replace(/11/g, "-")}`
          ])
    );
    result += " ";
  }
  return result.trim();
}

module.exports = {
  decode,
};
