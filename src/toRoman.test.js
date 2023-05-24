import toRoman from "./toRoman";

const romanNumbers = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
const romanTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
const romanHundreds = ["", "C", "CC", 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
const romanThousands = ["", "M", "MM", "MMM"];
const toRomanTestingArray = [];
for (let i=1; i<4000; i++) {
    let romanI = romanThousands[Math.floor(i/1000)] + romanHundreds[Math.floor(i%1000/100)] + romanTens[Math.floor(i%100/10)] + romanNumbers[i%10];
    toRomanTestingArray.push([i, romanI]);
};
toRomanTestingArray.push([2019, "MMXIX"], [101, "CI"]);

describe('toRoman()', () => {
    it.each(toRomanTestingArray)('converts %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });
    it('does not convert 0 to any roman number', () => {
        expect(toRoman(0)).toEqual("none")
    });
});