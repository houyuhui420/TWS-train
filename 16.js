function findItem(array){
  let newArray = [];
  array.forEach((value) => {
    if(array.indexOf(value) !==  array.lastIndexOf(value)){
      newArray.push(value);
    }
  });
   let b = newArray.filter((value,index) => {
    return newArray.indexOf(value) == index;
  });
  const result = b.join(",");
  console.log(result);
}

findItem(['a', 'ab', 'ed', 'da', 'a', 'ed', 'b']);
