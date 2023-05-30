let superObj = {superVal: 'super'}
let subObj = Object.create(superObj); //superObj를 부모로 하는 새로운 객체 subObj 생성
subObj.subVal = 'sub';
subObj.superVal = 'sub';

console.log('subobj.subVal=>', subObj.subVal);
console.log('subobj.superVal=>', subObj.superVal);
console.log('subobj.superVal=>', subObj.superVal);
console.log('superobj.superVal=>', superObj.superVal);