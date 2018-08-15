'use strict';

var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];
var storeTableElement = document.getElementById('stores');

function Store(name, minCustomersPerHour, maxCustomersPerHour, averageCookieSoldPerHour){
    this.name = name;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.averageCookieSoldPerHour = averageCookieSoldPerHour;
    this.cookiesSoldPerHour = [];
    this.totalCookiesPerDay = 0;
}

Store.prototype.calcCookiesPerHour = function(){
    for(var i = 0; i < hours.length; i++){
        var randomNum = getRandomCustomerNumber(this.minCustomersPerHour,this.maxCustomersPerHour);
        var cookiesSoldThisHour = Math.ceil(randomNum * this.averageCookieSoldPerHour);
        this.cookiesSoldPerHour.push(cookiesSoldThisHour);
    }
},

Store.prototype.calcCookiesPerDay = function(){
    this.calcCookiesPerHour();
    for(var i = 0; i < this.cookiesSoldPerHour.length; i++){
        this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
    }
},

Store.prototype.render = function() {
    this.calcCookiesPerDay();
    var trElement = document.createElement('tr');
    storeTableElement.appendChild(trElement);
    var tdElement = document.createElement('td');
    tdElement.textContent = this.name;
    trElement.appendChild(tdElement);
    for(var i = 0; i < this.cookiesSoldPerHour.length; i++){
        tdElement = document.createElement('td');
        tdElement.textContent = this.cookiesSoldPerHour[i];
        trElement.appendChild(tdElement);
    }
    var totalCookiesPerDay = document.createElement('td');
        totalCookiesPerDay.textContent = this.totalCookiesPerDay;
        trElement.appendChild(totalCookiesPerDay);
};

var pikePlaceMarket = new Store('1st and Pike', 23, 65, 6.3);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

pikePlaceMarket.render();
seaTac.render();
seattleCenter.render();
capitolHill.render();
alki.render();

function getRandomCustomerNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}