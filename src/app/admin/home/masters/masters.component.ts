import { Component, ComponentFactory, ComponentRef, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';
import { ComponentLoaderDirective } from '../../component-loader.directive';
import { ClientLocationsComponent } from '../client-locations/client-locations.component';
import { CountriesComponent } from '../countries/countries.component';
import { TaskPrioritiesComponent } from '../task-priorities/task-priorities.component';
import { TaskStatusComponent } from '../task-status/task-status.component';
@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {

  @ViewChildren(ComponentLoaderDirective) 
  componentLoaders!:QueryList<ComponentLoaderDirective>
  
  // @ViewChild("defaultTextBox_New") defaultTextBox_New:
  // ElementRef;
  // @ViewChild("defaultTextBox_Edit") defaultTextBox_Edit:
  // ElementRef;
  constructor(public componentFactoryResolver:ComponentFactoryResolver) { }

  masterMenuItems=[
    {itemName:'Countries',displayName:'Countries',component:CountriesComponent},
    {itemName:'ClientLocations',displayName:'ClientLocations',component:ClientLocationsComponent},
    {itemName:'TaskPriorities',displayName:'TaskPriorities',component:TaskPrioritiesComponent},
    {itemName:'TaskStatus',displayName:'TaskStatus',component:TaskStatusComponent}
  ]

  activeItem!:string;
  itemName!:any;
  displayName!:any;

  tabs:any=[];
  

  ngOnInit(): void {
    
  }

  menuItemClick(clickedMenuItem:any){
    this.activeItem = clickedMenuItem.itemName;

    let matchingTabs = this.tabs.filter((tab:any)=>{
      return tab.itemName == clickedMenuItem.itemName;
    })
    if(matchingTabs.length === 0){
          this.tabs.push(
            {itemName:clickedMenuItem.itemName,displayName:clickedMenuItem.displayName}
          )
    }
    
      // ...
      setTimeout(()=>{
        var componentLoadersArray=this.componentLoaders.toArray();
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(clickedMenuItem.component);

        var viewContainerRef=componentLoadersArray[this.tabs.length-1].viewContainerRef;
        // viewContainerRef.createComponent(componentFactory);

        var componentRef = viewContainerRef.createComponent(componentFactory)

        if(clickedMenuItem.component.name == 'CountriesComponent'){
          var componentInstance = componentRef.instance as CountriesComponent;
        };
        // console.log(componentLoadersArray);     
      },300);


     
    
  }

  onCloseClick(clickedTab:any){
    console.log(clickedTab);
    // clickedTab.viewContainerRef.remove();
    this.tabs.splice(this.tabs.indexOf(clickedTab),1);
    if(this.tabs.length>0){
      this.activeItem=this.tabs[0].tabName;
    }
  }

}
