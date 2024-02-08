export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((students) => students.location === city)
    .map((students) => {
      const getID = newGrades.find((grade) => grade.studentId === students.id);
      const addGrade = getID ? getID.grade : 'N/A';
      return { ...students, grade: addGrade };
    });
}
