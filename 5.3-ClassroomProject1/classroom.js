// returns the number of grades
export function getNumberOfGrades(grades) {
  return grades.length;
}

// returns the sum of all grades
export function getSumGrades(grades) {
  let sum = 0;
  grades.forEach(function (grade) {
    sum += grade;
  });
  return sum;
}

// return the average value of all grades
export function getAverageValue(grades) {
  if (grades.length === 0) {
    return 0; // avoid division by zero
  }
  let average = getSumGrades(grades) / getNumberOfGrades(grades);
  return average;
}

// return all grades>=10
export function getPassingGrades(grades) {
  return grades.filter(function (grade) {
    return grade >= 10;
  });
}

// return all grades<=9
export function getFailingGrades(grades) {
  return grades.filter(function (grade) {
    return grade <= 9;
  });
}

// return all grades raised by 1 (no grade should exceed 20)
export function getRaisedGrades(grades) {
  return grades.map(function (grade) {
    return grade + 1 > 20 ? 20 : grade + 1;
  });
}
