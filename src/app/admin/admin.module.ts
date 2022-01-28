import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HeaderComponent } from './home/header/header.component';
import { AboutComponent } from './home/about/about.component';
import { ProjectsComponent } from './home/projects/projects.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


// mat modules
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { UpdateProjectComponent } from './home/update-project/update-project.component';
import { ProjectComponent } from './home/project/project.component';
import { CountriesComponent } from './home/countries/countries.component';
import { ClientLocationsComponent } from './home/client-locations/client-locations.component';
import { TaskStatusComponent } from './home/task-status/task-status.component';
import { TaskPrioritiesComponent } from './home/task-priorities/task-priorities.component';
import { MastersComponent } from './home/masters/masters.component';
import {MatTabsModule} from '@angular/material/tabs';

// ComponentLoaderDirective
import { ComponentLoaderDirective } from './component-loader.directive';
@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    AboutComponent,
    ProjectsComponent, 
  UpdateProjectComponent,ProjectComponent, CountriesComponent, ClientLocationsComponent, TaskStatusComponent, TaskPrioritiesComponent, MastersComponent, ComponentLoaderDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // mat modules
    MatTabsModule,  
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatTooltipModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports: [
    DashboardComponent,HeaderComponent,AboutComponent,ProjectsComponent,UpdateProjectComponent
  ],
  entryComponents:[
    CountriesComponent,ClientLocationsComponent,TaskStatusComponent,TaskPrioritiesComponent
  ]
})
export class AdminModule { }
