function changeLink() {
      document.getElementById('qqq').innerHTML="Новая ссылка";
}
changeLink()

console.log(document.getElementById('qqq'))

let suk = document.getElementById('qqq').innerHTML = "<p>Hi</p>"
console.log(suk)

console.log(document.body.innerHTML)




/*async function f(){
  let promise = new Promise (function(resolve, reject){
    setTimeout (() => resolve('done'), 500)
  })

  let result = await promise;

  console.log(result)

}

f().then(console.log)
console.log(f())
*/


/*
let promise = new Promise (function(resolve, reject){
  setTimeout (() => resolve('done'), 500)
})

promise.then(
  result => console.log('done'),//второй
  error => console.log('NONE')
)

promise.then(console.log)//третий


let promiseErr = new Promise (function(resolve, reject){
  setTimeout (() => reject(new Error('das ist kaputt')), 1000)
})

promiseErr.catch(console.log)



let promiseResolve = new Promise (function(resolve, reject){
  setTimeout (() => resolve(console.log('promiseResolve done')), 1500)//пятый
}).then(function(result){
  return new Promise ((resolve, reject) => {
    setTimeout (() => reject(console.log('Its new promise inside')), 1000)//седьмой
  })
}).catch(function(reject){
  return console.log('promiseResolve Error')//восьмой
})

promiseResolve.then(console.log('another result'))//почему он первый?


let prom = Promise.all ([
  new Promise (resolve => setTimeout(() => resolve('Первый,'), 1600)),
  new Promise (resolve => setTimeout(() => resolve('первый,'), 1700)),
  new Promise (resolve => setTimeout(() => resolve('я второй,'), 1500))
]).then(console.log)// шестой


let prom2 = Promise.all ([
  new Promise (resolve => setTimeout(() => resolve('Первый,'), 1600)),
  new Promise (reject => setTimeout(() => reject(new Error('not first')), 1700)),
  new Promise (resolve => setTimeout(() => resolve('я второй,'), 1500))
]).then(console.log)// шестой + 1

let prom3 = Promise.allSettled ([
  new Promise (resolve => setTimeout(() => resolve('Первый,'), 1600)),
  new Promise (reject => setTimeout(() => reject(new Error('not first')), 1700)),
  new Promise (resolve => setTimeout(() => resolve('я второй,'), 1500))
]).then(console.log)// шестой + 1 + 1

let prom4 = Promise.race ([
  new Promise (resolve => setTimeout(() => resolve('Первый,'), 1600)),
  new Promise (reject => setTimeout(() => reject(new Error('not first')), 1700)),
  new Promise (resolve => setTimeout(() => resolve('я второй,'), 1500))
]).then(console.log)// шестой - 1
*/



/* дважды обрабатывает...хзз почему
function readEtwas(){
let etwas = {'age': 30};

try{
  let user = JSON.parse(etwas);


} catch (e){
  console.log(e.name)

  if (e.name == SyntaxError){
      console.log('JSON error: ' + e.message)
  } else {
    throw e
  }

}
}

try {
  readEtwas();
} catch (e) {
  console.log(e.name + '  wurde gefunden')
} finally {
  console.log("overOVER")
}


let error = new Error('message');
console.log(error)
console.log(error.message)

console.error('wat');
*/




/*
oshibka

} catch (e){
console.log(e.name)
if (e.name == SyntaxError) {
console.log('JSON error: ' + e.message)
} else{
throw e;
}
}



/*
class New {
  constructor(name){
    this.name = name;
  }

  static staticMethod(){
    alert('static')
  }

  sayHi(){
    console.log(`Hi, ${this.name}`)
    console.log(2+2)
  }

  text(){
    console.log(this.name.split(''))
  }
}


class Me extends New {
  constructor(name){
    super(name)
  }
  text(){
    super.text()
    console.log('ширь')
  }
}

let prim = {
  say(){
    alert ('ura')
  }
}

Object.assign(Me.prototype, prim)

let com = new Me ("Alex")
com.sayHi()
com.text()
com.say()

New.staticMethod()
*/


/*
let obj = {
  1: 'first',
  2: 'se',
  3: 're'
}
let jos = JSON.stringify;

console.log(jos)
*/


/*
let ma = new Map();
ma.set (123, 345)
ma.set ({}, "obj")

console.log(ma)
console.log(ma.get(123))

let obj = Object.fromEntries(ma);
console.log(obj)

let [first, second] = ma;
console.log(first)
console.log(second)
*/


