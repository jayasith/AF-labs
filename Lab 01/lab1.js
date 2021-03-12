//IT19079264
//---------Q1--------------------

var printHello = function(){
    return function(){
        console.log("hello world");
    }
}

function print(func){
    var execute = func();
    execute();
}

print(printHello);

//-----------Q2-------------------------
const user = {
    name:"chamindu",
    age: 23,
    Printname: function(){
        console.log(this.name);
    }
}

user.Printname();

//---------------Q3-----------------------
var vehicleName = "Toyota";

function printVehicleName(){
    console.log(this.vehicleName);
}

var car = {
    vehicleName: "Nissan",
    printVehical: printVehicleName,
    printName: function(){
        return function(){
          console.log(this.vehicleName);  
        }
    }
}

printVehicleName();
car.printVehical();
var execute = car.printName();
execute();
execute = execute.bind(car);
execute(); 

//-----------------Q4-------------------------
function taxtCal(percentage){
    return function(amount){
        return amount * percentage;
    }
}

const cal = taxtCal(.2);
console.log(cal(2000));

//-----------------Q5--------------------------
fetch('https://jsonplaceholder.typicode.com/posts').then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
});