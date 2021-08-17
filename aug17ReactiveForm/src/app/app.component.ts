import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aug17ReactiveForm';

  usersList:any=[];

  onAdd(data:any)
  {
    this.usersList.push({
      type:'user',
      firstName:data.firstName,
      lastName:data.lastName,
      phone:data.phoneNumber,
      email:data.emailId,
      Address:data.Address,
      Country:data.Country,
      City:data.City
    })

    console.log(this.usersList.Address)

  }
}
