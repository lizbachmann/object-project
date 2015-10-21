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

