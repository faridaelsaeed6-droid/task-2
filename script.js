class Student {
  constructor(id, name, grades, attendance) {
    this.id = id;
    this.name = name;
    this.grades = grades;
    this.attendance = attendance;
  }

  getAverage() {
    const total = this.grades.reduce((acc, grade) => acc + grade, 0);
    return total / this.grades.length;
  }

  getGrade() {
    const avg = this.getAverage();

    if (avg >= 90) return "A";
    else if (avg >= 80) return "B";
    else if (avg >= 70) return "C";
    else if (avg >= 60) return "D";
    else if (avg >= 50) return "E";
    else return "F";
  }

  getResult() {
    if (this.getAverage() >= 50 && this.attendance >= 75) {
      return "ناجح";
    } else {
      return "يحتاج مراجعة";
    }
  }
}

const studentsList = [
  new Student(1, "فريدة", [85, 90, 88], 95),
  new Student(2, "رحمه", [70, 65, 72], 80),
  new Student(3, "غاده", [45, 42, 48], 88),
  new Student(4, "بسمله", [40, 44, 41], 90)
];

console.log("===== تقرير جميع الطلاب =====");

studentsList.forEach(s => {
  console.log(
    `${s.name} | المتوسط: ${s.getAverage().toFixed(2)} | التقدير: ${s.getGrade()} | النتيجة: ${s.getResult()}`
  );
});

const needSupport = studentsList.filter(s => {
  const avg = s.getAverage();
  return avg >= 40 && avg <= 49;
});

console.log("\n===== الطلاب المستحقون للرأفة =====");
console.log(needSupport.map(s => s.name));

const afterSupport = needSupport.map(s => {
  const newGrades = s.grades.map(g => g + 5);
  return new Student(s.id, s.name, newGrades, s.attendance);
});

const totalNewAvgs = afterSupport.reduce(
  (acc, s) => acc + s.getAverage(), 0
);

console.log("\n===== النتائج بعد الرأفة =====");

afterSupport.forEach(s => {
  console.log(
    `${s.name} | المتوسط الجديد: ${s.getAverage().toFixed(2)} | النتيجة: ${s.getResult()}`
  );
});

let overallAverage;

if (afterSupport.length === 0) {
  overallAverage = 0;
  console.log("لا يوجد طلاب متعثرون - درع حماية");
} else {
  overallAverage = totalNewAvgs / afterSupport.length;
}

console.log(
  "\nالمتوسط العام بعد الرأفة: " + overallAverage.toFixed(2)
);