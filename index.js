const axios = require('axios');
const BooksApi = require('./BooksApi/BooksApi');

const booksSorter = books => {
  return books
    .map(
      a => a.title_suggest.charAt(0).toUpperCase() + a.title_suggest.slice(1)
    )
    .sort();
};
const subjectGetter = books => {
  let subjectsSet = new Set();
  books.forEach(book => {
    book.subject &&
      book.subject.forEach(element => {
        subjectsSet.add(element.charAt(0).toUpperCase() + element.slice(1));
      });
  });
  return Array.from(subjectsSet).sort();
};

const getSortedBooksByAuthor = async (author, booksApi) => {
  const books = (await booksApi.getByAuthor(author)).data.docs;
  return booksSorter(books);
};
const getSortedSubjectsByAuthor = async (author, booksApi) => {
  const books = (await booksApi.getByAuthor(author)).data.docs;
  return subjectGetter(books);
};

const booksApi = new BooksApi(axios);
getSortedBooksByAuthor('tolkien', booksApi).then(console.log);
getSortedSubjectsByAuthor('tolkien', booksApi).then(console.log);

module.exports = {
  booksSorter,
  subjectGetter,
  getSortedBooksByAuthor,
  getSortedSubjectsByAuthor,
};
