import sum from './sum';

//CommonJS
//const sum = require('./sum');
//alert(1,3);
console.log(sum(1,2));


//빌드 - 모듈을 갖고 와서 쓸 때 합쳐서 서빙을 해줘야하는데 효율적으로 도와주는 것



document.getElementById('debug').innerHTML = sum(101, 2);