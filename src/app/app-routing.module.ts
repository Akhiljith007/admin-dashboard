import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { LeadsComponent } from './leads/leads.component';

const routes: Routes = [
  {
    path:'dashboard',component:DashboardComponent
  },

  // '' empty string kodukumpo 4200 local host vru pakshe enikku ivide dash board aanu aadhyam vrnde 
  // means dash board user cheiyunna pole dash board maari kondirikkan aanu
  // itu settakittu app html il router selector tag poyi kodukkanam
  {path:'',redirectTo:'dashboard',pathMatch:'full'},

  {path:'employees',component:EmployeesComponent},

  {path:'gallery',component:GalleryComponent},

  {path:'contacts',component:ContactComponent},

  {path:'leads',component:LeadsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
