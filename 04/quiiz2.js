var $board = document.getElementById("board");
var str = '';
var boardCount = 16
var isWhite=false;
var className = 'black';


for(var i=0; i<boardCount; i++){

    className=(isWhite) ? 'black' : 'white';

    str += '<span class="'+className+'"></span>'

    isWhite=!isWhite;
}

$board.innerHTML=str;