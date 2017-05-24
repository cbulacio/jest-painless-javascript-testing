import Validate from './Validate';

describe('isValidLength method', () => {
    it('length >= 8', () => {
        expect(Validate.isValidLength('aaaaaaaa',8)).toBeTruthy();
    });

    it('length < 8', () => {
        expect(Validate.isValidLength('aaaaa',8)).toBeFalsy();
    });

    it('length >= 1', () => {
        expect(Validate.isValidLength('a',1)).toBeTruthy();
    });

    it('length > 1', () => {
        expect(Validate.isValidLength('',1)).toBeFalsy();
    });
});

describe('isAlphaNumeric method', () => {
    it('alphanumeric string', () => {
        expect(Validate.isAlphaNumeric('qwerty11')).toBeTruthy();
    });

    it('alphabetic string', () => {
        expect(Validate.isAlphaNumeric('qwerty')).toBeFalsy();
    });

    it('numeric string', () => {
        expect(Validate.isAlphaNumeric('34234')).toBeFalsy();
    });

});

describe('isFirstCharUppercase method', () => {
    it('First char uppercase string', () => {
        expect(Validate.isFirstCharUppercase('Qwerty')).toBeTruthy();
    });

    it('First char not uppercase string', () => {
        expect(Validate.isFirstCharUppercase('qwerty')).toBeFalsy();
    });
});