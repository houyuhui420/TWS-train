function find(){
  let result = 0;
  for(let i = 99;i<1000;i++){
    let array = i.toString().split("").map(value => ~~value);
    let count = 0;
    array.forEach((value) => {
      count += value*value*value
    });
    if(count === i){
      result = i;
      console.log(i);
    }
  }
}

find();
