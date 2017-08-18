function findIdex(array,item){
  let result = [];
  array.forEach((value,index) => {
    if(value === item){
      result.push(index);
    }
  });
  result = result.join(",");
  console.log(result);
}

findIdex([1, 3, 7, 1 ,4,],1);
