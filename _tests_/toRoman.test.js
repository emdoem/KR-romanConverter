import toRoman from "./toRoman";
import { romanNumbers } from './romanNumbers';

const toRomanTestingArray = [];
for (let i=1; i<4000; i++) {
    let romanI = romanNumbers[i];
    toRomanTestingArray.push([i, romanI]);
};
toRomanTestingArray.push([2019, "MMXIX"], [101, "CI"]);

describe.skip('toRoman()', () => {
    it.each(toRomanTestingArray)('converts %d to %s', (arabic, expectedRoman) => {
        expect(toRoman(arabic)).toEqual(expectedRoman)
    });
    it('does not convert 0 to any roman number', () => {
        expect(toRoman(0)).toEqual("none")
    });
});