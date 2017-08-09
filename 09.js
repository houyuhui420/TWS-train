//0, 1, 1, 2, 3, 5, 8, 13, 21, 34
function findNum(n){
  let num = 0;
  let num1 = 0;
  let num2 = 1;
  if(n==1){
    num = 0;
  }else if(n==2){
    num = 1;
  }

  for(let i = 3;i<=n;i++){
      let temp = num2;
      num2 = num1+num2;
      num1 = temp;
      num = num2
    }

  return num;
}

var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);

rl.question('请输入要查找的数： ',function(answer){
  console.log(findNum(answer));
  rl.close();
  process.exit(0);
});
