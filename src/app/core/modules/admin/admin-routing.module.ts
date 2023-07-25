import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDasnboardComponent } from './components/admin-dasnboard/admin-dasnboard.component';

const routes: Routes = [{path: '', component: AdminDasnboardComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
