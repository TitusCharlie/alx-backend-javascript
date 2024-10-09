interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }

const student1: Student = {
    firstName: 'Titus',
    lastName: 'Charlie',
    age: 27,
    location: 'Nigeria'
};

const student2: Student = {
    firstName: 'Victory',
    lastName: 'Charlie',
    age: 17,
    location: 'Nigeria'
};

const studentsList: Student[] = [
    student1,
    student2
];