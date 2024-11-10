const {
    capitalizeFirstLetter,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} = require('./index');

test('capitalizeFirstLetter should capitalize the first letter of a string', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('world')).toBe('World');
});

test('reverseString should reverse the string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
});

test('calculator should perform arithmetic operations correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.multiply(4, 2)).toBe(8);
    expect(calculator.divide(10, 2)).toBe(5);
});


test('caesarCipher should shift characters in a string by the specified amount', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('Hello, World!', 5)).toBe('Mjqqt, Btwqi!');
});


test('analyzeArray should return the average, min, max, and length of an array', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({ average: 3, min: 1, max: 5, length: 5 });
    expect(analyzeArray([10, 20, 30])).toEqual({ average: 20, min: 10, max: 30, length: 3 });
    expect(analyzeArray([])).toEqual({ average: NaN, min: undefined, max: undefined, length: 0 });
});