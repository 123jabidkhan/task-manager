import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  lat:number = 14.043660;
  lng:number = 77.509529;
  constructor() { }

  ngOnInit(): void {
  }

  onMapClick(event:any){
    this.lat=24.043660;
    this.lng=76.043660;

    console.log(event.coord.lat);
    console.log(event.coord.lng);

  }

}
