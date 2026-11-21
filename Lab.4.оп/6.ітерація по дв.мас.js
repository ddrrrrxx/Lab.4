function max(matrix) {
  let maxNumber = -Infinity; // Починаємо з найменшого можливого числа

  // Зовнішній цикл перебирає внутрішні масиви (рядки)
  for (const row of matrix) {
    // Внутрішній цикл перебирає конкретні числа в рядку
    for (const num of row) {
      if (num > maxNumber) {
        maxNumber = num; // Якщо знайшли більше число - запам'ятовуємо його
      }
    }
  }

  return maxNumber;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9
