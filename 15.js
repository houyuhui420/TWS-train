function count(array,item){
  this.array = array;
  let num = 1;
  array.forEach((value,index) => {
    if(array.indexOf(item) !== index && value === item){
      num += 1;
    }
  });
  console.log("item = " + 1 + ",item出现的次数为" + num);
}

count([1, 3, 7, 1 ,4,],1);
