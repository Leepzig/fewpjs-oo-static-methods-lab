class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length)
  }

  static sanitize(string) {
    return string.replace( "@>", "")
  }

  static titleize(string) {
    const unImportant = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "and", "from"]
    const stringArray = string.split(" ")
    stringArray.forEach(element => {
      //const elFound = unImportant.find(el=> element.toLowerCase() === el.toLowerCase())
      if (element !== unImportant[0]) {
        element.toUpperCase()
      }
    })
    Formatter.titleize(stringArray[0])
    return stringArray.join(" ")
  }
}

console.log(Formatter.titleize("the cheese Movie, by a famous author, jim Carrey"))


//string.replace(/[^A-Za-z0-9-']+/g, '');
//["@","#", "$", "%", "^", "&", "*", "~"]