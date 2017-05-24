describe('other test', () => {

//Common Matchers #

    it('two plus two is four', () => {
        expect(2 + 2).toBe(4);
    });

    it('object assignment', () => {
        const data = {one: 1};
        data['two'] = 2;
        expect(data).toEqual({one: 1, two: 2});
    });

//Truthiness (Veracidad)

    it('null', () => {
        const n = null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    });

    it('zero', () => {
        const z = 0;
        expect(z).not.toBeNull();
        expect(z).toBeDefined();
        expect(z).not.toBeUndefined();
        expect(z).not.toBeTruthy();
        expect(z).toBeFalsy();
    });


//Numbers
    test('two plus two', () => {
        const value = 2 + 2;
        expect(value).toBeGreaterThan(3); // >
        expect(value).toBeGreaterThanOrEqual(3.5); //>=
        expect(value).toBeLessThan(5); //<
        expect(value).toBeLessThanOrEqual(4.5); //<=

        // toBe and toEqual are equivalent for numbers
        expect(value).toBe(4);
        expect(value).toEqual(4);
    });

//strings
    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });

    test('but there is a "stop" in Christoph', () => {
        expect('Christoph').toMatch(/stop/);
    });

//Arrays

    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'beer',
    ];

    test('the shopping list has beer on it', () => {
        expect(shoppingList).toContain('beer');
    });

//tambien se pueden testear promesas y callbacks

    /*
     test('the data is peanut butter', () => {
     return fetchData().then(data => {
     expect(data).toBe('peanut butter');
     });
     }); */

});