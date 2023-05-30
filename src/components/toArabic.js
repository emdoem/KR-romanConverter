import { romanNumbers } from './romanNumbers';

function toArabic(roman) {
    let arabic = "none";
    
    for (let i = 1; i < romanNumbers.length; i++) {
        if (roman === romanNumbers[i]) {
            arabic = i;
        };
    };

    return arabic;
}

export default toArabic;