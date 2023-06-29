import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../browser/Student';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  @Output() dispatch=new EventEmitter();
  filter: Student={id: 0, fName: "James", lName: "", mark: 19, cin: "Y28929", searchTerm: ""};
  onInputChange(event: Event){
    const searchTerm= (event.target as HTMLInputElement).value;
    this.filter.searchTerm=searchTerm;
    this.dispatch.emit(this.filter);
  }
}
