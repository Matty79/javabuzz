var Javabuzz = function(){};

Javabuzz.prototype.isDivisibleByThree = function (x) {
  return this._isDivisibleBy(x,3);
};

Javabuzz.prototype.isDivisibleByFive = function (x) {
  return this._isDivisibleBy(x,5);
};

Javabuzz.prototype.isDivisibleByFifteen = function (x) {
  return this._isDivisibleBy(x,15);
};

Javabuzz.prototype._isDivisibleBy = function (x,y) {
  return (x % y === 0);
};

Javabuzz.prototype.says = function (x) {
  if (this.isDivisibleByFifteen(x)) {
    return "JavaBuzz";
  }
  if (this.isDivisibleByThree(x)) {
    return "Java";
  }
  if (this.isDivisibleByFive(x)) {
    return "Buzz";
  }
  return x;
};

var javabuzz = new Javabuzz();

for (var i = 1; i <= 100; i++) {
console.log(javabuzz.says(i));
}
