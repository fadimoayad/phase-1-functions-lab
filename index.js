function distanceFromHqInBlocks(distance){
if (distance>42){
return distance-42;
}else if(distance<42){
    return 42-distance;
}
}

function distanceFromHqInFeet(distance){
let result=distanceFromHqInBlocks(distance)
return result *264;
}

function distanceTravelledInFeet(start, destination){
    let result;
    if(start<destination){
         result=destination-start;
    }else{
         result=start-destination;

    }

return result*264;
}


function calculatesFarePrice(start, destination){
let startfeet=start*264;
let destinationfeet=destination*264;
let distance;
if(startfeet<destinationfeet){
    distance=destinationfeet-startfeet;
}else{
    distance=startfeet-destinationfeet;

}
   if(distance<=400){
        return 0;
    }else if(distance>400 && distance<2000){
        distance=distance-400
        return distance *0.02;
    }else if(distance>2000 &&distance<2500){
        return 25;
    }else if(distance>2500){
        return "cannot travel that far"
    }

}