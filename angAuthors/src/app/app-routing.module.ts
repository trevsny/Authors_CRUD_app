import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { ChildComponent } from './child/child.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'new', component: NewComponent, children: [
    { path: 'daughter',component:ChildComponent}

  ]},
  { path: 'edit/:id', component: EditComponent}, 
  { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
