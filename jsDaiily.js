function plusOne(digits) {
    // digits = [1,2,3]
    // digits = [4,3,2,1]
    // digits = [9]
    digits = [9, 9];
    let lastElement = digits[digits.length - 1];
    let result = [];
    for (let i = 0; i <= digits.length; i++) {
      // console.log (j)
        if (digits[i] !== result[i] && digits[i] !== lastElement) {
        result.push(digits[i]);
        // console.log(result)
      }
      if (digits[i] === lastElement) {
        result.push(digits[i] + 1)
      }
      if (result[i] >= 9) {
        let res = String(result).split("").map((str) => Number(str));
        // res.pop(i)
        return res;
      }
      if(res[i+1] === 0  && digits[i+1] === 9 ){
        console.log(res[i+2])
      }
      }
  return result;
  }
  console.log(plusOne());
  