// prompt for car speed input
let prompt=("Enter the speed of the car (km/h):");
// convert speed to interger
Speed=Number(Speed);
// calculate the time
  if (isNaN(speed) || speed < 0) ;{
    console.log("Please enter a valid speed.");
       }
    const speedLimit = 70;
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // check  if the speed is greater than the speed limit
        let points = Math.floor((speed - speedLimit) / 5);
        console.log("Points: " + points);
        // check license validity
        if (points > 12) {
            console.log("License suspended");
            }
            }
            
            