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

//creating multiple schools using a constructor

function School(name, location, studentsCount, schoolType) {
    this.name = name;
    this.location = location;
    this.studentsCount = studentsCount;
    this.schoolType = schoolType;
    
    // Method to introduce the school
    this.introduce = function() {
      return `Welcome to ${this.name}, located in ${this.location}. We are a ${this.schoolType} with ${this.studentsCount} students.`;
    };
  }
  
  // Creating two new school objects
  const school1 = new School("St Lawrence", "Wakiso", 1200, "high school");
  const school2 = new School("Riverstone Academy", "Mukono", 800, "primary school");
  
  // Introducing the schools
  console.log(school1.introduce());
  console.log(school2.introduce());
  
//school introduction
function introduceSchool() {
    return `${this.name}, ${this.location}, ${this.studentcount}`;

};
console.log(school.introduceSchool());


  // Destructuring the school object
  const { name, location, studentsCount } = school;
  
  // Logging the destructured variables
  console.log(name);           
  console.log(location);       
  console.log(studentsCount);  
  
// looping through all the properties
for (let key in school) {
    console.log(`${key}: ${school[key]}`)
}

//Accessing data using dot notation

console.log('School Name:', school.name);
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