var chocolateBars = [
  'snickers' ,
  'hundred grand' ,
  'kitkat' ,
  'skittles'
]

var element = "foo"

function addElementToBeginningOfArray(chocolateBars, element) {
  return [element,...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, element) {
  chocolateBars.unshift(element)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, element) {
  return [...chocolateBars, element]
}

function destructivelyAddElementToEndOfArray(chocolateBars, element) {
  chocolateBars.push(element)
  return chocolateBars
}

var array = [1, 2, 3]

function accessElementInArray(array, 3) {
  console.log(array[3])
}
