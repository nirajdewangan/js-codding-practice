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

let arr = [1, 2, 3, 45, 5];

arr.forEach((v, i) => {
  console.log(v, i);
});
