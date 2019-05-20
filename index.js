// if windows open and load run bellow function
window.addEventListener('load' , () => {
  // get all audio
  const sounds  = document.querySelectorAll('.sound');
  // if click get all child div at pads
  const pads    = document.querySelectorAll('.pads div');
  const visual  = document.querySelector('.visual');
  const colors  = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#606bd3",
    "#60c2d3"
  ];

  // Lest get going with the sound here

  // foreach all pads and sounds get by index
  pads.forEach((pad, i) => {
    pad.addEventListener("click" , function(){
      // reset current time for double click pads
      sounds[i].currentTime = 0;
      // sounds play by index
      sounds[i].play();

      //passing index value to createBubble function
      createBubble(i);
    });
  });

  // Create a function that makes bubbles
  const createBubble = (i) => {
    // create new element div
    const bubble = document.createElement("div");
    // attaching new elemet as child visual class
    visual.appendChild(bubble);
    // styling
    bubble.style.backgroundColor = colors[i];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend' , function(){
      visual.removeChild(this);
    });
  };
});
