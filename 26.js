function num(num){
  for(let i = 1;i <= num;i++){
    if(i%3 ===0 && i%5 !== 0){
      console.log(i + "fizz");
    }else if(i%3 !== 0 && i%5 === 0){
      console.log(i + "buzz");
    }else if(i%3 === 0 && i%5 === 0){
      console.log(i + "fizz buzz");
    }
  }
}
 num(6);
 console.log("------------------------------------------");
 num(10);
  console.log("------------------------------------------");
 num(15);
