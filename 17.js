function arraySqu(array){
  let newArray = array.map((value) => {
    return value*value;
  });
  console.log(newArray);
}

arraySqu([5,3,7,1]);
