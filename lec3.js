// lecture 3
// string method 
// * predefine method
// 1 trim 
let name = "bheem"
console.log(name.trim())
//2 to upper case 
let name2 = "hello"
console.log(name2.toUpperCase())
//3 to lower case
let name3 = "hyy"
console.log(name3.toLowerCase())
// 4index off
let abc = "hello word"
console.log(abc.indexOf("o"))
// 5 SLICE
let info = "my name is akash.. "
let newname = info.slice(6, 7)
console.log(newname)
//6 length 
let para = " my buddu  "
console.log(para.length)
//  7replace 
let newpara = para.replace("my", "i")
console.log(newpara)
//8 repeat
let godname = "Ram";
console.log(godname.repeat(11))

// arra (data structure )
//  defination = it is a collection of multiples value of diffrent 

// 1 push = add a value at the last of on array 
let array = [" Nikesh", 1002, "home ,7792666987"]
array.push("baddi")
console.log(array)
// pop -= remove a value at last from an array
array.pop()
array.pop()
console.log(array)
// 3 shift() remove a value at first from an arraay
array.shift()
console.log(array)
// 4unshift() add value at first of an array
array.unshift("Niku")
console.log(array)
// 5 index of 
console.log(array.indexOf("Home"))
// 6  include 
console.log(array.includes("Home "))
// 7 concat = add two array 
let array2 = [5, 7, 8, 9]
let mularray = array.concat(array2);
console.log(mularray)
// 8 reverse 
console.log(array2.reverse())
// 9 slice 
console.log(array2.slice(2, 4))
// 10splice
let array3 = [4, 5, 6, 7, 8]
array3.splice(2, 4, "6", 7, 8)
console.log(array3)
// 11 sorts
let array4 = [5, 7, 8, 9, 6, 4, 2, 3, 1]
console.log(array4.sort())
console.log(array4.sort().reverse())
// nested array 
let nestarray = [
    ["Nikesh", " EDU102", 2323872687434],
    ["Schin", " EDU1002", 323872687434],
    ["Kanish", " EDU108", 56565],
]
console.log(nestarray[0])
console.log(nestarray[1])
console.log(nestarray[2])
let info1 = `Hello top all of you .i am ${nestarray[0][0]} 
I am devloper who wprk for edu  id  no ${nestarray[0][1]} my no is ${nestarray[0][2]}.`
console.log(info1)

