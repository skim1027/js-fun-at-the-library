function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns){
  var char = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return char
}

function saveReview(singleReview, list){
  if (list.includes(singleReview)) {
    var review = { 
      length: list.length,
    } 
    return review
  } else {
    list.push(singleReview)
    var review = { 
      length: list.length,
    } 
    return review
  }
}


function calculatePageCount(book){
  var pages = book.length * 20
  return pages
}

function writeBook(title, char, genre){
  var book = {
    title: title,
    mainCharacter: char,
    pageCount: calculatePageCount(title),
    genre: genre
  }
  return book
}

function editBook(book){
  book.pageCount = book.pageCount * (3/4)
  return book
}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}