var students = [
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
];
// Name: Remy, Cohort: Jan
// Name: Genevieve, Cohort: March
// Name: Chuck, Cohort: Jan
// Name: Osmund, Cohort: June
// Name: Nikki, Cohort: June
// Name: Boris, Cohort: June

function print_student(student){
    str = "";
    for (var i=0;i<student.length;i++){
        str+="Name: "+student[i].name + " , Cohort: "+ student[i].chort +"\n";
    }
    return str;

}
console.log(print_student(students));

var users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

// EMPLOYEES
// 1 - JONES, MIGUEL - 11
// 2 - BERTSON, ERNIE - 12
// 3 - LU, NORA - 6
// 4 - BARKYOUMB, SALLY - 14
// MANAGERS
// 1 - CHAMBERS, LILLIAN - 15
// 2 - POE, GORDON - 9

function print_users(users){
    str = "";
    str += "EMPLOYEES" + "\n";
    fullname = "";
    for(var i = 0;i<users.employees.length;i++){
        str +=String(i)+" - "+users.employees[i].first_name+", "+users.employees[i].last_name+" - ";
        fullname = users.employees[i].first_name + users.employees[i].last_name;
        str += String(fullname.length)+"\n";
    }
    str+="NANAGERS"+"\n";
    for (var i = 0; i < users.managers.length; i++) {
        str += String(i) + " - " + users.managers[i].first_name + ", " + users.managers[i].last_name + " - ";
        fullname = users.managers[i].first_name + users.managers[i].last_name;
        str += String(fullname.length) + "\n";
    }
    return str;
}
console.log(print_users(users));