import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  studentDetails = [];

  onPush(newDetails : {name: string,status: string}){
    this.studentDetails.push(newDetails)
    console.log("from push method")
  }

  onChange(updatedInfo:{id: number, status: string}){
    this.studentDetails[updatedInfo.id].status = updatedInfo.status;
  }
}
