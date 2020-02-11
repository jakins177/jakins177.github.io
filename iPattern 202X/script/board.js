class Computer {
  constructor() {

    this.patternSequence = [];

  }
  addSequence() {
    let randomIndex = Math.floor(Math.random() * SQAURE_AMOUNT);
    this.patternSequence.push(randomIndex);
  }


}

class Human {
  constructor() {

    this.patternSequence = [];

  }
  addSequence(squareNumberIndex) {

    this.patternSequence.push(squareNumberIndex);
  }


}

let score = 0;
let theComputer = new Computer();

const SQAURE_AMOUNT = 6;

const COMPUTER_SQUARE_PRESSED_TIME = 2000;

let gameOn = false;

let computerTurn = true;

let theHuman = new Human();

let timePressed;
class Playbutton {
  constructor(buttonID, color, clickColor, audioSrc) {
    this.buttonID = buttonID;
    this.color = color;
    this.clickColor = clickColor;
    this.audioSrc = audioSrc;
  }

  setCurrentColor(color) {

    $(this.buttonID).css("background-color", color);


  }

  startPress() {

    this.setCurrentColor(this.clickColor);
    document.getElementById('button_audio').src = this.audioSrc;
    document.getElementById('button_audio').play();


  }

  finishPress() {
    this.setCurrentColor(this.color);

  }

}


function compareHumanAndComputer() {
  for (let i = 0; i < theHuman.patternSequence.length; i++) {
    console.log("i is " + i);
    console.log("human sequence is: " + theHuman.patternSequence);
    console.log("computer sequence is: " + theComputer.patternSequence);

    if (theHuman.patternSequence[i] != theComputer.patternSequence[i]) {

      console.log("Player got it wrong!!!");

      document.getElementById("demo").innerHTML = "Wrong !!!!!!";
      setTimeout(function () {
        $('#demo').html('');
      }, 3000);

      resetGame();
      return;
    }

    if (theHuman.patternSequence.length == theComputer.patternSequence.length && (i == theComputer.patternSequence.length - 1)) {
      console.log("player completed move on to the next round!!!");
      score = score + 5;

      document.getElementById("game_stats").innerHTML = "<h2>High Score: " + score + "<h2>";


      document.getElementById("demo").innerHTML = "Correct !!!!!!";
      setTimeout(function () {
        $('#demo').html('');
      }, 3000);

      theHuman.patternSequence.splice(0, theHuman.patternSequence.length);


      runComputerSequence();


    }


  }
}

function resetGame() {
  gameOn = false;
  theHuman.patternSequence.splice(0, theHuman.patternSequence.length);
  theComputer.patternSequence.splice(0, theComputer.patternSequence.length);

  console.log("the human pattern sequnce is: " + theHuman.patternSequence);
  console.log("the computer pattern sequnce is: " + theComputer.patternSequence);
  score = 0;


  //$("#start_button_div").css("text-align", "center");

  let startButton = document.getElementById("start_game_button");
  let startButtonDiv = document.getElementById("start_button_div");


  startButton.style.position = "static";
  startButton.style.top = "0px";;

}

function checkValidUserInput(sequenceNum) {
  if (gameOn && computerTurn != true) {
    theHuman.addSequence(sequenceNum);

    compareHumanAndComputer();
  }

}

//6 event handlers to detect if game button is pressed 

let boardButton1 = new Playbutton("#square1", "red", "#ff6666", "../audio/redsound.mp3");
let boardButton2 = new Playbutton("#square2", "yellow", "#ffffb3", "../audio/yellowsound.mp3");
let boardButton3 = new Playbutton("#square3", "green", "#66ff66", "../audio/greensound.mp3");
let boardButton4 = new Playbutton("#square4", "blue", "#6666ff", "../audio/bluesound.mp3");
let boardButton5 = new Playbutton("#square5", "orange", "#ffc966", "../audio/orangesound.mp3");
let boardButton6 = new Playbutton("#square6", "purple", "#ff66ff", "../audio/purplesound.mp3");


$(boardButton1.buttonID).click(function () {
  ///alert( "square1" );

  checkValidUserInput(0);

});

