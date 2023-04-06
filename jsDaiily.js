
function plusOne(digits) {
    digits = [1,2,3]
    // digits = [4,3,2,1]
    // digits = [9]
    // digits = [9, 9];
    let lastElement = digits[digits.length - 1];
    // console.log(lastElement)
    let result = [];
    for (let i = 0; i <= digits.length; i++) {
      for(let j = i; j <= digits[i]; j++){
      // console.log (j)
        if (digits[i] !== result[i] && digits[i] !== lastElement) {
        // console.log(digits[i].length)
        // console.log(result.length)
        result.push(digits[i]);
        // console.log(result)
      }
      if (digits[i] === lastElement) {
        result.push(digits[i] + 1);
        // result = result[j]+1
        // console.log(result)
        // return result
      }
      let res = String(result).split("").map((str) => Number(str));
      if (result[i] >=9 && res[i+1] === 0 ){
       let largeInteger = String(result).split("").map((str) => Number(str));
           largeInteger.push(0);
      //  console.log(largeInteger)
       return largeInteger
  
     }
      if (result[i] >= 9 && res) {
        // let res = String(result).split('')
  
        // console.log(test)
        // return moreResult
        // console.log(res)
        console.log(res[i])
        return res;
      }
      
        //  console.log(res)
        // if (res[i+1] === 0) {
        //   let test = res.push(0);
        //   // let res = result.toString()
        //   // test.push(...res)
        //    test = String(test).split('').map(str => Number(str))
        //   // console.log(test)
        //   // return res;
        // }
        // console.log(test)
        // console.log(res)
        //  let moreResult = res + result[i]
        // console.log(test)
    }
    return result;
    // return res
    // }
  }
  console.log(plusOne());
  