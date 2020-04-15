//<window 가장 최상위 객체>
console.log(window.outerWidth); //현재 윈도우 해상도 사이즈

console.log(window.name);


//html에 접근을 하고, 어떻게 자바스크립트로 조작을 하는지에 대해
//<<DOM 탐색 2가지(id/class)>>
var debug = document.getElementById('debug'); //html에 div id 주고, style 줌
console.log(debug); //변수를 이용해서 값을 집어넣거나 위치를 변경
//1.id는 전체에서 하나의 엘리먼트에만 유일한 id를 줄 수 있다(<style>에서 #debug로 따로 스타일링 주거나, <div id>에서 따로 스타일 줘도 됨)

//2.class는 여러개 있어도 된다(html에서 div class가 두개! => <style>에서.box)
var box = document.querySelector('#debug');
console.log(box);

// //<<DOM 생성>> 자바스크립트로 생성해서 집어넣기
var div = document.createElement('div');
//console.log(div);
div.style.border = "1px solid #000";
div.innerHTML="HELLO~"
document.body.appendChild(div);


//<<DOM 삽입>>
const span = document.createElement('span'); //span을 만들고
const textNode = document.createTextNode('hello!'); 
span.appendChild(textNode); //span에다가 textNode를 만들고
document.querySelector('#debug').appendChild(span); //그것을 debug에..! 빨강 상자에 hello가 뜬다


//<<DOM 제거>>
var debug = document.getElementById('debug');
debug.remove();
//list 제거
const list = document.getElementById('list'); 
list.removeChild(list.children[0]);



//<<이벤트>>
document.body.addEventListener('click', function(){
    console.log("click");
});

document.querySelector('.box').addEventListener('click', function(){
    console.log('click');
}); //box만 눌렀을 때

//fuction(함수)으로 따로 주기
function clickBody(){
    console.log('click');

}
document.querySelector('.box').addEventListener('click',clickBody);


//callback함수
var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);



//list 선언
var list = document.querySelector('#list');
console.log(list.children);


//이벤트 위임 패턴1
// for(var i=0; i<list.children.length; i++){
//     console.log(list.children[i]);
// list.children[i].addEventListener('click', function(){
//     console.log(1);
// })
// }


//이벤트 위임패턴2
var app = document.getElementById("list");

app.addEventListener('click', function(event) {
    if(event.target.nodeName == 'LI'){
        console.log('li');
        //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
        event.stopPropagation(); // 이벤트 전파 중지
    }
 
});
document.body.addEventListener('click',function(){
    console.log('body');
});
//=> li,body 순으로 이벤트 뜸

var link=document.querySelector('#link');
// link.addEventListener('click', function(){}); //클릭하면 페이지로 이동

link.addEventListener('click', function(){ //클릭에 funtion 주기
    console.log(11111);
    event.preventDefault(); // 기본 행동 중지
});
