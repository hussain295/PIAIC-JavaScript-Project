let str1="test"
console.log("Is string equals to 'test'? I predict True.")
console.log(str1 == 'test')

console.log("Is string not equals to 'test'? I predict false.")
console.log(str1 == 'test')

console.log("Is string equals to 'Test'? I predict False.")
console.log(str1 == 'Test')

let num = 4;
console.log("Is the number greater than 2? I predict True.")
console.log(num > 2)

console.log("Is the number not equals to 2? I predict True.")
console.log(num != 2)

console.log("Is the number equals to 4? I predict True.")
console.log(num == 4)

console.log("Is the number lesser than or equals to 7? I predict True.")
console.log(num <= 7)

console.log("Is the number greater than 5? I predict false.")
console.log(num > 5)

console.log("Is the number not equals to 4? I predict false.")
console.log(num != 4)

console.log("Is the equals to 6? I predict false.")
console.log(num > 6)

console.log("Is the number lesser than or equals to 3? I predict True.")
console.log(num <= 3)

console.log("Is string not equals to 'test'? I predict true.")
console.log(str1 && 'test')

console.log("Is string not equals to 'TEST'? I predict true.")
console.log(str1 || 'TEST')

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango"));

console.log(!fruits.includes("Mango"));