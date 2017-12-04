var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = [
  'snickers' ,
  'hundred grand' ,
  'kitkat' ,
  'skittles'
]

var nordicCapitals = [1]

function addElementToBeginningOfArray() {
  ["Oslo",...nordicCapitals]
return nordicCapitals}

var nordicCapitals = [1]

function destructivelyAddElementToBeginningOfArray(array, element) {
  nordicCapitals.unshift("foo")
}

function addElementToEndOfArray(array, element) {
  [...nordicCapitals, "Oslo"]
}

function destructivelyAddElementToEndOfArray(array, element) {
  nordicCapitals.push("Oslo")
}
