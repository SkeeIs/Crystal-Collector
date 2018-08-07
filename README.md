# Crystal-Collector AKA Miner's Delight

Howdy miner! Mine the gems in  your quarry until there are none left. But be careful! If you over-mine your quarry (past zero) you will have over-harvested your resources & go bankrupt! 


# Link to deployed site
[Miner's Delight Game](https://skeeis.github.io/Crystal-Collector/)


# Images
![Miner's Delight](https://i.imgur.com/Me4Igro.jpg)

# technology used

- HTML
- CSS
- Google Fonts
- Javascript
- JQuery

# code snippets
JQuery onclick function that keeps track of the addition in console while displaying subtraction to user, also checks if the game has been won or lost on that click.
```
$("#first-jewel").on("click", function() {
    userTotal = userTotal + firstValue;
    console.log("New userTotal= " + userTotal);
    
    targetNumber = targetNumber - firstValue;
    $("#big-num").text(targetNumber); 
          
        if (targetNumber === 0) {
          win();
          reset();
        }
        else if ( targetNumber < 0) {
          lose();
          reset();
        }   
```


# Learning points & Challenges
I felt pretty comfortable using jquery selectors to call on elements from the HTML dom. I would like to add some animation or picture changes to this project & will revisit to update some of the style once I have more tools in my tool box.


# Author 
Taylor Skeels
