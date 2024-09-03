const evaluations = [
  {
    studentId: 1,
    studentName: "John Doe",
    courseId: 1,
    courseName: "JS Bootcamp",
    score: 70,
  },

  {
    studentId: 1,
    studentName: "John Doe",
    courseId: 2,
    courseName: "JS Level 0",
    score: 60,
  },

  {
    studentId: 1,
    studentName: "John Doe",
    courseId: 3,
    courseName: "JS Level 1",
    score: 50,
  },

  {
    studentId: 2,
    studentName: "Tom Colins",
    courseId: 1,
    courseName: "JS Bootcamp",
    score: 60,
  },

  {
    studentId: 2,
    studentName: "Tom Colins",
    courseId: 2,
    courseName: "JS Level 0",
    score: 50,
  },

  {
    studentId: 2,
    studentName: "Tom Colins",
    courseId: 3,
    courseName: "JS Level 1",
    score: 40,
  },

  {
    studentId: 3,
    studentName: "Sarah Conor",
    courseId: 1,
    courseName: "JS Bootcamp",
    score: 45,
  },

  {
    studentId: 3,
    studentName: "Sarah Conor",
    courseId: 2,
    courseName: "JS Level 0",
    score: 35,
  },

  {
    studentId: 3,
    studentName: "Sarah Conor",
    courseId: 3,
    courseName: "JS Level 1",
    score: 25,
  },
];

function sortByStudentID(arr = []) {
  const sortByStudentID = {};

  arr.forEach((obj) => {
    const { studentId, studentName, score } = obj;
    if (sortByStudentID.hasOwnProperty(studentId)) {
      sortByStudentID[studentId]["score"] += score;
      sortByStudentID[studentId]["count"]++;
    } else {
      sortByStudentID[studentId] = {
        studentName: studentName,
        score: score,
        count: 1,
      };
    }
  });

  return sortByStudentID;
}

function scoreAverageArray(arr = [], average = 40) {
  const arrayOfStudents = [];
  const sortedArr = sortByStudentID(arr);

  for (const person in sortedArr) {
    const { score, count } = sortedArr[person];
    if (score / count < average) {
      arrayOfStudents.push({
        studentId: person,
        studentName: sortedArr[person]["studentName"],
        scoreAverge: score / count,
      });
    }
  }

  return arrayOfStudents;
}

console.log(scoreAverageArray(evaluations));
