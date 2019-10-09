const Interval = require('./interval');

describe('constructor', () => {
    test('(0, 0) => (0, 0)', () => {
        const i = new Interval(0, 0);
        expect(new Interval(0, 0)).toEqual(i);
    });

    test('(1, 0) => (0, 1)', () => {
        const i = new Interval(1, 0);
        expect(i.start).toBe(0);
        expect(i.end).toBe(1);
    });

    test('() => Error', () => {
        expect(() => new Interval()).toThrow();
    });

    test('(0) => Error', () => {
        expect(() => new Interval(0)).toThrow();
    });

    test('("0", "0") => Error', () => {
        expect(() => new Interval('0', '0')).toThrow();
    });
    
    test('(0, 1, 2) => Error', () => {
        expect(() => new Interval(0, 1, 2)).toThrow();
    });
});

describe('toString', () => {
    test('(0, 0) => "[ 0, 0 ]"', () => {
        expect(new Interval(0, 0).toString()).toEqual('[ 0, 0 ]');
    });
});
