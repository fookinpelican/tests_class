const BookRepository = require('./book.repository');

describe('save', function () {

    test('1 => 1', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });
});

describe('getTotalCount', () => {
    test('10 => 10', () => {
        const dbMock = {
            get: jest.fn().mockReturnThis(),
            size: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue(10),
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalCount()).toBe(10);
    });
});

describe('getTotalPrice', () => {
    test('[1, 2, 3] => 6', () => {
        const dbMock = {
            get: jest.fn().mockReturnThis(),
            map: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue([1, 2, 3]),
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalPrice()).toBe(6);
    });

    test('[] => 0', () => {
        const dbMock = {
            get: jest.fn().mockReturnThis(),
            map: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue([]),
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalPrice()).toBe(0);
    });
});

describe('getBookByName', () => {
    test('"Harry Potter" =>', () => {
        const dbMock = {
            get: jest.fn().mockReturnThis(),
            find: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue({
                added_at: '2000-01-01',
                id: 32789,
                name: 'Harry Potter',
                price: 29.99,
            }),
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getBookByName('Harry Potter').name).toBe('Harry Potter');
    });
});