$(boardButton2.buttonID).click(function () {

  checkValidUserInput(1);
  //alert( "square2" );
});

$(boardButton3.buttonID).click(function () {
  checkValidUserInput(2);
  //alert( "square3" );
});

$(boardButton4.buttonID).click(function () {
  checkValidUserInput(3);
  //alert( "square4" );
});

$(boardButton5.buttonID).click(function () {
  checkValidUserInput(4);
  //alert( "square5" );
});

$(boardButton6.buttonID).click(function () {
  checkValidUserInput(5);
  //alert( "square6" );
});

$("#start_game_button").click(function () {


  let startButton = document.getElementById("start_game_button");

  startButton.style.position = "absolute";
  startButton.style.top = "-9999px";
  //startButton.style.display = "block";
  startGame();

});

$(boardButton1.buttonID).mousedown(function () {
  // console.log("the mouse is down");
  document.getElementById('button_audio').src = "../audio/redsound.mp3";
  document.getElementById('button_audio').play();
  boardButton1.setCurrentColor(boardButton1.clickColor);

});

$(boardButton1.buttonID).mouseup(function () {
  // console.log("the mouse is up");

  boardButton1.setCurrentColor(boardButton1.color);

});

$(boardButton2.buttonID).mousedown(function () {
  // console.log("the mouse is down");
  document.getElementById('button_audio').src = "/audio/yellowsound.mp3";
  document.getElementById('button_audio').play();
  boardButton2.setCurrentColor(boardButton2.clickColor);

});

$(boardButton2.buttonID).mouseup(function () {
  // console.log("the mouse is up");
  boardButton2.setCurrentColor(boardButton2.color);

});

$(boardButton3.buttonID).mousedown(function () {
  // console.log("the mouse is down");
  document.getElementById('button_audio').src = "../audio/greensound.mp3";
  document.getElementById('button_audio').play();
  boardButton3.setCurrentColor(boardButton3.clickColor);

});

$(boardButton3.buttonID).mouseup(function () {
  // console.log("the mouse is up");
  boardButton3.setCurrentColor(boardButton3.color);

});


$(boardButton4.buttonID).mousedown(function () {
  // console.log("the mouse is down");
  document.getElementById('button_audio').src = "../audio/bluesound.mp3";
  document.getElementById('button_audio').play();
  boardButton4.setCurrentColor(boardButton4.clickColor);

});

$(boardButton4.buttonID).mouseup(function () {
  // console.log("the mouse is up");
  boardButton4.setCurrentColor(boardButton4.color);

});

$(boardButton5.buttonID).mousedown(function () {
  // console.log("the mouse is down");
  document.getElementById('button_audio').src = "../audio/orangesound.mp3";
  document.getElementById('button_audio').play();
  boardButton5.setCurrentColor(boardButton5.clickColor);

});

$(boardButton5.buttonID).mouseup(function () {
  // console.log("the mouse is up");
  boardButton5.setCurrentColor(boardButton5.color);

});

$(boardButton6.buttonID).mousedown(function () {
  // console.log("the mouse is down");
  document.getElementById('button_audio').src = "../audio/purplesound.mp3";
  document.getElementById('button_audio').play();
  boardButton6.setCurrentColor(boardButton6.clickColor);

});

$(boardButton6.buttonID).mouseup(function () {
  // console.log("the mouse is up");
  boardButton6.setCurrentColor(boardButton6.color);

});


function runComputerSequence() {

  computerTurn = true;

  let setSecondsInterval = 2000;


  theComputer.addSequence();


  (function theLoop(i) {


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

    setTimeout(function () {
      flashBoardButton.startPress();
    }, 500);


    setTimeout(function () {
      console.log(sequenceNumber);

      flashBoardButton.finishPress();


      if (++i < theComputer.patternSequence.length) {
        theLoop(i);
      } else {

        computerTurn = false;

        console.log("Computer is finsished!!!!!");
      }
    }, setSecondsInterval);
  })(0);

}

function startGame() {
  gameOn = true;


  runComputerSequence();


}
