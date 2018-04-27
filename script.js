
var button0=false;
var button1=false;
var button2=false;
var button3=false;
var button4=false;
var button5=false;
var button6=false;
var button7=false;
var button8=false;


var hit=[];
for (var i = 0; i < 9; i++) {
  hit[i]=document.getElementsByClassName('press');
}

//variable used to in mod to decide whos turn it is
var playerTurn=0;
//finds the who turn it is text
//var whosTurn=$("#playerTurn");
var whosTurn=document.getElementById('playerTurn');
//find the reset buton
//var resetButton=$("#reset");
var resetButton=document.getElementById('reset');
//finds all the buttons
var buttons=document.querySelectorAll(".buttonPos");

for (var i = 0; i < 9; i++) {
  var button=buttons[i];
  //buttons[i].value=button.value;
  button.addEventListener('click',function(event){
  //  this.disabled=true;

    //decides who turn it is
    //player x's turn
    if(playerTurn%2==0){
      this.parentElement.innerHTML="X";
      playerTurn++;
      whosTurn.innerHTML="It is X's Turn";
      this.value="x";
//console.log(this.value);
console.log(buttons[0].value);
  console.log(buttons[1].value);
    console.log(buttons[2].value);
    }
    //player y's turn
    else {
      this.parentElement.innerHTML="Y";
      playerTurn++;
      whosTurn.innerHTML="It is Y's Turn";
        this.value="y";



    }

  });
}

//resets the game
resetButton.addEventListener('click',function(event){
  console.log("reset");
});

if(buttons[0].value=="x"){
  console.log("player x wins");
}
/*if()

if(1,2,3)
if(4,5,6)
if(7,8,9)

if(1,4,7)
if(2,5,8)
if(3,6,9)

if(1,5,8)
if(3,5,7)


1,2,3
4,5,6
7,8,9*/
