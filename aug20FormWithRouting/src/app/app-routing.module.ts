import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttachmentsComponent } from './components/attachments/attachments.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { ProfessionalDetailsComponent } from './components/professional-details/professional-details.component';

const routes: Routes = [
  {
    path: 'personalDetails',
    component: PersonDetailsComponent
  },
  {
    path: 'professionalDetails',
    component: ProfessionalDetailsComponent
  },
  {
    path: 'attachments',
    component: AttachmentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PersonDetailsComponent, ProfessionalDetailsComponent, AttachmentsComponent]
