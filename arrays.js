var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, newelement) {
  return [newelement, ...array]
}

function destructivelyAddElementToEndOfArray (array, newelement) {
  newarray = [newelement, ...array]
  return newarray
}