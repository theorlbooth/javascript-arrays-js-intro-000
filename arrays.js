var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, newelement) {
  return [newelement, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, newelement) {
  newarray = [newelement, ...array]
  return newarray
}

function addElementToEndOfArray (array, newelement) {
  return [...array, newelement]
}

function destructivelyAddElementToEndOfArray(array, newelement) {
  newarray = [...array, newelement]
  return newarray  
}