/*
function Um (name, text){
  this.name = name;
  this.age = 25;
  this.say = function () {
    console.log('met')
  };
  this.saysay =  (() => console.log('sayasy'));
  this.text = (() => console.log(text.slice(' ')));
}

let um = new Um ('Rom', "slice");

console.log(um.name)
console.log(um.age)

um.say();
um.saysay()
um.text()
*/


/*
let obj = {};
obj.name = "ALex";
obj[`age-age`]= "25"
obj.arr = [];
obj.arr[1] = 2;
obj.arr[10] = 11;
obj.arr[0] = null;

console.log(obj)
console.log("name" in obj)



for (let key in obj){
  console.log(key);
}

for (let key in obj.arr){
  console.log("wop" + key);
}

for (let val of obj.arr){
  console.log(val);
}


let nObj = {};
Object.assign(nObj, [obj]);

console.log(nObj)
*/

/*

class Clock {
  constructor({ template }){
    this.template = template;
  }

//  let timer;

//  function
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  //this.
  // = function
  //+THIS
  stop () {
    clearInterval(this.timer);
  };

  //this.
  // = function
  //+THIS*3+=>
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  };

}

let clock = new Clock({template: 'h:m:s'});
clock.start();
*/



/*
let arr = [];
arr[0] = 1;
arr[1] = 'string'
arr[2] = ''

console.log (arr)
console.log (arr.length)

arr.push('push');
arr.unshift('unsh')
arr.splice(1, 1, 'splice')

console.log (arr.toString())
console.log (arr.length)
*/


/*
container.onclick = function(event){
  if (event.target.className != 'remove-button') return;

  let pane = event.target.closest('.pane');
  pane.remove();
};
*/

/*
document.getElementById ("elem").onclick = function(){
  document.getElementById ("text").hidden = true;
}
*/


/*
console.log(document.body.innerHTML);

let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = '<strong>Hey you</strong>Johe'
document.body.append(div)

let text = document.createTextNode('from a to ya')
text.className = 'alert';
document.body.prepend(text)

console.log(document.body.innerHTML);
*/




/*
console.log(document.body.innerHTML)

document.body.innerHTML = '<p>test'

console.log(document.body.innerHTML)
*/


/*
console.log(location.href); // показывает текущий URL
if (confirm("Перейти на Wikipedia?")) {
  location.href = "https://wikipedia.org"; // перенаправляет браузер на другой URL
}
*/


/*
console.log(navigator.userAgent);
console.log(navigator.platform);
*/


/*
document.body.style.background = "red";
setTimeout(() => document.body.style.background = 'green', 1000);
setTimeout(() => document.body.style.background = 'silver', 2000);
setTimeout(() => document.body.style.background = 'blue', 3000);
*/



/*
function curry(f){
  return function(a){
    return function(b){
      return f(a,b);
    };
  };
}

function sum(a, b){
  return a + b;
}

let car = curry(sum);
console.log(car(2)(2))
*/



/*
let x = 2*2+4;

alert(eval(x));
*/



/*
let arr = [1,2,3];

arr = new Proxy(arr, {

  get (target, prop, receiver) {
    if (prop < 0) prop = +prop + target.length;
    return Reflect.get(target,prop,receiver);
  }
});

console.log(arr[-2]);
*/



/*
let obj = {
  name: 'Mary',
  age: 25
}

function warp(target){
  return new Proxy (target, {
    get(target, prop, receiver) {
      if (prop in target) return Reflect.get(target, prop, receiver);
      else return ReferenceError(`Does not exist: "${prop}"`);
    }
  } )
}

obj = warp(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.hui);
*/


/*
let obj = {}

Reflect.set(obj, "name", "Vas");
Reflect.set(obj, "fullname", "Vasya");

console.log (obj);

Reflect.deleteProperty(obj, "name");

console.log (obj);
*/

/*let num = [];

num = new Proxy (num, {
  set (target, prop, val) {
    if (typeof val == 'number') {
      target[prop] = val;
      return true
    } else {
      return false;
    }
  }
});

num.push(1);
num.push(2);
console.log('Длина ' + num.length);

num.push('text'); //error
console.log('до сюда не дойдет');
*/


/*
let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adiós'
};

dictionary = new Proxy (dictionary, {
  get (target, phrase){
    if (phrase in target) return target[phrase];
    else return phrase;
  }
})

console.log(dictionary['Hello']);
console.log(dictionary['Welcome']);
console.log(dictionary);
*/


/*
let num = [0,1,2];
num = new Proxy (num, {    //так не рабоатет let proxy = new Proxy...
  get (target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0;
    }
  }
});

console.log(num[1]);
console.log(num[3]);
*/


