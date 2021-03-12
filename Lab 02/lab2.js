//IT19079264
//-------------------Q1------------------------
 function getValue(callback){
     let value = 0;
     setTimeout( function() {
         value = 10;
         callback(value)
     }, 1000);
 }

 getValue(function(value){
    console.log(value);
 });

function getValuepromise() {
    let no = 0;

    return new Promise(function(resolve, reject){
        setTimeout(() => {
            no = 10;
            resolve(no);
        }, 1000);
    });
 }

 getValuepromise().then(function(value){
     console.log(value);
 })

//--------------------Q2------------------------------
function Vehicle(type){
    this.type = type;
    Vehicle.VehicleCount++;
}

Vehicle.prototype.drive = function(){
    console.log("Vehical is driving ");
}

Vehicle.VehicleCount = 0;

const vehicle = new Vehicle("car");

function Car(type){
    Vehicle.call(this, type);
}

Car.prototype = Object.create(Vehicle.prototype); 
Car.prototype.constructor = Car;

Car.prototype.balanceWheels = function(){
    console.log("Wheels are balanced");
}

const car = new Car("nissan");
console.log(car.type);
car.balanceWheels();

//---------------------Q4--------------------------
function getValueasync() {
    let no = 0;

    return new Promise(function(resolve, reject){
        setTimeout(() => {
            no = 10;
            resolve(no);
        }, 1000);
    });
 }
 
 async function print(){
     let value = await getValueasync();
     console.log(value);
 }

 print();

//---------------------Q5--------------------------------
class Vehicle{
    constructor(type){
        this.type = type;
        Vehicle.VehicleCount++;
    }

    drive(){
        console.log("Vehical is driving");
    }

    static VehicleCount = 0;

    get typeCombined(){
        return this.type+" is good";
    }

    set typeCombinedAgain(type){
        this.type = "Somthing else";
    }
}

const Vehicle = new Vehicle("car");
console.log(vehicle.type);
vehicle.drive();

class Car extends Vehicle{
    balanceWheels(){
        console.log("wheels are balanced");
    }
}

const car = new Car("nissan");
console.log(car.type);
car.balanceWheels();
console.log(car.typeCombined);