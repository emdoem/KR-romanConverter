import toArabic from "./toArabic";
import { romanNumbers } from './romanNumbers';

const toArabicTestingArray = [];
for (let i=1; i<4000; i++) {
    let romanI = romanNumbers[i];
    toArabicTestingArray.push([romanI, i]);
};

describe.skip('toArabic()', () => {
    it.each(toArabicTestingArray)('converts %s to %d', (roman, expectedArabic) => {
        expect(toArabic(roman)).toEqual(expectedArabic)
    });
    
});