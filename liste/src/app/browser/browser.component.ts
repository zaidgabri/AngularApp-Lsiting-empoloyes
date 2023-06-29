import { Component, Input } from '@angular/core';
import { Student } from './Student';
@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})

export class BrowserComponent {
  @Input() filter: Student={
    id: 4,
    fName: "James",
    lName: "Taylor",
    cin: "BF63850",
    mark: 78,
    searchTerm: ""
  };
  students: Array<{id: number, fName: string, lName: string, cin: string, mark: number}> = [
    {
      id: 1,
      fName: "Emma",
      lName: "Brown",
      cin: "ZD17954",
      mark: 85
    },
    {
      id: 2,
      fName: "William",
      lName: "Wilson",
      cin: "VJ47596",
      mark: 73
    },
    {
      id: 3,
      fName: "Sophia",
      lName: "Davis",
      cin: "TI93017",
      mark: 91
    },
    {
      id: 4,
      fName: "James",
      lName: "Taylor",
      cin: "BF63850",
      mark: 78
    }
  ]

}
