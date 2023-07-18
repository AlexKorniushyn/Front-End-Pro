class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getAverageMark() {
    return this.getMarksSum() / this.marks.length;
  }

  getMarksSum() {
    return this.marks.reduce((accumulator, mark) => accumulator + mark, 0);
  }
}

class Group extends Student {
  #students = [];

  get students() {
    return this.#students;
  }

  addStudent(student) {
    if (this.isStudent(student)) {
      this.#students.push(student);
    }
  }

  isStudent(student) {
    return student instanceof Student;
  }

  getAverageMark() {
    return this.getAverageMarksSum() / this.#students.length;
  }

  getAverageMarksSum() {
    return this.#students.reduce(
      (accumulator, student) => accumulator + student.getAverageMark(),
      0
    );
  }
}
const group = new Group();

group.addStudent(new Student("John", [10, 8]));
group.addStudent(new Student("Alex", [10, 9]));
group.addStudent(new Student("Bob", [6, 10]));

console.log(group.students.length === 3);
group.addStudent({});
console.log(group.students.length === 3);
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3);
group.students = [new Student("Alex", [10, 10, 5, 10])];
console.log(group.students.length === 3);
