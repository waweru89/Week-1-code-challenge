
let prompt=("Enter the speed of the car (km/h):");
Speed=Number(Speed);
  if (isNaN(speed) || speed < 0) ;{
    console.log("Please enter a valid speed.");
       }
    const speedLimit = 70;
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let points = Math.floor((speed - speedLimit) / 5);
        console.log("Points: " + points);
        if (points > 12) {
            console.log("License suspended");
            }
            }
            
            