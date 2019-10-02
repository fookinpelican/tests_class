const Util = require('./math');

describe('factorial', () => {
    test('0 => 1', () => {
        expect(Util.factorial(0)).toBe(1);
    });
    test('1 => 1', () => {
        expect(Util.factorial(1)).toBe(1);
    });
    test('2 => 2', () => {
        expect(Util.factorial(2)).toBe(2);
    });

    test('3 => 6', () => {
        expect(Util.factorial(3)).toBe(6);
    });

    test('>= 3000 => Exception', () => {
        expect(()=> {Util.factorial(3000)}).toThrow();
    });

    test('Negative => Exception', () => {
        expect(()=> {Util.factorial(-10)}).toThrow(/negative/);
    });
});

describe('isPrime', function () {
    test('1 => false', () => {
        expect(Util.isPrime(1)).toBe(false)
    });
    test('0 => false', () => {
        expect(Util.isPrime(0)).toBe(false)
    });
    test('< 0 => Exception', () => {
        expect(() => { Util.isPrime(-10) }).toThrow('Unable to compute prime for n < 0');
    });

    test.each([
        [2, true],
        [5, true],
        [17, true],
        [18, false],
        [53, true],
        [55, false],
    ])(
        '%i => %i',
        (n, expected) => {
            expect(Util.isPrime(n)).toBe(expected);
        }
    );
});

describe('sumPrime', function() {
    test('1 => 0', () => {
        expect(Util.sumPrime(1)).toBe(0)
    });
    test('6 => 10', () => {
        expect(Util.sumPrime(6)).toBe(10)
    });
    test('8 => 17', () => {
        expect(Util.sumPrime(8)).toBe(17)
    });
        test('3 => 2', () => {
        expect(Util.sumPrime(3)).toBe(2)
    });
});

describe('fizzBuzz', function () {
    test('15 => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]', () => {
        expect(Util.fizzBuzz(15)).toStrictEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]);
    });
    test('1 => [1]', () => {
        expect(Util.fizzBuzz(1)).toStrictEqual([1]);
    });
    test('0 => []', () => {
        expect(Util.fizzBuzz(0)).toStrictEqual([]);
    });
    test('-1 => []', () => {
        expect(Util.fizzBuzz(-1)).toStrictEqual([]);
    });
});

describe('cipher', function () {
    test('"ABC" => "BCD"', () => {
        expect(Util.cipher("ABC")).toBe("BCD");
    });
    test('"" => ""', () => {
        expect(Util.cipher("")).toBe("");
    });
    test('"." => "/"', () => {
        expect(Util.cipher(".")).toBe("/");
    });
});
