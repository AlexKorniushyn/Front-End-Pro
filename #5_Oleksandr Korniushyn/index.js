const students = [
  {
    id: 10,
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    id: 11,
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    id: 12,
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    id: 13,
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];

console.log(averageStudentMark(10, students));
console.log(averageGroupMark(students));

function averageStudentMark(studentId, students) {
  const student = students.find((student) => student.id === studentId);
  const sumStudentMark = student.marks.reduce((acc, mark) => acc + mark);

  return sumStudentMark / student.marks.length;
}

function averageGroupMark(students) {
  const arrayOfAllMarksAllStudents = students.reduce(
    (acc, student) => acc.concat(student.marks),
    []
  );
  const sumStudentsMarks = arrayOfAllMarksAllStudents.reduce((acc, marks) => {
    return acc + marks;
  }, 0);

  return sumStudentsMarks / arrayOfAllMarksAllStudents.length;
}