/*
let prom = new Promise((resolve, reject) =>{
  //setTimeout(() => resolve (5), 1000)
  setTimeout(() => reject ('errorka'), 1000)
}).then(function(result) {

        if (typeof result === 'number') {
        console.log (result * result)
      } else if (typeof result === 'string'){
          if (Number(result)){
            console.log (result * result)
          } else {
            console.log (`Can not convert ${result} to a number`)
          }
          }
    })
    .catch(function(rejectOfka) {
      console.log(rejectOfka);
    })
*/



/*let prom = new Promise((resolve, reject) =>{
  setTimeout(() => resolve ('ddd'), 1000)
}).then(function(result) {

        if (typeof result === 'number') {
        console.log (result * result)
      } else if (typeof result === 'string'){
        console.log ('hui')
      }

     });
*/



/*
let prom = new Promise((resolve, reject) =>{
  s//setTimeout(() => resolve (), 1000)
}).then(() => console.log('etwas'),
  () => console.log('hui')
);
*/




/*function fun1(){
  return new Promise (resolve => setTimeout(() => console.log(Math.random(5, 1) * 5), 3000))
}

function fun2(){
  return new Promise (resolve => setTimeout(() => console.log(Math.random(10, 6) * 10), 5000))
}

fun1();
fun2();
*/



/*не рабоатате
async function fun(){
 let result = await new Promise (resolve => setTimeout(() => console.log(Math.random(5, 1) * 5), 3000));
 console.log(result * result)
}

fun();
*/



/*не работает
async function res(){

  function fun(){
     setTimeout(() => return Promise.resolve(console.log(Math.random(5, 1) * 5), 3000));
  }

  let result = await fun();
  console.log(result * result)
}

res();
*/


/*не работает
 function fun(){
  return new Promise (resolve => setTimeout(() => console.log(Math.random(5, 1) * 5), 3000));

}

async function ret (){
  let a = await fun();
  a *= a;
}

ret();
*/

/*
function fun(){
  return new Promise (resolve => setTimeout(() => console.log(Math.random(5, 1) * 5), 3000))
}

fun();
*/


/*
let prom = Promise.all ([
  new Promise (resolve => setTimeout(() => resolve (Math.random()), (1000 * Math.random()))),
  new Promise (resolve => setTimeout(() => resolve (Math.random()), (1000 * Math.random()))),
  new Promise (resolve => setTimeout(() => resolve (Math.random()), (1000 * Math.random())))
]).then(result => console.log(result[0]+result[1]+result[2]))
*/

/*
let prom = Promise.all ([
  new Promise (resolve => setTimeout(() => resolve (Math.random()), (1000 * Math.random()))),
  new Promise (resolve => setTimeout(() => resolve (Math.random()), (1000 * Math.random()))),
  new Promise (resolve => setTimeout(() => resolve (Math.random()), (1000 * Math.random())))
]).then(console.log)
*/





/*
let promise = new Promise((resolve, reject) => {
   resolve (123);

}).then( function(result) {
  console.log(result)
  return result * result;
}).then( function(result) {
  console.log(result)
  return result * result;
}).then( function(result) {
  log

}).catch( alert ('catch'))
*/

/*
let promise = new Promise((resolve, reject) => {
   resolve (123);

}).then( function(result) {
  console.log(result)
  return result * result;
}).then( function(result) {
  console.log(result)
  return result * result;
}).then( function(result) {
  console.log(result)
  return result * result;
})
*/





/*let prom = Promise.resolve();
prom.then(() => console.log ('first'));
console.log ('second')
console.log ('tret')
console.log ('viert')

let prom = Promise.resolve();
*/



/* хзхзчто это и откуда function delay(ms) {
  return prom = new Promise (resolve =>  setTimeout (resolve, ms))
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));
*/

/*class ValidErr extends Error {
  constructor(message){
    super(message); //вызываем родительский конструктор
    this.name = ValidErr;  //Родительский конструктор также устанавливает свойство name для "Error",
                           //поэтому в строке (2) мы сбрасываем его на правильное значение.
  }
}

function test(){
  throw new ValidErr('Oops')
}

try {
  test();
} catch(err){
  console.log(err.message)
  console.log(err.name)
  console.log(err.stack)
}
*/


/*
try {
  console.log('its ok')
  fff

} catch(err){
  console.log(err.name); // ReferenceError
  console.log(err.message); // fff is not defined
  console.log(err.stack); //@file:///home/soso/%D0%A0%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9%20%D1%81%D1%82%D0%BE%D0%BB/JS/JS.js:3:3
}
*/


