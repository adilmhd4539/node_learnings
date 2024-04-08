const Name ='Max';
let age =29;
const hasHobbies=true;
age =30;
//assaigning function to variable 
const summuriseUser=function(userName,userAge,userHasHobbies){
    return ('Name is '+userName+' ,age is '+userAge+' , and user has hobies: '+userHasHobbies);
};
//fuction with single line return statement
const add = (a,b)=>a+b;
//function with no parameter 
const addRandom= ()=>1+3;
//function with single parameter
const addOne=a=>a+1;
console.log(addRandom());
console.log(add(1,2));
console.log(addOne(10));
console.log(summuriseUser(Name,age,hasHobbies));
//object person
const person={
    name: 'Adil',
personAge:23,
    //methord of an object
    great() {console.log('Hello '+this.name);}
};
//using . operator in object
person.great()
//array in node 
const hobbies=['Sports','Cooking'];
//using of loop 
for (let hobby of hobbies){
    console.log(hobby);
}
//map function in array it will return new array after transforming the values
console.log(hobbies.map(hobby=>'Hobby :'+hobby));
//since objects and arrays are refference types we can edit the array or object without violating the const rule
//example:
//push function in an array used to add an item to existing array
hobbies.push('Programing');
console.log(hobbies);
//in refrence type variables the variable only store the pointer where the array or the object is stored thats why we can edit the const refference type

//copying an array
//we can use slice methord to copy an array entirely or as an subArray 
const copiedArray =hobbies.slice();
console.log(copiedArray);
//insted of slice operator we can use spred operation 
const copiedArrayUsigSpreadOperation=[...hobbies];
console.log(copiedArrayUsigSpreadOperation);
//the spread operator will pullout all the elements in an array or object and put into whatever is round to that spread operator
//so we can use the spread operator in object also
const copiedPerson={...person};
console.log(copiedPerson);
//if we want to mearge an array of arguments in an function then we can use rest operation
const toArray =(...args)=>{
    return args;
}
console.log(toArray(1,2,3,4,5));
//object destructing 
//consider the following example 
const printName=({name})=>{
    console.log(name);
}
// in the above example we used object destructing while we taking the parameter 
// in there we only taken the value what we wanted from that object 
//this is known as object destructing
//we can use that not only in functions
const { name , personAge } =person;
console.log(name, personAge);
//we can also use it on arrays
const [hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2);
//in arrays the destructuring is pulled out positions

// async function in node
//example
setTimeout(()=>{
    console.log('Executed after 1 second');

},1000);
console.log('executed before set timeout');