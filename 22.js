function findArray(arr1,arr2){
  let str1 = arr1.join("");
  let str2 = arr2.join("");
  let reg = new RegExp(str2,"g");
  let str3 = str1.match(reg);
  let result = str3.join("").split("");
  result = result.map((value) => {
    return Number(value);
  })
  console.log(result);
}

findArray([1,2,2,1],[2,2]);
