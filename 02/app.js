console.log('app');

 //객체 생성, 개발자도구 console 탭에서 실습 가능
var person = {
    nick: 'FE',
    age: 28,
    area: 'jeju',
    hobby: ['js', 'html'],
  };
 

  //배열
  var arr = [1, 2, 3];
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

// 배열 생성(Create) (기사 목록에 기사 하나 끼워넣는것처럼)
var todos = ['운동']; //todos라는 배열 선언
var todo = '게임'; //새로 추가할 배열 요소
todos.push(todo); //추가하기
console.log(todos);

// 배열 읽기(Read)
var todos = ['운동', '게임'];
todos.forEach(function(todo){ //forEach메소드, 메소드에 필요한 인자가 함수
console.log(todo);
});

//배열 갱신(update)
var arr= [1,2];
arr[1]=3;
// arr= 1,3

//1번째 방법
// var todos = ['운동', '게임'];
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
//   return todo === updateTodo;
// });
// console.log(updateIndex);
// todos[updateIndex] = '공부';
// console.log(todos);

//2번째 방법
var todos = ['운동', '게임'];
var updateTodo = '게임';

var newTodos = todos.map(function(todo) { //map(배열메소드) 참고
  if (todo === updateTodo) {
    return '공부';
  }
  return todo;
});

console.log(newTodos);
//updateTodo와 todo가 같으면 '공부'를 뱉는 if문


//배열 삭제(Delete)
var todos = ['운동', '공부', '목욕'];
var deleteTodo = '공부';
var deleteIndex = todos.findIndex(function(todo) {
  return todo === deleteTodo;
});
todos.splice(deleteIndex, 1); //splice 메소드 참고
console.log(todos);



//구문 - if
var isMan = false;
if(isMan){
  console.log('1');
}
else if(!isMan && isHero){

}
else{
  console.log('2');
}



//주요 전역함수 - 자주 사용
alert('안녕하세요'); //안녕하세요 창 뜸

var who = prompt('당신은 누구세요?'); //질문에 대답할 수 있는 칸과 함께 창 뜸

console.log(who); //사용자가 입력한 답 출력

var isDelete = confirm('정말 삭제하시겠습니까?'); //확인/취소 창 뜸
console.log(isDelete);


//함수 호출
function sum(a,b){
  return a+b; //return 안해주면 출력도 못함
}
console.log(sum(1,2));


//멤버 변수
var car = { //car 객체
  year: '2014',
  starting: function() {
    console.log('starting..');
  },
};

car.starting();


//여러가지 함수모양
(function(){ //캡슐화
  var a='a';
  console.log(a);
})(); //함수 바로 실행 -> 즉시실행함수

//생략 가능한 전달 인자
function sum(x, y) {
  if (!y) y = 1;
  console.log(x + y);
}
sum(3);
console.log(sum(3)); //4
console.log(sum(3,3)); //6

