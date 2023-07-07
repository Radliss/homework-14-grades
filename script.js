const grades = [];
grades.push(Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100));
console.log(grades);

const gPA = Math.round(grades.reduce((total, grade) => total + grade, 0) / grades.length);
console.log(`Средний балл студентов: ${gPA}`);

const maxGrade = Math.max(...grades);
console.log(`Максимальный балл студентов: ${maxGrade}`);

const minGrade = Math.min(...grades);
console.log(`Минимальный балл студентов: ${minGrade}`);

const positiveGrade = grades.filter(grade => grade >= 60);
const positiveGradeStudents = positiveGrade.length;
console.log(`Количество студентов, получивших положительную оценку: ${positiveGradeStudents}`);

const negativeGrade = grades.filter(grade => grade < 60);
const negativeGradeStudents = negativeGrade.length;
console.log(`Количество студентов, получивших отрицательную оценку: ${negativeGradeStudents}`);

const letterGrades = grades.map(grade => {
    if(grade >= 80 && grade <= 100) {
        return 'A';
    } else if(grade >=60 && grade <= 79){
        return 'B';
    } else if(grade <=59 && grade >= 40){
        return 'C';
    } else if(grade <= 39 && grade >= 20){
        return 'D';
    } else {
        return 'E';
    }
});
console.log(`Оценки в буквенном формате: ${letterGrades}`);

