const numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
];



Sum = (arrays ) => {
    if (arrays.length === 0) return 0;
    let sum = 0;
    arrays.forEach((array) => {
    
     if (array instanceof Array) {
      sum += Sum(array);
      } else {
        sum += array;
        }
          
    });

    
    return sum;
};

//console.log(arraySum(numbers));
console.log(Sum(numbers));
