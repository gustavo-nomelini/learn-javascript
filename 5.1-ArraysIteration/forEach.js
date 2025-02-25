// 10/02/2025 - Gustavo Lopes Nomelini
function meanGrades(grades) {
  let sum = 0;
  grades.forEach((grade) => {
    sum += grade;
  });
  const arraySize = grades.length;
  return sum / arraySize;
}

array1 = [8, 9, 10];
console.log(sumGrades(array1));
