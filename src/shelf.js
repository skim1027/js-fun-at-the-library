function shelfBook(book, shelf){
  if ((shelf.length < 3)) {
    shelf.unshift(book)
    return shelf
  }
}

function unshelfBook(title, shelf){
  for (var i =0; i < shelf.length; i++){
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
      return shelf
    }
  }
}

function listTitles(shelf){
  values = []
  for (var i =0; i < shelf.length; i++){
    values.push(shelf[i].title)
  }
  return values.join(", ")
}

function searchShelf(shelf, title){
  for (var i =0; i < shelf.length; i++){
    if (shelf[i].title.includes(title)) {
      return true
    }
  }
  return false
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};