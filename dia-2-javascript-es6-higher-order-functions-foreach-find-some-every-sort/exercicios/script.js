const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947() {
  const bookFind = books.find((book) => book.author.birthYear === 1947).name;
  return bookFind;
}

//2 - Retorne o nome do livro de menor nome.
function smallerName() {
  let nameBook = books[0].name;

  books.forEach((book) => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });

  return nameBook;
}

//3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook() {
  // escreva seu código aqui
  return books.find((book) => book.name.length === 26);
}

//4 - Ordene os livros por data de lançamento em ordem decrescente.
function booksOrderedByReleaseYearDesc() {
  return books.sort((book1, book2) => book2.releaseYear - book1.releaseYear);
}

//🚀 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
let expectedResult = false;

function everyoneWasBornOnSecXX() {
  expectedResult = books.every((book) => book.author.birthYear > 1901);
  return expectedResult;
}

let expectedResult2 = true;

function someBookWasReleaseOnThe80s() {
  expectedResult2 = books.some(
    (book) => book.releaseYear >= 1980 && book.releaseYear <= 1989
  );

  return expectedResult2;
}

//7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

const expectedResult3 = false;

function authorUnique() {
  return books.every(
    (book) =>
      !books.some(
        (bookSome) =>
          bookSome.author.birthYear === book.author.birthYear &&
          bookSome.author.name !== book.author.name
      )
  );
}

console.log(authorUnique());
