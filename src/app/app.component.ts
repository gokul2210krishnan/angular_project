import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular webpage';
  name:string="Gokul";
  getName() : string{
    let a=12;
    return(this.name);
  }
}
