function find(array,element){
  this.array = array;
  let count = 0;
  for(let i = 0 ;i<array.length;i++){
    if(array[i] === element){
      count++;
      array.splice(i,1);
    }
  }

  for(let i = 0;i<count;i++){
    array.push(element);
  }
console.log(array);
}

find([0,1,0,3,12],0);