/*class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) throw new Error("Отрицательное количество воды");
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }

  get power() {
   return this._power;
 }


}

// создаём новую кофеварку
let coffeeMachine = new CoffeeMachine(200);

// устанавливаем количество воды
coffeeMachine.waterAmount = 110; //
*/


/*class Animals {

  static qwer = 'SOMETHIMG'; // доступна только у самого класса

  constructor (options){
    this.param = options.param;
    this.maram = options.maram;
  }

  met1() {console.log ('1 met for A')} // нет запятых между методами
  met2() {console.log ('2 met for A ')} // при вызове в консоли скобки не забыть
}

let cat = new Animals ({
  param: "etwas param",
  maram: 55
})

console.log (Animals.qwer)
*/


/*
let TI = setInterval (alert, 2000);
setInterval (()=> {clearInterval(TI)} , 5000);
*/

/*
function fff(users){
  return  (a, b) => a[users] > b[users] ? 1 : -1;
}

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

console.log (users.sort (fff("age")))
*/


/*
function rec(a, b){
    if (a > b) {
      if (a == b) return a;
      return a + " " + rec(a - 1, b);
    } else {
      if (a == b) return a;
      return a + " " + rec(a + 1, b);
    }
}

console.log(rec(5, 10))
*/


/*
function sumTo(n){
  return (n == 1) ? n : n + sumTo(n - 1);
}

console.log(sumTo(5))//15
*/



/*
let [n1, , n3, ...nN] = ['nnn1', 'nnn2', 'nnn3', 'nnn4', "nnn5", 'nnn6'];

console.log(n1); //nnn1
console.log(n3); //nnn3
console.log(nN); //Array(3) [ "nnn4", "nnn5", "nnn6" ]
*/




/*
let a = 4;
let b = 5;

console.log(`something ${a+b}, and etwas ${a*b}`); //something 9, and etwas 20
*/

/*
let obj = {};

[obj.first, ,obj.sur] = ['blabla', 'abla', 'labla'];

console.log (obj.first); //blabla
console.log (obj); // Object { first: "blabla", sur: "labla" }

for (let [key, val] of Object.entries(obj)){
  console.log(`${key} : ${val}`) //first : blabla, sur : labla
}
*/






/*
let salaries = {
  Pahan: 200,
  Ivan: 300,
  Yuron: 2000
}

function sumSalaries(salaries) {
  let sum = 0;

  for (let etwas of Object.values(salaries)){
    sum += etwas
  }

  return sum;
}

console.log(sumSalaries(salaries));
*/

/*
let salaries = {
  Pahan: 200,
  Ivan: 300,
  Yuron: 2000
}

function sumSalaries(salaries) {
  let sum = 0;
  for (let i = 0; i < Object.values(salaries).length; i ++){
    sum += Object.values(salaries)[i];
  }
  return sum;
}

console.log(sumSalaries(salaries))
*/

/*
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr){
  let map = new Map();

  for(let word of arr){
    let sor = word.toLowerCase().split('').sort().join('');
    map.set(sor, word);
  }

  return Array.from(map.values())
}

console.log( aclean(arr) );
*/


//== (arr[index].toString().toLowerCase().split('')) ? arr[index].splice() : arr[index].slice()

/*
let arr = [1,2,2,3,3,4,5,66,7,7,9];

function unique(arr){
  return Array.from(new Set(arr));
}

console.log(unique(arr));
*/

/*
function isEven(a){
  if (a % 2 == 0) return true;
  else return false;
}

let arr = [1,2,3,4,5,6,7,8,9,0];
let arr2 = [];

for (let i = 0; i <= arr.length; i++){
  if (isEven(arr[i])) arr2.push(arr[i]);

}

console.log (arr2);
*/



/*
function getDigitsSum(a){
  let n = String(a).split('');
  let sum = 0;

  for (let i = 0; i < n.length; i++){
    sum += Number(n[i]);
  }

  return sum;
  }

let arrYears = [];
  for (let i = 1; i <= 2020; i++) {
  if (getDigitsSum(i) === 13) {
  arrYears.push(i);
  }
  }
console.log(arrYears);
*/


/*
function getDigitsSum(a){
  let n = String(a).split('');
  let sum = 0;

  for (let i = 0; i < n.length; i++){
    sum += Number(n[i]);
  }

  return sum;
  }

console.log( getDigitsSum(584) );
*/



/*
let arr =[[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let res = 0;

for (let i = 0; i < arr.length; i++){

  for (let j = 0; j < arr[i].length; j++){

    for (let o = 0; o < arr[i][j].length; o++){
      res += arr[i][j][o];
      }
    }
  }

console.log(res);
*/


