function arrayTo(array){
  let a = (array + "").split(',');
  let b = a.map((value) => {
    return Number(value);
  });
  console.log(b);
}

arrayTo([1,2,[1,2]]);
arrayTo([1,2,[1,2],[3,4]]);
arrayTo([4,[3,[2,[1]]]]);
