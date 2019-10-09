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

describe('overlaps', () => {
    const i1 = new Interval(0, 4);
    const i2 = new Interval(2, 6);
    const i3 = new Interval(-4, 0);
    const i4 = new Interval(6, 10);

    test('(0, 4) && (2, 6) => true', () => {
        expect(i1.overlaps(i2)).toBe(true);
    });

    test('(2, 6) && (0, 4) => true', () => {
        expect(i2.overlaps(i1)).toBe(true);
    });

    test('(-4, 0) && (0, 4) => false', () => {
        expect(i3.overlaps(i1)).toBe(false);
    });

    test('(2, 6) && (6, 10) => true', () => {
        expect(i2.overlaps(i4)).toBe(false);
    });
});
