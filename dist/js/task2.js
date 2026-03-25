
let employees = [
    {
        "surname": 'Иванов', //Фамилия
        "name": 'Иван', //Имя
        "patronymic": 'Иванович', //Отчество 
        "birthday": '1987-11-30', //Дата рождения в формате ГГГГ-ММ-ДД
        "experience": 5, //Стаж работы
        "salary": 48200, //Зарплата гросс в месяц
        "salary13": 3000, //Годовая премия
        "gender": 'm', //Премия
        "vacation": 0, //Месяц отпуска
    },
    {
        "surname": 'Петров', 
        "name": 'Петр', 
        "patronymic": 'Петрович', 
        "birthday": '2001-01-01',
        "experience": 0,
        "salary": 27600,
        "salary13": 1000,
        "gender": 'm',
        "vacation": 8,
    },
    {
        "surname": 'Капустина', 
        "name": 'Ирина', 
        "patronymic": 'Николаевна', 
        "birthday": '1992-02-02',
        "experience": 4,
        "salary": 36000,
        "salary13": 4000,
        "gender": 'f',
        "vacation": 3,
    },
    {
        "surname": 'Билл', 
        "name": 'Гейтс', 
        "patronymic": '', 
        "birthday": '1955-10-28',
        "experience": 1,
        "salary": 16900,
        "salary13": 100,
        "gender": 'm',
        "vacation": 11,
    },
    {
        "surname": 'Ложкина', 
        "name": 'Галина', 
        "patronymic": 'Ильинична', 
        "birthday": '2002-01-13',
        "experience": 1,
        "salary": 80000,
        "salary13": 100000,
        "gender": 'f',
        "vacation": 6,
    },
    {
        "surname": 'Матрос', 
        "name": 'Капитолия', 
        "patronymic": 'Владовна', 
        "birthday": '1975-04-20',
        "experience": 20,
        "salary": 90000,
        "salary13": 4000,
        "gender": 'f',
        "vacation": 7,
    },
    {
        "surname": 'Елисейская', 
        "name": 'Италия', 
        "patronymic": 'Франсовна', 
        "birthday": '1999-08-12',
        "experience": 3,
        "salary": 36700,
        "salary13": 4000,
        "gender": 'f',
        "vacation": 4,
    },
    {
        "surname": 'Строгая', 
        "name": 'Лада', 
        "patronymic": '', 
        "birthday": '1990-08-15',
        "experience": 7,
        "salary": 69000,
        "salary13": 3600,
        "gender": 'f',
        "vacation": 9,
    },
    {
        "surname": 'Император', 
        "name": 'Павел', 
        "patronymic": 'Григорьевич', 
        "birthday": '1970-12-19',
        "experience": 7,
        "salary": 28999,
        "salary13": 3900,
        "gender": 'm',
        "vacation": 1,
    },
    {
        "surname": 'Ватрушкин', 
        "name": 'Петр', 
        "patronymic": 'Семенович', 
        "birthday": '2000-05-13',
        "experience": 1,
        "salary": 200000,
        "salary13": 0,
        "gender": 'm',
        "vacation": 5,
    },
    ];

    
function Employee(data) {
    this.surname = data.surname;
    this.name = data.surname;
    this.patronymic = data.patronymic;
    this.birthday = data.birthday;
    this.experience = data.experience;
    this.salary = data.salary;
    this.salary13 = data.salary13;
    this.gender = data.gender;
    this.vacation = data.vacation;
}

Employee.prototype.calculateNetSalary = function () {
    return +(this.salary * 1.15 * .87);
}

for (let i = 0; i < employees.length; i++) {
    const employee = new Employee(employees[i]);
    console.log(employee)
}
