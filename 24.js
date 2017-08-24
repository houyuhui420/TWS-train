function leftpad(str1,num,str2){
  let result = "";
  let a = (num - str1.length)/str2.length;
  for(let i = 0;i<a;i++){
    result += str2;
  }
  result += str1;
  console.log(result);
}

leftpad('hello',20,'1');
