import { romanNumbers, romanTens, romanHundreds, romanThousands } from './romanNumbers';

function toRoman(arabic) {
    let roman = "none";
    
    roman = romanThousands[Math.floor(arabic/1000)] + romanHundreds[Math.floor(arabic%1000/100)] + romanTens[Math.floor(arabic%100/10)] + romanNumbers[arabic%10];
    if (arabic == 0) roman = "none";
    
    return roman;
}

export default toRoman;