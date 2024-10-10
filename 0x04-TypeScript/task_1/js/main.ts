interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    // contract: boolean;
    [propName: string]: any; // Allows any additional attribute
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  //function to Add the possibility to add any attribute to the Object like contract(boolean) without specifying the name of the attribute
//   function changeContract(key: any, value: any){
//     teacher3[key] = value;

//   }

  console.log(teacher3);

  interface Directors extends Teacher {
    numberOfReports: number;
  }

  const director1: Directors = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    numberOfReports: 10,
  }

  console.log(director1);

  // Task 3
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
  };
  
  //task 4
  interface StudentConstructor {
    firstName: string;
    lastName: string;
  }
  
  interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;
  
    constructor({firstName, lastName}: StudentConstructor) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    workOnHomework(): string {
      return 'Currently working';
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  