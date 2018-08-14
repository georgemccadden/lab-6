'use strict';

// Object literal notation

// Let's model some Seattle beaches in code
// Let's make note of the name, neighborhood, and seagull count of each beach for each day last week

var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];

var pikePlaceMarket = {
  name: '1st and Pike',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  averageCookieSoldPerHour: 6.3,
};
 pikePlaceMarket.render = function() {
  // Access the <ul> in the DOM where we will put data
  var BeachUlEl = document.getElementById( beach');
  // console.log BeachUlEl);
  // For each value in the array...
  for (var i = 0; i < this.seagullCount.length; i++) {
    // console.log(this.seagullCount[i]);
    // Create the <li> element
    var liEl = document.createElement('li');
    // Give the <li> element content
    liEl.textContent = hours[i] + ': ' + this.seagullCount[i];
    // Append the <li> element to the <ul>
 BeachUlEl.appendChild(liEl);
  }
}

var goldenGardens = {
  name: 'Golden Gardens',
  neighborhood: 'Ballard',
  seagullCount: [45, 74, 22, 58, 12, 9, 8]
};

goldenGardens.render = function() {
  // Access the <ul> in the DOM where we will put data
  var goldenUlEl = document.getElementById('gg');
  // console.log(goldenUlEl);
  // For each value in the array...
  for (var i = 0; i < this.seagullCount.length; i++) {
    // console.log(this.seagullCount[i]);
    // Create the <li> element
    var liEl = document.createElement('li');
    // Give the <li> element content
    liEl.textContent = hours[i] + ': ' + this.seagullCount[i];
    // Append the <li> element to the <ul>
    goldenUlEl.appendChild(liEl);
  }
}

var edmondsBeach = {
  name: 'Edmonds Beach',
  neighborhood: 'Edmonds',
  seagullCount: [76, 45, 23, 15, 98, 2, 44]
};

edmondsBeach.render = function() {
  var edmondsUlEl = document.getElementById('edmonds');
  for (var i = 0; i < this.seagullCount.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ': ' + this.seagullCount[i];
    edmondsUlEl.appendChild(liEl);
  }
}

var allBeaches =  , goldenGardens, edmondsBeach];

for (var i = 0; i < allBeaches.length; i++) {
  allBeaches[i].render();
}