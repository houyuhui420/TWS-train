function findNum(array){
  let arrayNew = array.sort();
  let num = 0;
  if(arrayNew.length%2 === 0){
    num = (arrayNew[arrayNew.length/2 - 1] + arrayNew[arrayNew.length/2])/2;
  }else if(arrayNew.length%2 !== 0){
    num = arrayNew[Math.floor(arrayNew.length/2)];
  }
  console.log(num);
}
 findNum([1,3,6,4,7]);
findNum([1,6,4,8,5,9]);
