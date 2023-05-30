kim = {
    name: "kim",
    first: 10, second: 20,
    sum: function(){return this.first+this.second}
}

let lee = Object.create(kim);
lee.name = "lee";
lee.second = 10;
lee.avg = function(){return (this.first + this.second)/2}

console.log(lee.sum());
console.log(lee.avg());