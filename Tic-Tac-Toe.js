// $(document).ready( function() {
//     $("button").click( function(){
//     $("p").hide(1000,function(){$("span").show()});
//     });
//     });


// const div = document.querySelector('div');
// heading.style.color = 'pink';
// heading.style.background = 'blue';
// heading.style.fontSize = '100px';

//this for the font 
// $(document).ready( function() {
// $("button").click( function(){
// $ ("div.wrapper").css({"color":"#00F"});
// })
// });

// var playBoard;
// const playerOne= "X"; 
// const playerTwo= "O";
// const winCombos = [
// [0,1,2],
// [3,4,5],
// [6,7,8],
// [0,4,8],
// [2,4,6],
// [1,4,7],
// [0,4,8],
// [6,4,2]

// const square = document.querySelectorAll('.square');



  

let move = 1; 


$('.square').one('click',function (){
  if ((move%2) ==1){
   
    // $(".square").off("click");
      $(this).append('x');
    //   $(body).innerHTML('<button onclick="location.reload();"id="reload">Play Again</button>');
  } else {
    //console.log("o working !!"); 
    //$(".square").off("click");
    $(this).append('o');
    // $(body).innerHTML('<button onclick="location.reload();"id="reload">Play Again</button>');
  }
  move++;
  checkWinner();
  
}); 

var turn= true;
var squares = [];


// function reset(X,Y,Z){
//     document.getElementById('A'+X).style.color= "#000";
//     document.getElementById('A'+Y).style.color= "#000";
//     document.getElementById('A'+Z).style.color= "#000";
    
//     if (checkWinner()= true) {
//     setTimeout(function(){location.reload()},2000); }
        
//     }



function checkWinner(){
    for (var i=1; i<=9; i++){
squares[i]= document.getElementById ('A'+ i).innerHTML; 
}
// columns 
if(squares[1]==squares[2] && squares[1]==squares[3]&& squares[1]!=""){
  
  alert(' player ' + squares[1] + ' wins !');
}
   
if(squares[4]==squares[5] && squares[4]==squares[6]&& squares[4]!=="")
    alert (' player ' + squares[4] + ' wins !');
    
if(squares[7]==squares[8] && squares[7]==squares[9]&& squares[7]!=="")
    alert(' player ' + squares[7] + ' wins !');
   

    //rows 
if(squares[1]==squares[4] && squares[1]==squares[7]&& squares[1]!="")
    alert (' player ' + squares[1] + ' wins ! ');
   
if(squares[2]==squares[5] && squares[2]==squares[8]&& squares[2]!=="")
    alert(' player ' + squares[2] + ' wins ! ');
    
if(squares[3]==squares[6] && squares[3]==squares[9]&& squares[3]!=="")
    console.log (' player ' + squares[3] + ' wins ! ');
 
    //diagonal 
if(squares[1]==squares[5] && squares[1]==squares[9]&& squares[1]!="")
    alert(' player ' + squares[1] + ' wins !');
   
if(squares[3]==squares[5] && squares[3]==squares[7]&& squares[3]!=="")
    alert(' player ' + squares[3] + ' wins ! ');
    
    
}
 


    
   
    

// function insert(id) {
// var s = document.getElementById(id);
// if(turn && s.innerHTML==""){
//     s.innerHTML="x";
//     turn = !turn;

// }else (!turn && s.innerHTML=="")
// s.innerHTML="o";
//     turn = !turn;
// document.getElementById(id).innerHTML="0";
// turn = !turn;
// }












//  let square1 =$("#1").text;
//  let square2= $("#2").text; 
//  let square3= $("#3").text;
//  let square4= $("#4").text;
//  let square5= $("#5").text;
//  let square6= $("#6").text;
//  let square7= $("#7").text;
//  let square8= $("#8").text;
//  let square9= $("#9").text;
//  console.log(square1); 




 //}

//alert("cong");

//}




// var hasWinner = 0, moveCount=0; //finding winners ,the total number of moves

// function boardMsg(x){
//     return $("#board").text(x);
// 