module.exports = class BooksApi {
    constructor(requester) {
        this.requester = requester;
    }
    getByAuthor(author) {
        return this.requester.get(`http://openlibrary.org/search.json?author=${author}`);
    }
    getByBookName(bookName) {
        return this.requester.get(`http://openlibrary.org/search.json?title=${bookName}`);
    }
};