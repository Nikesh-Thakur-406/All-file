//  Question 1

let fruitname = [
    ["Apple"],
    [" Banana"],
    ["Mango"],

]
console.log(fruitname)
console.log(fruitname[0])
console.log(fruitname[1])
console.log(fruitname[2])
// Question 2
let color = [
    ["Red", "Green", "blue", "yellow"]
]
console.log(color)
console.log(color[0][3])
// Question 3
let array3 = [10, 20, 30, 40,]
array3.splice(2, 4, "100", 40)
console.log(array3)
// Question 4
let student = " There are four student rahul ravi akash niku "
console.log(student.length)
// Question 5
let array = [" Newyork", "LOndon", "paris",]
array.push("Tokyo")
console.log(array)
// Question 6
let array2 = ["Dog", "Cat", "Elephant", "Tiger"]
array2.pop("Tiger")
array.pop()
console.log(array2)
// Question7
let array34 = ["BMW", "Audi", "Mercedes"]
array34.unshift("Tesla")
console.log(array34)
// Question 8
let array12 = ["English", "Spanish", "French", " German"]
array12.shift()
console.log(array12)
// question 9
let value = [" Laptop", "Tablet", "Smartphone", "Smartwatch"]
console.log(value.slice(0, 2))
// Question 10
let arr1 = ["Sun", "Moon"];
let arr2 = ["Earth ", "Mars"];
let Eartharr = arr1.concat(arr2);
console.log(Eartharr)


// loop and for loop 
// question 1


let number = [1, 5, 3, 4, 5, 65, 6, 9, 82, 6, , 5, 69, 6, 5, 6, 6, , 5, 8, 98, 6, 54, 8, 6]
for (val of number) {
    console.log(val)
}

// Question 3
console.log("even number")
let number2 = 1;
while (number2 < 10) {
    console.log(number2)
    number2 += 2;
}

// Question 4
let array56 = [5, 7, 8, 9, 1, 2, 8, 4, 6, 0]

console.log(array56.reverse())
// Question 5  nested  for loop 
let value3 =0
while(value3<=20){
    console.log(value3);
    value3+=10
 }

// // Question 9
let nu =0;
while(nu<=10){
    console.log(nu);
    nu+=2
}
// console.log("odd number")
let numbe =0
while(numbe<=10){
    console.log(numbe);
    numbe+=2
}
// // Question 11
let furit =[
    ["Banana","  rs 20 ","12"],
    ["Apple","rs 150","1000g"],
    ["Orange","Rs 50 ","1000g"],
    ["nuts","Rs 300","500 g"],

]
for(ftd of furit){
    console.log(ftd)
}
// Question 16
let nested  =[
   "red ","green"
]

//  test obeject 
//question1
let card={
    brand:"maruti",
    model:10,
    year:2025,
    color:"black"
}
console.log(card)
// question 1; 2
let ob={
    name:"niku",
    age:19
}
console.log(ob)
// question  1:3 
let insta={
    user:"itz bawaa",
    Content:"cresator",
    like:50,

    tag:"itz bawaa"

}
console.log(insta )
insta.like=21;
console.log(insta)
//question 2
let movie={
    tittle:"avengers",
    director:"niku",
    year2:2006
}
console.log(movie)





// 1.1 object literals
let car={
  brand :" maruti",
  model:10,
  year: 2025,
  colr:"black",
};
console.log(car);

//1.2 

let obj={
  name:"bawaa",
  age:23,
}
console.log(ob);

//1.3 twitter post
let post={
  user :"bawaa",
  content:"blog",
  like:"1M",
  reposte:100,
  Tag:"modi",
};
console.log(post)

//2 get  values from obj
let movie2={
  name :"Snam teri ksm",
  director:"bawaa",
  year:2025,
};
console.log(movie.name);//We can access the values of an object through"Dot natation"
console.log(movie.year);
movie.year = 2023;//update to object key
movie.actor="me";
console.log(movie)
// 3. add/update values.
let emp ={
    name :"bawaa",
    salary:40000,
   
  };
  console.log(emp.name);//We can access the values of an object through"Dot natation"
  emp.salary=50000;
  emp.designation = "Master's in computer aplication";//update to object key
  
  console.log(emp)
  
  //4.Nested object,
  let title={
    Author1:{
        name:"Anuj",
        year2:1998,
  
     },
     Author2:{
        name:"bawaa",
        year3:2000,
  
     },
     Author3:{
        name:"Anu",
        year4:2023,
  
     },
     Author4:{
        name:"Amar",
        year5:2025,
  
     },
     
  };
  
  title.Author1.year2=2009;
  console.log(title.Author1); 
  
  //5.Array of objects
  let   food=[
    { id : 2001,
     product:"Smosa",
  },
  { id : 2001,
     product:"momos",
  },
  { id : 2001,
     product:"cake",
  },
  { id : 2001,
     product:"snacks",
  },
  
  ];
  console.log(food[2].product)
  
  //6.math object
  let ra =Math.random()*50;
  let ra2= Math.round(ra);
  console.log(ra2);


  let i =2.5 ;
  let i2 =Math.floor(i)
console.log(i2)                            