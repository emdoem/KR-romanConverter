import { romanNumbers, romanTens, romanHundreds, romanThousands } from './romanNumbers';

function toRoman(arabic) {
    let roman = "none";
    
    roman = romanThousands[Math.floor(arabic/1000)] + romanHundreds[Math.floor(arabic%1000/100)] + romanTens[Math.floor(arabic%100/10)] + romanNumbers[arabic%10];
    if (arabic == 0) roman = "none";
    /*
    if (arabic == 1) {
        roman = "I"
    };
    if (arabic == 2) {
        roman = "II"
    };
    if (arabic == 3) {
        roman = "III"
    };
    if (arabic == 4) {
        roman = "IV"
    };
    if (arabic == 5) {
        roman = "V"
    };
    if (arabic == 6) {
        roman = "VI"
    };
    if (arabic == 7) {
        roman = "VII"
    };
    if (arabic == 8) {
        roman = "VIII"
    };
    if (arabic == 9) {
        roman = "IX"
    };
    if (arabic == 10) {
        roman = "X"
    };
    */
    return roman;
}

export default toRoman;