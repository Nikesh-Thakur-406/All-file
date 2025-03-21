
// for loop  imitilization condition iteration 
for(let i=0; i <=5;i++){
    console.log(i)
} 
//  even or odd number 
console.timeLog( "stuation 2 --- odd number ");
for(let i =1; i <10; i +=2){
    console.log(i)
}
console.log("stuation 2 --- odd number ");
for(let i =2; i< 10; i +=2){
    console.log(i)
}
// Table thouhg for loop 
console.log ( "stuation 2 --- Table printing  ")
let a =1;
for(let i =6; i<=60; i+=6){
    console.log(`6*${a++}=${i}`);

}


// advanced
let num = prompt( "Enter you name yu want ")
let n =parseInt(num);  
let b =1;
for( let i=n; i<=n*10; i+=n){
    console.log(`${n}*${b++}=${i}`);
}

// while loop 
let g =0;   //decleare/intiialization 
while(g>20){  //condition 
    console.log(g)
    a++
}
// even or odd condition  
console.log("odd number")
let number =0
while(number<10){
    console.log(number);
    number+=2
}
console.log("even number")
let number2=1;
while(number2<10){
    console.log(number2)
    number2+=2;
}
// for of loop
let name ="harinom"
for(char of name ){
    console.log(char)
}
// sitution 
let array =[1,5,3,4,5,65,6,9,82,6,,5,69,6,5,6,6,,5,8,98,6,54,8,6]
for(val of array){
    console.log(val)
}
// situation 3
let cahrs ="apple"
for(cahrs of "apple"){
    console.log(cahrs)

}
//situation 4
//nested for loop

let student =[
    ["Diksha"," MCA","03928329087"]
    ["Nkisj","bca","039812093"]
    ["Deepaj","MBA","5363345656"]
    ["Deep","csc","576846468"]

]
for(std of student){
    console.log(std)
}