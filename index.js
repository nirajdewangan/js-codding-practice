// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
/* 
//add element in array without push
let myArr = []
myArr[myArr.length] = 1
console.log(myArr) */

//merge two array
/*  let arr = [1,2,4,5]
 let arr2 = [3,6,7,8]
 let arr1 = ['Hello']
 console.log(arr.concat(arr2))
 arr3 = [...arr, ...arr2, ...arr1]
 console.log(arr3)  */

//count str with for of
/*
str = 'geeksforgeek'

const countChar = (str) => {
  const counts = {}
  for(const s of str){
       counts[s] ? counts[s]++ : counts[s] =1 
  }
  return counts;
}

console.log(countChar(str))
 */

//count str with foreach
/* function countStr(str){
  var count = {}
  
  str.split('').forEach( function(s){
    count[s] ? count[s]++ : count[s] =1 
  })
  return count
}
console.log(countStr(str)) */

//Extact digits from str
/* let str = "niraj16081990"

var thenum = str.replace(/^\D+/g, '')
console.log('thenum', thenum)
 */
//Extact digits from str
/* var text = '#dic-name-1234-characterstic:12858yiuy5uy877878'
var numb = text.match(/\d/g)  // retun as array
console.log(numb.join(""))
 */

//forEach
/* let arr = [1, 2, 3, 45, 5];

arr.forEach((v, i) => {
  console.log(v, i);
}); */

//Get Unique in array
/* 
const names = ['John', 'Paul', 'George', 'Ringo', 'John'];

let unique = [...new Set(names)];
console.log(unique); // 'John', 'Paul', 'George', 'Ringo'
*/

//get unique character in string
//With sets and list comprehension:
/*const remDup = (e) => [...new Set(e)].sort().join('');
console.log(remDup('Rasikawef dfv dd'));*/

// With reduce:
/*const remDup = (s) =>
  s
    .split('')
    .sort()
    .reduce((a, b) => (a[a.length - 1] != b ? a + b : a), '');
console.log(remDup('Rasikawef dfv dd'));*/

// With filter:
/* const remDup= s=> s.split("").filter((e,i,f)=>f.indexOf(e)==i).sort().join("")
 console.log(remDup("Rasikawef dfv dd"))*/

// With map:
/*const remDup = (s) =>
  s
    .split('')
    .map((c, i, o) => (o.indexOf(c) == i ? c : ''))
    .sort()
    .join('');
console.log(remDup('Rasikawef dfv dd')); */

/*async function asyncFn() {
  const arr = ['a', 'b', 'c'];
  for (const el of arr) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(el);
  }
}
asyncFn();*/

/*function* generatorFn() {
  const arr = ['d', 'e', 'f'];
  for (const el of arr) {
    yield new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(el);
  }
}
generatorFn();*/
