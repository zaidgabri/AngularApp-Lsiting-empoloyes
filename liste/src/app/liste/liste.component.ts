import { Component ,OnInit  } from '@angular/core';
import { NgModule } from '@angular/core';



interface Student {
  id: string;
  name: string;
  gender: string;
  mark: number;
}

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})




  

export class ListeComponent  {
  students: Student[] = [
    { id: '1', name: 'John Doe', gender: 'Male', mark: 85 },
    { id: '2', name: 'Jane Smith', gender: 'Female', mark: 92 },
    { id: '3', name: 'Bob Johnson', gender: 'Male', mark: 78 },
    { id: '4', name: 'Alice Brown', gender: 'Female', mark: 90 }
  ];
  genderFilter: string = '';
  searchQuery: string = '';
  searchName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }
  deleteStudentt(index: number): void {
    this.students.splice(index, 1);
  }
/*
  deleteStudent(studentt: Student): void {
    const index = this.students.indexOf(studentt);
    if (index !== -1) {
      this.studentt.deleteStudentt(index);
    }
  }*/

  filterByGender(gender: string): void {
    this.genderFilter = gender;
  }

  filterByName(query: string): void {
    this.searchQuery = query;
  }

  get filteredStudents(): Student[] {
    if (this.searchName.trim() === '') {
      return this.students;
    } else {
      return this.students.filter((student) => {
        return student.name.toLowerCase().includes(this.searchName.toLowerCase());
      });
    }
    let filtered = this.students;

    if (this.genderFilter !== 'all') {
      filtered = filtered.filter(s => s.gender === this.genderFilter);
    }

    if (this.searchQuery) {
      filtered = filtered.filter(s => s.name.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }

    return filtered;
  }
  editStudent(student: Student): void {
    // TODO: Implement edit functionality
  }
 

  filteredList = this.students;

  chercher(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (!value) {
      this.filteredList = this.students;
    } else {
      this.filteredList = this.students.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
    }
  }
  

}
