const romanNumbers = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
const romanTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const romanHundreds = ["", "C", "CC", 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
const romanThousands = ["", "M", "MM", "MMM"];

for (let i=11; i<4000; i++) {
    let romanI = romanThousands[Math.floor(i/1000)] + romanHundreds[Math.floor(i%1000/100)] + romanTens[Math.floor(i%100/10)] + romanNumbers[i%10];
    romanNumbers.push(romanI);
};

export { romanNumbers, romanTens, romanHundreds, romanThousands };