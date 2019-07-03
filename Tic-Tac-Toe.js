


let move = 1; 


$('.square').one('click',function (){
  if ((move%2) ==1){
   
   $(this).append('x');
  } else {
   
    $(this).append('o');
  }
  move++;
  checkWinner();
  
}); 


var squares = []; // the array includes all results that players may face it 


function checkWinner(){ // take all squares and compare them "share an example ""
    for (var i=1; i<=9; i++){  //condition
squares[i]= document.getElementById ('A'+ i).innerHTML;  // put in each single array the its html  
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
    alert(' player ' + squares[3] + ' wins ! ');
 
    //diagonal 
if(squares[1]==squares[5] && squares[1]==squares[9]&& squares[1]!="")
    alert(' player ' + squares[1] + ' wins !');
   
if(squares[3]==squares[5] && squares[3]==squares[7]&& squares[3]!=="")
    alert(' player ' + squares[3] + ' wins ! ');
    
    
}
 


    
   
    













