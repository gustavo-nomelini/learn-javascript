// in this lesson we will learn about arrow functions
// they have 3 main benefits:
// 1 - Its syntax is shorter
// 2 - It uses lexical scope (important when using classes)
// 3 - It can benefit from implicit returns

function sum1(a, b) {
  return a + b;
}

const sum2 = (a, b) => a + b;

export const getNumberOfGrades = (grades) => {
  return grades.length;
};

export const getSumGrades = (grades) => {
  let sum = 0;
  grades.forEach((grade) => {
    sum += grade;
  });
  return sum;
};

export const getAverageValue = (grades) => {
  let average = getSumGrades(grades) / getNumberOfGrades(grades);
  return average;
};

export const getPassingGrades = (grades) => {
  return grades.filter((grade) => grade >= 10);
};

/** @param {number[]} grades */
export const getFailingGrades = (grades) => {
  return grades.filter((grade) => grade < 10);
};

/** @param {number[]} grades */
export const getRaisedGrades = (grades) => {
  return grades.map((grade) => {
    return grade + 1 > 20 ? 20 : grade + 1;
  });
};
