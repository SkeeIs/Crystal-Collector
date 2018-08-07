
    //initial variables
    var wins = 0;
    var losses = 0;
    var targetNumber;
    var userTotal = 0;
    var firstValue;
    var secondValue;
    var thirdValue;
    var fourthValue;
    var values = [];

//function returns random number between 19-120
    function bigNumber() {
        return Math.floor(Math.random() * 101 + 19);
    }
//function to get random number from array of crystal values 1-12
    function littleNumber() {
        return Math.floor(Math.random() * 11 + 1);
    }

//function to add 4 random crystal values to our empty array of values & the 
    function assignVals() {
        for (var i = 0; i < 4; i++) {
            values.push(littleNumber());
            console.log(values);
        }
        firstValue = values[0];
        secondValue = values[1];
        thirdValue = values[2];
        fourthValue = values[3];
        targetNumber = bigNumber();
        $("#big-num").html(targetNumber);
    }
//function to update the wins & losses
    function updateText() {
        $("#wins").text(wins);
        $("#losses").text(losses);
    }

//reset function
    function reset() {
        values = [];
        userTotal = 0;
        assignVals();
        updateText();
    }    

//win function
    function win() {
        wins++;
    }

//losses function
    function lose() {
        losses++;
    }

$(document).ready(function() {
  reset();      
//on-click function to subtract crystal value from 
  $("#first-jewel").on("click", function() {
    userTotal = userTotal + firstValue;
    console.log("New userTotal= " + userTotal);
    
    targetNumber = targetNumber - firstValue;
    $("#big-num").text(targetNumber); 
          //sets win/lose conditions
        if (targetNumber === 0) {
          win();
          reset();
        }
        else if ( targetNumber < 0) {
          lose();
          reset();
        }   
  })  
  $("#second-jewel").on("click", function() {
    userTotal = userTotal + secondValue;
    console.log("New userTotal= " + userTotal);
    
    targetNumber = targetNumber - secondValue;
    $("#big-num").text(targetNumber);
        
        if (targetNumber === 0) {
          win();
          reset();
        }
        else if ( targetNumber < 0) {
          lose();
          reset();
        } 
  })  
  $("#third-jewel").on("click", function() {
    userTotal = userTotal + thirdValue;
    console.log("New userTotal= " + userTotal);
    targetNumber = targetNumber - thirdValue;
    $("#big-num").text(targetNumber);
        
        if (targetNumber === 0) {
          win();
          reset();
        }
        else if (targetNumber < 0) {
          lose();
          reset();
        } 
  })  
  $("#fourth-jewel").on ("click", function() {
    userTotal = userTotal + fourthValue;
    console.log("New userTotal= " + userTotal);
    targetNumber = targetNumber - fourthValue;
    $("#big-num").text(targetNumber);
        if (targetNumber === 0) {
          win();
          reset();
        }
        else if (targetNumber < 0){
          lose();
          reset();
        }
  });   

});