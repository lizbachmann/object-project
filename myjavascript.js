var receiptPrice =  [3.22, 5.44, 3.50, 3.20, 16.34, 9.98, 10.00, 0.48];
var taxrate = 0.075;
var subTotal = 0;

    //function that lists prices on page, parameter: prices
//for each item in price write to document
function listItems(a){
    for(var i = 0; i < a.length; i++){
        subTotal = subTotal + a[i];
        document.write("<p> $" + receiptPrice[i] .toFixed(2) + "</p><br/>");
}
        document.write("<p> Subtotal: $" + subTotal + "</p><br/>"); 
    
}
listItems(receiptPrice);
//function that calculates subtotal parameter: prices
//add all items together from prices

function taxTotal(b){
       var tax = subTotal*taxrate;
        var total = subTotal + tax;
        document.write("<p> Tax: $" + tax .toFixed(2) + "</p><br/>");
        document.write("<p> Total: $" + total .toFixed(2) +"<br/");
    
}
taxTotal(receiptPrice);

//Object Assignment

//object literal

var state = {
    midWest = "Nebraska";
    eastCoast = "New York";
    westCoast = "California";
    northWest = "Washington";
};
    //object keyword new
var city = new object(){
    city.Nebraska = "Lincoln";
    city.California = "San Diego";
    city.Florida = "Tampa";
    city.Texas = "Austin";
};

//object constructor

function countries(europe, asia, africa, america){
    this.europe = "europe";
    this.asia = "asia";
    this.africa = "africa";
    this.america = "america";
};

var favoriteCountry = new city("Ireland", "China", "Algeria", "USA");
var leastFavorite = new city("Spain","Japan", "Benin", "Mexico");

//var person = {
//   name: "Liz",
//    height: "68",
//    gender: "female",
//    age: 24,
//    glasses: true,
//    lastName: "Bachamnn",
//    getFullName: function(){
//        return this.name + " " + this.lastName;
//    }
//}
//document.write(person.getFullName());
//
//
//var person = {
//     age:  prompt("what's your age?"),
//   getAge: function(){
//    return this.age + "years old";
//    }
//}
//
//document.write(person.getAge());

//function Person(firstName, lastName, age){
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.age = age;
//}
//
//var me = new Person("Liz", "Bachmann", 24)
//
//document.write(Person.me());

//function getInfo(){
//    var age = prompt("What's your age?");
//    var firstName = prompt("What's your first name?");
//    var lastName = prompt("what's your last name?");
//    return new Person(firstName + lastName + "is " + age);
//}
//var visitor = getInfo();

//var pageHeader = document.getElementById("header");
//    console.log(pageHeader);
//    pageHeader.textContent = "HOWDY";
//
//var greeting = document.getElementById("greeting") ;
//    console.log(greeting);
//    var name = prompt("What's your name?");
//    greeting.textContent = "Hello " + name;
////
//var selectorOne = document.querySelector("li.blue");
//selectorOne.textContent = "nopeeeee";
////static items will not update
//var selector2 = document.querySelectorAll(".blue");
//console.log(selector2);
//
//
////live item that updates as the page does
//var selector3 = document.getElementsByClassName("blue");
//console.log(selector3);
//
//var parent = selector3[0].parentElement;
//
//var newItem = document.createElement("li");
//
//var newItemText = document.createTextNode("Lana");
//
//newItem.appendChild(newItemText);
//
//newItem.className = newItem.className + " blue";
//
//parent.appendChild(newItem);
//newItem.className = "blue";
