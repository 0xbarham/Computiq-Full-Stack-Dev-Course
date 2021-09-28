let numbers = [5, 8, 0, 1, 9, 11, 15, 16];
len = numbers.length
  for(let i = 0; i < len - 1; i++){
    for(let j = 0; j < len - 1 - i; j++){
      if(numbers[j] > numbers[j + 1]){
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
console.log('ASC Sort: ', numbers);
for(let i = 0; i < len - 1; i++){
  for(let j = 0; j < len - 1 - i; j++){
    if(numbers[j] < numbers[j + 1]){
      const temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}
console.log('DES Sort: ', numbers);