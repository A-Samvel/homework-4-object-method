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

function sortByCourses(arr = []) {
  const sortByCourses = {};

  arr.forEach((obj) => {
    const { courseId, courseName, score } = obj;
    if (sortByCourses.hasOwnProperty(courseId)) {
      sortByCourses[courseId]["score"].push(score);
    } else {
      sortByCourses[courseId] = { courseName: courseName, score: [score] };
    }
  });

  return sortByCourses;
}

function arrayOfCourses(arr = []) {
  const arrayOfCourses = [];
  const sortedArr = sortByCourses(arr);

  for (const course in sortedArr) {
    const { score } = sortedArr[course];
    const res = score.reduce((acc, curentValue) => acc + curentValue);
    arrayOfCourses.push({
      courseId: Number(course),
      courseName: sortedArr[course]["courseName"],
      scoreAverge: Math.round(res / score.length),
    });
  }

  return arrayOfCourses;
}

console.log(arrayOfCourses(evaluations));