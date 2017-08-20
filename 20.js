
function findItem(str){
  let array = str.split("");
  let itemAry = [...new Set(array)];
  let counAry = [];
  itemAry.forEach((value) => {
    let count = 0;
    for(let i of array){
      if(i === value){
        count += 1;
      }
    }
    counAry.push(count);
  })
  let a = Math.max.apply(this,counAry);
  let result = {};
  counAry.forEach((value,index) => {
    if(value === a){
    result[itemAry[index]] = value
    }
  });
console.log(result)
}
findItem("abcsbaddbizdbas")
findItem('aaaaabbdbdbb');
