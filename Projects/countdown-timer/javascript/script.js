const time_left = document.getElementById('time-left');
const start_time = document.getElementById('start-button');

//starting point
let timeLeft = 10; 

function countdown() {
    // stop countdown at 0 so it won't go to negative numbers
setInterval (function(){
    //if timeLeft is less than or equal to 0 clear timeLeft
    if(timeLeft <= 0){
       clearInterval(timeLeft = 0) 
    }
    // otherwise set the time left html element as the time left 
    // on the counter. timeLeft counts down by 1 second
    time_left.innerHTML = timeLeft
    timeLeft -=1
    }, 1000
    )
}

// event listener. click button to trigger function
start_time.addEventListener('click',countdown);

