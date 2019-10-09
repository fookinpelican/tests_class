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
