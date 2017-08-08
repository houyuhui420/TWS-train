function count(num){
  const originNum = num;
  const arry = [];
  let n = 0;
  while(num >= n){
    if(n === num){
      arry.push(n);
      break;
    }else if(num%n === 0 && n>=2){
      num = num/n;
      arry.push(n);
    }else{
      n++;
    }
  }
return originNum + "=" + arry.join("");
}

var readline = require('readline');
var rl = readline.createInterface(process.stdin,process.stdout);

// question方法
rl.question('请输入一个正整数： ',function(answer){
  console.log(count(answer));
  //不加close，则不会结束
  rl.close();
  process.exit(0);
}); 