/*
let str = "dvub lwkfnihnwenoun";

alert ( str.toUpperCase()[0] + str.slice (1) );
*/



/*
let arr = {
  ru: ['Po', 'Vtor', 'Sr', 'Tchv'],
  en: ['mon', 'tw', 's']
  };


let lang = 'en';
let day = 2;

alert ( arr[lang][day] );
*/




/*
let arr = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
};

alert ( arr['ru'][0] ); //голубой
*/


/*
let num = 1000;
let iter = 0;

while ( num > 50 ) {
  num /= 2;
  iter++;
};

alert ( iter );
*/




/*
let arr = [10, 25, 32, 50, 235, 3250];

for (let i = 0; i < arr.length; i++){
  let fil = arr.filter(x => String(x)[0] == 1 || String(x)[0] == 2 || String(x)[0] == 5);
  alert ( fil );
}
*/







/*
let i = 0;

while (i <= 100){
  document.write(i + '<br>');
  i+=2;
}
*/


/*
for (let i = 11; i <= 33; i++){
  document.write(i + '<br>');
};
*/




/*
var obj = {
	'Минск': 'Беларусь',
	'Москва': 'Россия',
	'Киев': 'Украина'
};

for (let key in obj) {
  alert (key + ' - it ' + obj[key]);
}
*/



/*
let arr = [2,3,4,5];
let sum = 1;

for (let i = 0; i < arr.length; i++){
  sum *= arr[i];
  document.write (sum + '<br>');
};

alert( sum );
*/


/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];
let obj = {};

for (let i = 0; i < arr.length; i++){
  obj[arr[i].name] = arr[i]; //в пустой объект записывается имя-ключи и объекты-значения
  }

console.log(obj);
*/


/*
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин


/*
function unique(arr) {
  return Array.from(new Set(arr)) ;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O
*/




/*
function unique(arrrr) {
  let result = [];

  for (let str of arrrr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

let arr = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert (unique(arr));
*/

/*
function getAverageAge(arr) {
  return arr.reduce((sum, current) => sum + current.age, 0) / arr.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); //28
*/


/*
function sortByAge(users){
  arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);
alert (arr[0].name);
*/



/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

console.log (usersMapped);
alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // Вася Пупкин
*/



/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

let names = arr.map(item => item.name);

alert ( names );
*/


/*
function copySorted(arr) {
  return arr.slice().sort ();//(a, b) => a - b);
}

let arr = [8, 2, 4, 7, 0, 1];
let arr2 = copySorted(arr);

alert (arr2);
*/


/*
function filterRange(arr, a, b) {
  return arr
  .filter (item => a <= item && item <= b)
}

let arr = [0,1,2,3,4,5];
let filtred = filterRange(arr, 2, 4) ;

alert (filtred );
alert ( arr );
*/




/*
function camelize(str) {

  return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

alert (camelize("something-to-say"));
*/





/*
let arr = [1, 2, 3, 5, 8, 6];

let ss = arr.reduce((sum, current) => sum + current);

alert (ss); // сумма массива
*/


/*if (null || false || ask != Number) {
  break;
};



/*
let arr = [0, 1, 2];
let arr2 = [3, 4, 5];

//alert ( arr.concat(arr2) ); //0,1,2,3,4,5
alert ( arr.concat(6, 7, 8) ); //0,1,2,6,7,8
*/


/*
let arr = [0, 1, 2, 3];

arr.splice(1, 0, 3, 4);

alert ( arr ); //0,3,4,1,2,3
*/


/*
let arr = [
  ['0', '1', '2', '3'],
  ['4', '5', '6', '7'],
  ['8', '9', '10', '11']
];

arr[1][1] = 'hui';

alert ( arr );
*/




/*
function extractCurrencyValue(str) {
  alert ( +str.slice(1) );
};

extractCurrencyValue("$120");
*/



/*
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + "...";

  }
};

alert ( truncate("Something", 5) );
*/



/*
function checkSpam(str) {
  let strLow = str.toLowerCase();

  return strLow.includes ('viagra') || strLow.includes ('xxx')
};

alert (checkSpam('viagRA grow'));
*/


/*
let iterable = [10, 20, 30];

for (let value of iterable) {
  value += 4;
  console.log(value);
}
*/



/*
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Вася");
let user2 = new User("John");
let user3 = new User("Bill");


alert (user3.name);
*/



/*
let user = {
  name: "Джон",
  age: 30,*/

  /*toString(){
    return this.age;
  }*/

  /*[Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? this.name : this.age;
  }
  */
