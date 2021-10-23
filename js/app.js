setInterval(() => {
    let dt = new Date();
    let hour = dt.getHours();
    let minute = dt.getMinutes();
    let second = dt.getSeconds();

    let hRotation = hour * 30 + minute * 0.5;
    let mRotation = minute * 6 + second * 0.1;
    let sRotation = second * 6;

    hHand = document.getElementById("hour");
    mHand = document.getElementById("minute");
    sHand = document.getElementById("second");

    sHand.style.transform = `rotate(${sRotation}deg)`;
    mHand.style.transform = `rotate(${mRotation}deg)`;
    hHand.style.transform = `rotate(${hRotation}deg)`;
}, 1000);

// for hour hand:
// 12 = 360 deg
// 1 = 360/12 = 30 deg
// 1 hour = 30 deg
// 60 minutes = 30 deg
// 1 minute = 1/2 deg = 0.5 deg
// formula: (hour * 30 + minute * 0.5) deg

// for minute hand:
// 60 = 360 deg
// 1 = 6 deg
// 60 seconds = 6 deg
// 1 second = 6/60 = 1/10 = 0.1 deg
// formula: (minute * 6 + second * 0.1) deg

//for second hand:
// 60 = 360 deg
// 1 = 6 deg
// formula: (second * 6) deg
