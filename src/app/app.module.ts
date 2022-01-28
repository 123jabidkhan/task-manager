import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// external modules
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';
import { LoginComponent } from './auth/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { AgmCoreModule } from '@agm/core';
// mat modules
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AlertDirective } from './alert.directive';
import {MatListModule} from '@angular/material/list';
import {MatTooltipModule} from '@angular/material/tooltip';

// import {MatToolbarModule} from '@angular/material/toolbar';

// import {MatMenuModule} from '@angular/material/menu';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AlertDirective,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    AdminModule,
    EmployeeModule,

    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCXdR_vFNuXDbP1Cy-Ao3NSy0kGXWCUu5M'
    }),

    // mat modules
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatTooltipModule,
    MatListModule,
    MatCardModule,
    // MatToolbarModule,
    // MatMenuModule,
    // MatExpansionModule,
    // MatTooltipModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
