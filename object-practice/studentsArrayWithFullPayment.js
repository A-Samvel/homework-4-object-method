const payments = [
  {
    studentId: 1,
    studentName: "John Doe",
    payedAmount: 1600,
    year: 2020,
  },

  {
    studentId: 1,
    studentName: "John Doe",
    payedAmount: 1500,
    year: 2021,
  },

  {
    studentId: 1,
    studentName: "John Doe",
    payedAmount: 1400,
    year: 2022,
  },

  {
    studentId: 1,
    studentName: "John Doe",
    payedAmount: 1300,
    year: 2023,
  },

  {
    studentId: 2,
    studentName: "Lu Kang",
    payedAmount: 1500,
    year: 2020,
  },

  {
    studentId: 2,
    studentName: "Lu Kang",
    payedAmount: 1400,
    year: 2021,
  },

  {
    studentId: 2,
    studentName: "Lu Kang",
    payedAmount: 1300,
    year: 2023,
  },

  {
    studentId: 2,
    studentName: "Lu Kang",
    payedAmount: 1200,
    year: 2023,
  },
];

function sortByStudents(arr = []) {
  const sortByStudents = {};

  arr.forEach((obj) => {
    const { studentId, studentName, payedAmount, year } = obj;
    if (sortByStudents.hasOwnProperty(studentId)) {
      sortByStudents[studentId]["payedAmount"].push(payedAmount);
    } else {
      sortByStudents[studentId] = {
        studentName: studentName,
        payedAmount: [payedAmount],
        year: year,
      };
    }
  });

  return sortByStudents;
}

function studentsArrayWithFullPayment(arr = []) {
  const obj = sortByStudents(arr);
  const studentsArrayWithFullPayment = [];
  for (const student in obj) {
    const { payedAmount } = obj[student];
    const fullPayment = payedAmount.reduce(
      (acc, curentValue) => acc + curentValue,
      0
    );
    studentsArrayWithFullPayment.push({
      studentId: Number(student),
      studentName: obj[student]["studentName"],
      year: obj[student]["year"],
      fullPayment: fullPayment,
    });
  }
  return studentsArrayWithFullPayment;
}

console.log(studentsArrayWithFullPayment(payments))