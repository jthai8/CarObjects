function carObject(make, modelYear,color){
  var speed = 0;
  return{
    make:make,
    modelYear:modelYear,
    color:color,
    getData:function(){return this.make + " " + this.modelYear+ " "+ this.color},
    getSpeed: function () {return speed},
    accelerate: function () {speed = speed+10},
    brake: function () {
      if (speed < 0) {
        speed = 0;
      } else {
        speed = speed-7;
      }
    }
  }
}
var car1 = carObject("Lexus","2014","Hot Pink");

// while (car1.getSpeed() < 70){
//   car1.accelerate();
//   }
//   if (car1.getSpeed() === 70) {
//     console.log(car1.getSpeed());
//   }

while (car1.getSpeed() <= 85){
    car1.accelerate();
    }
    if (car1.getSpeed() > 85) {
      car1.brake();
    }

var drivingSpeed = car1.getSpeed();

while (car1.getSpeed() >= -7){
  console.log(car1.getSpeed());
  if(car1.getSpeed()===0){
    break;
  }
  car1.brake();
  console.log(car1.getSpeed());
}



// test code
// car1.make;
// car1.modelYear;
// car1.color;
// car1.getData();


// var carSpeed = car1.getSpeed();
