alert("js file is  linked")
const buttonColours=["red","blue","green","yellow"];
const gamePattern=[];
const userClickedPattern=[];
let level=0;
let gameOver=0;

//game sequence
function nextSequence(){
  const randomNumber=Math.floor(Math.random()*4);
  // console.log(randomNumber);
  const randomChosenColour=buttonColours[randomNumber];
  // console.log(randomChosenColour);
  gamePattern.push(randomChosenColour);


 


 playSound(randomChosenColour);
 $("h1").text("level: "+level);

 level++;
 while(userClickedPattern.length!==0){
   userClickedPattern.pop();
 }
 console.log("game pattern: "+gamePattern);
 

}


//when clicked this will execute
$(".btn").click(function(){
  const  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  checkAnswer();
  console.log("clicked pattern: "+userClickedPattern);
  playSound(userChosenColour);
  if(userClickedPattern.length===gamePattern.length){
  setTimeout(nextSequence, 1000);
  }
  //nextSequence();
  
});


//wiil be called when user clicks
function playSound(name){
  

    let audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    animatePress(name);
  
}

//called when user clicks
function animatePress(currentColour){
  $("."+currentColour).addClass("pressed");
  $("#"+currentColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  setTimeout(function(){
    $("."+currentColour).removeClass("pressed");}, 40);
}


//for the first time
if(level===0){
  if(gamePattern.length!==0){
   
  }
$(document).keypress(function () {
     alert("button was");
     nextSequence();
});
}

function checkAnswer(){
  // let c=1;
  // let j=0;
  // let len=0;
  // while((c===1)&&(len!==userClickedPattern.length)){
    
  //   if(gamePattern[j]!==userClickedPattern[j]){
  //     c++;
  //     len++;
  //   }
  //   j++;
  // }
  // if(c===1){
  //   console.log("they are equal");
    
  // }else{
  //   console.log("not equal");
    
  // }

  for(let i=0;i<userClickedPattern.length;i++){
    if(userClickedPattern[i]!==gamePattern[i]){
      console.log("game over");
      gameOver=1;
      if(gameOver===1){
        console.log
        level=0;
        $("h1").text("game over");
        while(gamePattern.length!==0){
          gamePattern.pop();
        }
        setTimeout(function(){
          $("h1").text("click any button to restart");},500);
          gameOver=0;
         
      }
      
    }
  }
}






// $(".btn").click(function() {

//   //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
//   var userChosenColour = $(this).attr("id");

//   //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
//   userClickedPattern.push(userChosenColour);

//   console.log(userClickedPattern);

// });