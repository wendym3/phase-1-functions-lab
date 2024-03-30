// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
        return (blockNumber - 42);
    } else{
        return (42 - blockNumber );
    }
   };

   
   const feetPerBlock = 264;

   function distanceFromHqInFeet(blockNumber) {
       if (blockNumber < 42) {
           return (feetPerBlock * (42 - blockNumber));
       } else if (blockNumber > 42) {
           return (feetPerBlock * (blockNumber - 42));
       } else {
           return 0; // If blockNumber is exactly 42, distance is 0
       }
   }
   
   const headQuarters = 42;
   const feetPerstreet = 264;

   function distanceTravelledInFeet(headQuarters, block) {
    if (block <= headQuarters) {
        return (headQuarters - block) * feetPerstreet;
    }else {
        return (block - headQuarters) * feetPerstreet; 
    }
};

function calculatesFarePrice(headQuarters, destination) {
    const distance = Math.abs(headQuarters - destination) * 264;
    if(distance <= 400) {
        return 0;
    }else if(distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }else if (distance > 2000 && distance <= 2500) {
        return 25;
    }else {
        return "cannot travel that far"
    }
};