function findNum(array){
  let num = 0;
  array.forEach((value) => {
    if(array.indexOf(value) === array.lastIndexOf(value)){
      num = value;
    }
  });
  return num;
}

console.log(findNum([1,2,2,3,3,5,4,4,5]))
