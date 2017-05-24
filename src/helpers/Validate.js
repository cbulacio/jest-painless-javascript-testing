export default class Validate {
    static isAlphaNumeric(str) {
        return /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(str);
    }

    static isValidLength(str,maxLength) {
        return (str.length >= maxLength);
    }

    static isFirstCharUppercase (str){
        return str[0] === str[0].toUpperCase();
    }
}

