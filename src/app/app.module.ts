import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compoments/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { WorksCenzorComponent } from './pages/works/works-cenzor/works-cenzor.component';
import { WorksUserslistComponent } from './pages/works/works-userslist/works-userslist.component';
import { WorksTasklistComponent } from './pages/works/works-tasklist/works-tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorksComponent,
    WorksCenzorComponent,
    WorksUserslistComponent,
    WorksTasklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
