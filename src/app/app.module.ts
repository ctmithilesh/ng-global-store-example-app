import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideStore } from '@ngrx/store';
import { counterReducer } from 'src/reducers/counter/counter.reducer';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavigationModule } from './navigation/navigation.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    NavigationModule,
    RouterModule
  ],
  providers: [
    provideStore({
      count: counterReducer
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
