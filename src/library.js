
function createLibrary(name){
  var lib = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return lib
}

function addBook(lib, book) {
  if (book.genre === 'fantasy') {
    lib.shelves.fantasy.push(book)
  } else if (book.genre === 'fiction') {
    lib.shelves.fiction.push(book)
  } else {
    lib.shelves.nonFiction.push(book) 
  }
  return lib
}

function checkoutBook(lib, title, genre){
  if (lib.shelves.hasOwnProperty(genre)){
    for (var i =0; i < lib.shelves[genre].length; i++){
      if (lib.shelves[genre][i].title === title) {
        lib.shelves[genre].splice(i, 1);
        return `You have now checked out ${title} from the ${lib.name}.`
      } 
    }
    return `Sorry, there are currently no copies of ${title} available at the ${lib.name}.` 
  }
}

function takeStock(lib, genre){
  if (lib.shelves.hasOwnProperty(genre)){
    if (lib.shelves[genre].length > 0) {  
      return `There are a total of ${lib.shelves[genre].length} ${genre} books at the ${lib.name}.` 
    } 
  }
  var num = lib.shelves.fantasy.length + lib.shelves.fiction.length + lib.shelves.nonFiction.length
  return `There are a total of ${num} books at the Denver Public Library.`
}

var dracula = {
  title: "Dracula",
  mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
  pageCount: 418,
  genre: "fantasy"
};

var bornACrime = {
  title: "Born a Crime",
  mainCharacter: { name: "Trevor Noah", age: 36, pronouns: "he/him" },
  pageCount: 304,
  genre: "nonFiction"
};

var prideAndPrejudice = {
  title: "Pride and Prejudice",
  mainCharacter: { name: "Eliabeth Bennet", age: 20, pronouns: "she/her" },
  pageCount: 432,
  genre: "fiction"
};

var denverLibrary = createLibrary("Denver Public Library");
addBook(denverLibrary, dracula);
addBook(denverLibrary, bornACrime);
addBook(denverLibrary, prideAndPrejudice);

console.log(denverLibrary.shelves.fiction.length + denverLibrary.shelves.nonFiction.length +denverLibrary.shelves.fantasy.length)

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};