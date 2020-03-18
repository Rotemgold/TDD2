const BooksApi = require('./BooksApi');

describe('Books API', () => {
    it('should send a get req to the get author api', async () => {
        const requester = {
            get: jest.fn()
        };
        const booksApi = new BooksApi(requester);
        booksApi.getByAuthor('tolkien');
        expect(requester.get).toHaveBeenCalledWith('http://openlibrary.org/search.json?author=tolkien');
    });

    it('should send a get req to the get author api', async () => {
        const requester = {
            get: jest.fn()
        };
        const booksApi = new BooksApi(requester);
        booksApi.getByBookName('lord of the rings');
        expect(requester.get).toHaveBeenCalledWith('http://openlibrary.org/search.json?title=lord of the rings');
    });
});      