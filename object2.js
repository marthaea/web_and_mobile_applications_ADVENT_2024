let school = {
    name: 'St Lawrence Academy, Schools and Colleges',
    location: 'Wakiso District',
    studentcount: 25000,
    students: ['Katusiime Praise Martha', 'Nakalyowa Haddija', 'Nabbumba Cynthia', 'David Wilson', 'Sarah Johnson'],
    Campuses: ['St. Lawrence Paris Palais', 'London College of St Lawrence', 'The Academy of St Lawrence', 'Crown City', 'Creamland', 'Horizon'],
    Establishedyear: 1932,
    currentyear: 2032,
    calculateSchoolAge: function(currentyear) {
        return this.currentyear- Establishedyear;
    }
}

//Calculating the age of the school
let age = school.calculateSchoolAge(currentyear)


//Accessing the data

console.log('School Name:', school.name);
console.log('Location:', school.location);
console.log('Enrollment:', school.enrollment);
console.log('Students:', school.students);
console.log('Campuses:', school.Campuses);

//adding and modifying object properties
school.type = 'Secondary';

console.log('School Type:', school.type);

school.studentcount = 10000;

console.log('Updated Enrollment:', school.studentcount);