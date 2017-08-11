//var str = "1->2->3->3->4->5->3";

//var result = str.replace(/->3/g,"");

function result (str,val){
  let reg = new RegExp("->" + val,"g");
  let strNew = str.replace(reg,"");
  return strNew;
}

console.log(result("1->2->3->3->4->5->3",3));
