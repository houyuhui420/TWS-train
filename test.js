//判断是否为质数
function isPrime(n) {
  for (var i = n - 1; i > 1; i--) {
        if (n % i == 0) {
            return false;
                }
            }
            return true;

        }


function primeArray(n, array) {
            array = new Array();

            for (var i = 2; i < n; i++) {
                //是否为质数
                if (isPrime(i)) {
                    var temp_R = n % i;//余数
                    var temp_c = n / i;//商
                    //是否整除
                    if (temp_R == 0) {

                        array.push(i);


                        if (!isPrime(temp_c)) {
                            //商不为质数
                            array = array.concat(primeArray(temp_c, array));


                        } else {
                            array.push(temp_c);


                        }
                        break;
                    }
                }


            }


            return array;


        }


    var a =    primeArray(90,[]);
    var str = '90 = ';

    for(let i = 0; i<a.length;i++){
      str += a[i].toString();
    }

console.log(str);
