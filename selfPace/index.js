const slides = document.querySelectorAll('.slide-child');
const next = document.querySelector('.next');
const prev = document.querySelector('.previous');


// Set the date we're counting down to
const countDownDate = new Date("Nov 31, 2023 00:50:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = countDownDate - now;

  // Calculate hours, minutes, and seconds
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

let currentIndex = 0;
function gotoNext(){
  slides[currentIndex].classList.remove('active');
  currentIndex = currentIndex + 1;
  if(currentIndex===slides.length){
      currentIndex=0;
  }
  slides[currentIndex].classList.add('active');
}
prev.addEventListener('click', () =>{
  slides[currentIndex].classList.remove('active');
  currentIndex = currentIndex - 1;
  if(currentIndex===slides.length-1){
      currentIndex=0;
  }
  slides[currentIndex].classList.add('active');
});

next.addEventListener('click', () => {
  gotoNext();
});