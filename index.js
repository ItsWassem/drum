// for handling mouse click strokes on buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) //for selecting all button
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function() //for evey frum class button to add audio ie 1 2 3.mp3
    {
      var audio = new Audio('sounds/' + this.innerHTML + '.mp3'); //playing audio
      audio.play();
      this.classList.add("pressed"); // intilzed var so can call ed inside timout function
      var buttonPressed = this;
      setTimeout(function() // wait then remove class to animate button pressing
        {
          buttonPressed.classList.remove("pressed");
          // this.classList.remove("pressed") // this can't be retrive here
        }, 100);

    });
}

//for handling keyboard strokes
document.addEventListener("keydown", function(event) { //for keboard key to work

  var audio = new Audio('sounds/' + event.key + '.mp3');
  audio.play();
  document.querySelector("." + event.key).classList.add("pressed"); //to access element for adding class
  setTimeout(function() // wait then remove class to animate button pressing
    {
      document.querySelector("." + event.key).classList.remove("pressed");
    }, 100);

});
