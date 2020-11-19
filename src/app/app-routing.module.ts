import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { WorksCenzorComponent } from './pages/works/works-cenzor/works-cenzor.component';
import { WorksTasklistComponent } from './pages/works/works-tasklist/works-tasklist.component';
import { WorksUserslistComponent } from './pages/works/works-userslist/works-userslist.component';
import { WorksComponent } from './pages/works/works.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'works', component: WorksComponent, children: [
    {path: 'cenzor', component:WorksCenzorComponent},
    {path: 'userslist', component:WorksUserslistComponent},
    {path: 'tasklist', component:WorksTasklistComponent}
  ] },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
