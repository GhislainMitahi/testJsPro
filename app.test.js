const stringlength = require('./app.js');

test('should return characters count', () => {
    expect(stringlength('world')).toBe(5);
})
test('string counte hould be less than 10', () => {
    expect(stringlength("helloMe")).toBeLessThan(10);
});
test('should be error if string is empty', () => {
    expect(() => {
        toBeLessThan('')
     }).toThrow("string couldn't be empty")
})
