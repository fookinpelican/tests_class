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

    test('(2, 6) && (6, 10) => false', () => {
        expect(i2.overlaps(i4)).toBe(false);
    });

    test('(2, 6) && not interval => Error', () => {
        expect(() => i2.overlaps("string")).toThrow();
        expect(() => i2.overlaps(0)).toThrow();
        expect(() => i2.overlaps({})).toThrow();
    });
});

describe('includes', () => {
    const i1 = new Interval(0, 4);
    const i2 = new Interval(2, 4);
    const i3 = new Interval(2, 16);

    test('(0, 4) && (2, 4) => true', () => {
        expect(i1.includes(i2)).toBe(true);
    });

    test('(0, 4) && (2, 16) => false', () => {
        expect(i1.includes(i3)).toBe(false);
    });

    test('(2, 4) && not interval => Error', () => {
        expect(() => i2.includes("string")).toThrow();
        expect(() => i2.includes(0)).toThrow();
        expect(() => i2.includes({})).toThrow();
    });
});

describe('union', () => {
    const i1 = new Interval(0, 4);
    const i2 = new Interval(2, 4);
    const i3 = new Interval(4, 8);
    const i4 = new Interval(6, 10);

    test('(0, 4) && (2, 4) => [(2, 4)]', () => {
        expect(i1.union(i2)).toEqual([new Interval(0, 4)]);
    });

    test('(0, 4) && (4, 8) => [(0, 8)]', () => {
        expect(i1.union(i3)).toEqual([new Interval(0, 8)]);
    });

    test('(0, 4) && (6, 10) => [(0, 4), (6, 10)]', () => {
        expect(i1.union(i4)).toEqual([new Interval(0, 4), new Interval(6, 10)]);
    });

    test('(2, 4) && not interval => Error', () => {
        expect(() => i2.union("string")).toThrow();
        expect(() => i2.union(0)).toThrow();
        expect(() => i2.union({})).toThrow();
    });
});
