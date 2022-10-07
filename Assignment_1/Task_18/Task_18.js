function printArray(array){
for(var i=0; i<array.length; i++){
    console.log(array[i])
}
}
var places=["Rome","Hawai","Turkey","New Zealand","Amazon"]
console.log("Original Array:")
printArray(places)

duplicateArray1=[...places]
console.log("Alphabetical Order:")
printArray(duplicateArray1.sort())

console.log("Original Array:")
printArray(places)

console.log("Reverse Alphabetical Order:")
printArray(duplicateArray1.sort().reverse())

console.log("Original Array:")
printArray(places)

console.log("Reverse Array:")
printArray(places.reverse())

console.log("Reverse x2 Array:")
printArray(places.reverse())

console.log("Alphabetical Order:")
printArray(places.sort())

console.log("Reverse Alphabetical Order:")
printArray(places.sort().reverse())