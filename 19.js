function newArray(array){
  let newarr = [...new Set(array)];
  console.log(newarr);
}

newArray(["s","a","s","b","a",1,"1",1]);
