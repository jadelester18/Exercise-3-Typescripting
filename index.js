"use strict";
function transformString(str) {
    const chars = [...str];
    const transformed = chars.map((char) => {
        if (/[a-zA-Z]/.test(char)) {
            let code = char.charCodeAt(0);
            if (char === "z" || char === "Z") {
                return "a";
            }
            else {
                return String.fromCharCode(code + 1);
            }
        }
        else {
            return char;
        }
    });
    return transformed.join("").replace(/[a-zA-Z]/g, (char) => {
        return /[aeiouAEIOU]/.test(char) ? char.toUpperCase() : char.toLowerCase();
    });
}
console.log(transformString("Cat30"));
