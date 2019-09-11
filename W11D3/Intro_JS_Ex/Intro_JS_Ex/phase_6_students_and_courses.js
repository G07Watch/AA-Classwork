function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
};

Student.prototype.name = function() {
  return this.firstName.concat( " " ).concat(this.lastName);
};

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course)) {
    if (!this.hasConflict(course)){
      this.courses.push(course);
      course.students.push(this.name())
    }
  }
};

Student.prototype.hasConflict = function(course) {
    let errorOccurred = false;
    this.courses.forEach( currCourse =>{

     if (currCourse.conflictsWith(course)){
        throw new Error('Overlapping courses');
        // errorOccurred = true;
        console.log(`Unable to join ${course.name}, confliction with ${currCourse.name}`);
      }
        
    });

    return errorOccurred;
};  

Student.prototype.courseLoad = function(){
    let load = {};
    // key department, value # of credits

    this.courses.forEach( course=> {

        load[course.department] = load[course.department] + course.credits // finish one 
                          
    });
}


function Course(name, department, credits, days, timeBlock){
    this.name = name
    this.department = department
    this.credits = credits
    this.students = [];
    this.days = days;
    this.timeBlock = timeBlock;
}

Course.prototype.addStudent = function(student){
    if (student != null){
       student.enroll(this);
    }
}

Course.prototype.conflictsWith = function(course) {
    
    let conflicting = false;

    daysToCheck = course.days
    daysToCheck.forEach ( day => { 
        // console.log(`we are here `);
    this.days.forEach ( ourDay=>{
      // console.log(`we are here ${ourDay}=>${day}`);
        if ((ourDay === day) && (this.timeBlock===course.timeBlock)) { conflicting = true };
    });
    });

  return conflicting;
};


// TEST CASES 

let student1 = new Student("John", "Wayne");
let student2 = new Student("Mark", "Doe");
console.log(student1.name())
console.log(student2.name())

let ruby = new Course("RUBY", "CS", "5", Array.from("MTWHF"), 2);
let sql = new Course("SQL", "CSQ", "3", Array.from("MT"), 1);
let rails = new Course("RAILS", "CSR", "7", Array.from("WHF"), 2);

student1.enroll(ruby);
console.log(student1);
student1.enroll(rails);

console.log(ruby.conflictsWith(rails));
console.log(rails);
console.log(student1);

// console.log(ruby);