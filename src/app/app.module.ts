import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { UserspravkaComponent } from './components/userspravka/userspravka.component';

const appRoutes: Routes = [
{path: '', component:UserComponent},
{path: 'about', component:UserhomeComponent},
{path: 'spravka', component:UserspravkaComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserhomeComponent,
    UserspravkaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
