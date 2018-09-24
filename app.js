// DOM Selection
let hourHand = document.querySelector(".hours");
let minutesHand = document.querySelector(".minutes");
let secondsHand = document.querySelector(".seconds");
let dot = document.querySelector(".dot");
let innerClock = document.querySelector(".clock-inner");
let clock = document.querySelector(".clock");


// RGBA generator = getting random rgba with default parameters set to max values
function rgba(r = 255, g = 255, b = 255, alpha = 1) {
    let red = Math.ceil(Math.random() * r);
    let green = Math.ceil(Math.random() * g);
    let blue = Math.ceil(Math.random() * b);

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

// Getting right time and Getting hands on corresponding place
function getTime() {

    // Getting time and calculating it to match hands movement - times 6 coz of degress (6*60 = 360)(+90deg for starting from 00/12)
    let time  = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let rotHours = 6 * (getHours() * 5) + 90;
    let rotMinutes = 6 * minutes + 90;
    let rotSeconds = 6 * seconds + 90;

    // Figuring out if it is AM or PM and calculacting time to work with 0-12 time
    function getHours() {
        return hours >= 12 ? hours - 12 : hours;
    }   

    // Moving(rotate) hands based on calculated time 
    hourHand.style.transform = `rotate(${rotHours}deg)`;
    minutesHand.style.transform = `rotate(${rotMinutes}deg)`;
    secondsHand.style.transform = `rotate(${rotSeconds}deg)`      

    // Updates clocks background every time seconds hand hits 12/00(starting point = 90deg)
    if(rotSeconds === 90) {
        innerClock.style.backgroundColor = rgba(255, 155, 55, 0.7);  
    }

    dot.classList.toggle("heartDot");
}


getTime();

// Updates time/hands every second
 setInterval(getTime, 1000);

// Updates clocks border color every 5 seconds
 setInterval(() => clock.style.border = `8px solid ${rgba(35, 35, 125, 0.9)}`, 5000);





