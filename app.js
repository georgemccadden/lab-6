'use strict';

// Object literal notation


var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];


var pikePlaceMarket = {
    name: '1st and Pike',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    averageCookieSoldPerHour: 6.3,
    cookiesSoldPerHour: [],
    totalCookiesPerDay: 0,

    calcCookiesPerHour: function(){
        for(var i = 0; i < hours.length; i++){
            var randomNum = getRandomCustomerNumber(this.minCustomersPerHour,this.maxCustomersPerHour);
            var cookiesSoldThisHour = Math.ceil(randomNum * this.averageCookieSoldPerHour);
            this.cookiesSoldPerHour.push(cookiesSoldThisHour);
        }
    },
    calcCookiesPerDay: function(){
        this.calcCookiesPerHour();
        for(var i = 0; i < this.cookiesSoldPerHour.length; i++){
            this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
        }
    },

    
    render: function() {
        this.calcCookiesPerDay();
        var pikePlaceUlElement = document.getElementById( 'pikeplacemarket');
        for(var i = 0; i < hours.length; i++){
            var liElement = document.createElement('li');
            liElement.textContent = hours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies were sold.';
            pikePlaceUlElement.appendChild(liElement);
        }        
        var totalLiElement = document.createElement('li');
        totalLiElement.textContent = 'Total cookies sold: ' + this.totalCookiesPerDay;
        pikePlaceUlElement.appendChild(totalLiElement);     
    }
};

function getRandomCustomerNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
pikePlaceMarket.render();

console.log(pikePlaceMarket);





var seaTac = {
    name: 'SeaTac Airport',
    minCustomersPerHour: 3,
    maxCustomersPerHour: 24,
    averageCookieSoldPerHour: 1.2,
    cookiesSoldPerHour: [],
    totalCookiesPerDay: 0,

    calcCookiesPerHour: function(){
        for(var i = 0; i < hours.length; i++){
            var randomNum = getRandomCustomerNumber(this.minCustomersPerHour,this.maxCustomersPerHour);
            var cookiesSoldThisHour = Math.ceil(randomNum * this.averageCookieSoldPerHour);
            this.cookiesSoldPerHour.push(cookiesSoldThisHour);
        }
    },
    calcCookiesPerDay: function(){
        this.calcCookiesPerHour();
        for(var i = 0; i < this.cookiesSoldPerHour.length; i++){
            this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
        }
    },

    
    render: function() {
        this.calcCookiesPerDay();
        var seaTacUlElement = document.getElementById( 'airport');
        for(var i = 0; i < hours.length; i++){
            var liElement = document.createElement('li');
            liElement.textContent = hours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies were sold.';
            seaTacUlElement.appendChild(liElement);
        }        
        var totalLiElement = document.createElement('li');
        totalLiElement.textContent = 'Total cookies sold: ' + this.totalCookiesPerDay;
        seaTacUlElement.appendChild(totalLiElement);     
    }
}; 

function getRandomCustomerNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
seaTac.render();

console.log(seaTac);

var seattleCenter = {
    name: 'Seattle Center',
    minCustomersPerHour: 11,
    maxCustomersPerHour: 38,
    averageCookieSoldPerHour: 3.7,
    cookiesSoldPerHour: [],
    totalCookiesPerDay: 0,

    calcCookiesPerHour: function(){
        for(var i = 0; i < hours.length; i++){
            var randomNum = getRandomCustomerNumber(this.minCustomersPerHour,this.maxCustomersPerHour);
            var cookiesSoldThisHour = Math.ceil(randomNum * this.averageCookieSoldPerHour);
            this.cookiesSoldPerHour.push(cookiesSoldThisHour);
        }
    },
    calcCookiesPerDay: function(){
        this.calcCookiesPerHour();
        for(var i = 0; i < this.cookiesSoldPerHour.length; i++){
            this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
        }
    },

    
    render: function() {
        this.calcCookiesPerDay();
        var seattleCenterUlElement = document.getElementById( 'seattlecenter');
        for(var i = 0; i < hours.length; i++){
            var liElement = document.createElement('li');
            liElement.textContent = hours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies were sold.';
            seattleCenterUlElement.appendChild(liElement);
        }        
        var totalLiElement = document.createElement('li');
        totalLiElement.textContent = 'Total cookies sold: ' + this.totalCookiesPerDay;
        seattleCenterUlElement.appendChild(totalLiElement);     
    }
};

function getRandomCustomerNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
seattleCenter.render();

console.log(seattleCenter);

var capitolHill = {
    name: 'Capitol Hill',
    minCustomersPerHour: 20,
    maxCustomersPerHour: 38,
    averageCookieSoldPerHour: 2.3,
    cookiesSoldPerHour: [],
    totalCookiesPerDay: 0,

    calcCookiesPerHour: function(){
        for(var i = 0; i < hours.length; i++){
            var randomNum = getRandomCustomerNumber(this.minCustomersPerHour,this.maxCustomersPerHour);
            var cookiesSoldThisHour = Math.ceil(randomNum * this.averageCookieSoldPerHour);
            this.cookiesSoldPerHour.push(cookiesSoldThisHour);
        }
    },
    calcCookiesPerDay: function(){
        this.calcCookiesPerHour();
        for(var i = 0; i < this.cookiesSoldPerHour.length; i++){
            this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
        }
    },

    
    render: function() {
        this.calcCookiesPerDay();
        var capitolHillUlElement = document.getElementById( 'capitolhill');
        for(var i = 0; i < hours.length; i++){
            var liElement = document.createElement('li');
            liElement.textContent = hours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies were sold.';
            capitolHillUlElement.appendChild(liElement);
        }        
        var totalLiElement = document.createElement('li');
        totalLiElement.textContent = 'Total cookies sold: ' + this.totalCookiesPerDay;
        capitolHillUlElement.appendChild(totalLiElement);     
    }
};

function getRandomCustomerNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
capitolHill.render();

console.log(capitolHill);

var alki = {
    name: 'Alki',
    minCustomersPerHour: 2,
    maxCustomersPerHour: 16,
    averageCookieSoldPerHour: 4.6,
    cookiesSoldPerHour: [],
    totalCookiesPerDay: 0,

    calcCookiesPerHour: function(){
        for(var i = 0; i < hours.length; i++){
            var randomNum = getRandomCustomerNumber(this.minCustomersPerHour,this.maxCustomersPerHour);
            var cookiesSoldThisHour = Math.ceil(randomNum * this.averageCookieSoldPerHour);
            this.cookiesSoldPerHour.push(cookiesSoldThisHour);
        }
    },
    calcCookiesPerDay: function(){
        this.calcCookiesPerHour();
        for(var i = 0; i < this.cookiesSoldPerHour.length; i++){
            this.totalCookiesPerDay += this.cookiesSoldPerHour[i];
        }
    },

    
    render: function() {
        this.calcCookiesPerDay();
        var alkiUlElement = document.getElementById( 'alki');
        for(var i = 0; i < hours.length; i++){
            var liElement = document.createElement('li');
            liElement.textContent = hours[i] + ': ' + this.cookiesSoldPerHour[i] + ' cookies were sold.';
            alkiUlElement.appendChild(liElement);
        }        
        var totalLiElement = document.createElement('li');
        totalLiElement.textContent = 'Total cookies sold: ' + this.totalCookiesPerDay;
        alkiUlElement.appendChild(totalLiElement);     
    }
};

function getRandomCustomerNumber(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
alki.render();

console.log(alki);



// var allBeaches =  , goldenGardens, edmondsBeach];

// for (var i = 0; i < allBeaches.length; i++) {
//   allBeaches[i].render();
// }