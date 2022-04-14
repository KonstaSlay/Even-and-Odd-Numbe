/* Evens and Odds

Given a number N, can you fabricate the two numbers NE and NO such that NE is formed by even digits of N and NO is formed by odd digits of N? Examples:

input         NE          NO
126453        264         153
3012          2           31
4628          4628         0
0 is considered as an even number.

In C and JavaScript you should return an array of two elements such as the first is NE and the second is NO.*/
/*function evenAndOdd(num){
	if (num % 2 === 0) {
    return String(+(num).toString(2))
  } else {
    return String(Number(num).toString(16))
  }
}*/


function evenAndOdd(num){
  let s = String(num);
  let odd = '';
  let even = '';
  
  for (let i = 0; i < s.length; i++) {
    if (Number(s[i]) === 0) {
      odd += s[i]; 
    }
    else if (Number(s[i]) % 2 === 0) {
      odd += s[i];
    } else {
      even += s[i];
    }
  }
  if (odd.length == 0) {
    odd = '0';
  } else if (even.length == 0) {
    even = '0';
  }
  return [Number(odd), Number(even)]
}

console.log(evenAndOdd(4628));
/* Код в одну строку Codewars*/

//const evensAndOdds = (num) => num % 2 ? (num).toString(16) : (num).toString(2)