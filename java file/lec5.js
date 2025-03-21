//obeject liters
let obj = {
    name: " herry ",
    age: 15,
    profession: " full stack "
}
obj.name = "niku"
obj.age = 18;
console.log(obj.name);  // we can acces the value of an object through "dot notation "
console.log(obj.age);   //update to object key 
obj.city = "chandighar "
console.log(obj)

// nested object
let student = {
    student1: {
        name: "nike",
        age: 18,
        location: "vardhman"
    },
    student2: {

        name: "sunny",
        age: 26,
        location: "pd complex "
    },
    student3: {
        name: "suresh",
        age: 20,
        location: "basnti bahg"
    }
}
student.student1.name = "nikki"
student.student2.name = " sunny sir"
console.log(student)
console.log(student.student1)

// array of object 
let = nestedarry =[
    {
        id : 1001,
        product: "tata company"
    },
    {
        id : 87321,
        product: "avi"
    },
    {
        id : 2223344,
        product: "wal fan"
    },
]
console.log(nestedarry[2].product) //we can access the objec inside array through sqare brackets but the key 
// inside object will be access through dot notation
// math object

let n = -5;
console.log(Math.abs(n))//math.abs()==this method is used to convert a negative number to positive.
let n2 = 9.5;

console.log ()//normal rounding method
console.log(Math.ceil(n2))//upward rounding method
console.log(Math.floor(n2))//downward rounding method

let dec =Math.random()*100;
let num= Math.round(dec);
console.log(num)