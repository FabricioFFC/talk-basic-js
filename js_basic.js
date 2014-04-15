// create objects

var object = {};
console.log(typeof object);

var object = new Object();
console.log(typeof object);

var object = Object.create({});
console.log(typeof object);

// create objects with attributes and methods

var object = {
  attribute: 'attribute assigned',
  method: function(x, y) {
    return (x + y);
  }
};
console.log(object.attribute);
console.log(object.method(1, 1));

var object = {};
object.attribute = 'attribute assigned';
object.method = function method(x, y) {
  return (x + y);
};

console.log(object.attribute);
console.log(object.method(2, 2));

var object = {};
object["attribute"] = 'attribute assigned';
object["method"] = method;

function method(x, y) {
  return (x + y);
}

console.log(object.attribute);
console.log(object.method(3, 3));

// class definitions

var Company = function Company(name, team) {
  var vizirTeam = team || require('./data/vizir-team.json')["team"];

  this.name = name;
  this.size = vizirTeam.length;
  this.listTeam = listTeam;

  function listTeam() {
    for (var i = 0; i < vizirTeam.length; i++) {
      console.log(yellowText(vizirTeam[i]));
    }
    function yellowText(text) {
      return "\x1B[33m" + text + "\x1B[39m";
    }
  }

};

var vizir = new Company('Vizir');

console.log(vizir.name);
console.log(vizir.size);
vizir.listTeam();

// scope

console.log(typeof vizirTeam);        // returns undefined because vizirTeam is only accessible in Company function
console.log(typeof vizir.vizirTeam);  // returns undefined because vizirTeam is private
console.log(typeof vizir.yellowText); // returns undefined because yellowText is private

// variable hoisting

var myVar = 1;

(function (){
  myVar = 2;
})();

console.log(myVar);

var myVar = 1;

(function (){
  myVar = 2;
  function myVar(){};
})();

console.log(myVar);

var myVar = 1;

(function (){
  function myVar(){};
  myVar = 2;
  console.log("myVar:" + myVar);
})();

console.log(myVar);


// reuse with prototype

function Company(name, team) {
  var vizirTeam = team || require('./data/vizir-team.json')["team"];

  this.name = name;
  this.size = vizirTeam.length;
  this.listTeam = listTeam;

  function listTeam() {
    for (var i = 0; i < vizirTeam.length; i++) {
      console.log(vizirTeam[i]);
    }
  }

 }

function Vizir() {
  var address = 'Rua Cel Xavier de Toledo';

  this.getAddress = function () {
      return address;
  };
}

Vizir.prototype = new Company('Vizir');
var vizir = new Vizir();
console.log(vizir.name);
vizir.listTeam();
console.log(vizir.getAddress());
console.log(Object.getOwnPropertyNames(vizir));
var vizirPrototype = Object.getPrototypeOf(vizir);
console.log(Object.getOwnPropertyNames(vizirPrototype));