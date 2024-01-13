import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  developer:string = 'Jose Cortés';
  date:Date = new Date();
  currentYear = this.date.getFullYear();

}
