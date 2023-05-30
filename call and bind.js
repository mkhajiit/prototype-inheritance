var kim = {name:'kim',first:10,second:20}
var lee = {name:'lee',first:10,second:10}
lee.__proto__ = kim

function sum(prefix){ 
    return prefix+ (this.first + this.second);
}

//sum();
console.log("sum.call(kim)",sum.call(kim, 10));
console.log("sum.call(lee)",sum.call(lee, 20));
let kimSum = sum.bind(kim); // bind kim을 영구적으로 this로하는 새로운 함수를 만든다