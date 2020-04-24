//이전까지의 변수 선언

var a = 'aa'

console.log(a);

 

 

 

//<<ECMA>>

let a = 'aa';

const b = "bb"; //상수 선언

console.log(a,b);

 

//var str = 'aa \

//assds';			

// 기존 : 에러 발생

const s='aaaaa

cccc

dddd'

console.log(s); 

//에러 발생 안함

 

 

//<<기본 매개변수>>

function sum(x,y=1){

	return x+y;

}

console.log(sum(1));

 

 

//<<화살표 함수>>

//기존

const arr = [1,2,3];

 

const newArr=arr.map(function(item){

	return item + i;

});

	console.log(newArr);

//ECMA

	const newArr=arr.map(item->item+1);

	console.log(newArr);

 

 

	document

		.getElementById('box')

		.addEventListener('click',event->console.log(1));

 

 

//<<전개구문>>

function sum(x, y, z) {

  return x + y + z;

}

const numbers = [1, 2, 3];

console.log(sum(...numbers));

console.log(sum(1,2,3));

//

const words = ['a', 'b'];

const newWords = [...words];

console.log(newWords);

 

const arr1 = [3, 4, 5];

const arr2 = [1, 2, ...arr1, 6, 7];

console.log(arr2); // [1, 2, 3, 4, 5, 6, 7]

//

const obj = {

  a: 1,

  b: 2,

};

const newObj = { ...obj };

console.log(newOjb);

 

 

//<<Rest 파라미터>

function func(...param) {

  console.log(param);

}

 

func(1, 2, 3);

 

// es5

function func() {

  console.log(arguments);

}

 

foo(1, 2, 3);

 

 

//<<구조 분해 할당>>

//웹페이지 console창에서

const words = ['a', 'b']; //undefined

const [c1, c2] = words; //undefined

c1; //"a"

c2; //"b"

 

 

//<<향상된 객체 리터럴>>

const number = 1234;

 

const student = {

  // number: number

  number,

};