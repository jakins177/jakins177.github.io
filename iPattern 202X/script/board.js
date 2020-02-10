console.log("hello world!");

const SQAURE_AMOUNT = 6;

const COMPUTER_SQUARE_PRESSED_TIME = 2000;

let gameOn = false;

let theHuman = new Human();

let timePressed;
class Playbutton {
  constructor(buttonID, color, clickColor) {
    this.buttonID = buttonID;
    this.color = color;
    this.clickColor = clickColor;
  }

  setCurrentColor(color)
  {
    //color = this.clickColor;
    $(this.buttonID).css("background-color", color);
    console.log("buttonID is: " + this.buttonID + "color is: " + color );

  }

startPress(){

    this.setCurrentColor(this.clickColor);

  //  // $(this.buttonID).css("color", "red");

  //    timePressed =  setTimeout(this.setCurrentColor(this.color), COMPUTER_SQUARE_PRESSED_TIME);

  }

  finishPress() {
    this.setCurrentColor(this.color);

  }




}

class Computer {
    constructor(){
  
      this.patternSequence = [];
    
    }
    addSequence() {
        let randomIndex = Math.floor(Math.random() * SQAURE_AMOUNT);
        this.patternSequence.push(randomIndex); 
    }


}

class Human {
  constructor(){

    this.patternSequence = [];
  
  }
  addSequence(squareNumberIndex) {
      
      this.patternSequence.push(squareNumberIndex); 
  }


}

function compareHumanAndComputer()
{
  //TO DO
}

//6 event handlers to detect if game button is pressed 
 
let boardButton1 = new Playbutton("#square1", "red", "#ff6666");
let boardButton2 = new Playbutton("#square2", "yellow", "#ffffb3");
let boardButton3 = new Playbutton("#square3", "green", "#66ff66");
let boardButton4 = new Playbutton("#square4", "blue", "#6666ff");
let boardButton5 = new Playbutton("#square5", "orange", "#ffc966");
let boardButton6 = new Playbutton("#square6", "purple", "#ff66ff");

 
  $( boardButton1.buttonID ).click(function() {
  ///alert( "square1" );
  if(gameOn)
  {
    theHuman.addSequence(0);
  }


  });

  $( boardButton2.buttonID ).click(function() {
    //alert( "square2" );
  });

  $( boardButton3.buttonID ).click(function() {
    //alert( "square3" );
  });

  $( boardButton4.buttonID ).click(function() {
    //alert( "square4" );
  });

  $( boardButton5.buttonID ).click(function() {
    //alert( "square5" );
  });

  $( boardButton6.buttonID ).click(function() {
    //alert( "square6" );
  });

  $( "#start_game_button" ).click(function() {
    //alert( "start game clicked" );
    $("#start_game_button").css("display", "none");
      startGame();
      
  });


 function startGame()
  {
    gameOn = true;
    let theComputer = new Computer();
    

    theComputer.addSequence();
  

   let setSecondsInterval = 2000;
   
    // for(item of theComputer.patternSequence)
    // {

    //     console.log(item);


    // }

    //let myArray = [1,2,3,4,5,6,7];


    let toggle = true;
(function theLoop (i) {


  let sequenceNumber = theComputer.patternSequence[i];

  let flashBoardButton;

  switch (sequenceNumber) {
    case 0:
      flashBoardButton = boardButton1; 
      break;
    case 1:
      flashBoardButton = boardButton2; 
      break;
    case 2:
      flashBoardButton = boardButton3; 
      break;
    case 3:
      flashBoardButton = boardButton4; 
      break;
    case 4:
      flashBoardButton = boardButton5; 
      break;
    case 5:
      flashBoardButton = boardButton6; 
      break;
     
    default:
      break;
  }


  // if(toggle){
  // boardButton1.startPress();
  // }
  // else
  // {
  // boardButton2.startPress();
  // }

  setTimeout(function(){ flashBoardButton.startPress(); }, 500);


  setTimeout(function () {
    console.log(sequenceNumber);
   // $("#square3").click();

   flashBoardButton.finishPress();


    if (++i < theComputer.patternSequence.length) {          
      theLoop(i);       
    }
  }, setSecondsInterval);
})(0);


  }


  
 // startGame();



