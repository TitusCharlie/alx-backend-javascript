
  //Task 5
  interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }
  
  function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  //Task 6
  function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }

  function executeWork(employee: Teacher | Director): void {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  }

// task_7/main.ts

// Create the Subjects literal type
type Subjects = 'Math' | 'History';

// Define the teachClass function
const teachClass = (todayClass: Subjects): string => {
  return todayClass === 'Math' ? 'Teaching Math' : 'Teaching History';
};

console.log(teachClass('Math'));  // Output: Teaching Math

// task_8

declare module 'some-library' {
  export function someFunction(): string;
}

// task_9/main.ts

namespace Subjects {
  export class Cpp {
    getRequirements(): string {
      return 'Here is the list of requirements for C++';
    }

    getAvailableTeacher(): string {
      return 'No available teacher';
    }
  }

  export class Java {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      return 'Available Teacher: John Doe';
    }
  }

  export class React {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      return 'Available Teacher: Jane Smith';
    }
  }
}

const cpp = new Subjects.Cpp();
console.log(cpp.getRequirements());  // Output: Here is the list of requirements for C++

