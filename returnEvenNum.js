// 숫자 배열을 받아 짝수만 반환하는 함수

const getEvenNumbers = (arr) => {
    return arr.filter(num => num % 2 === 0);
  };
  
  console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
  