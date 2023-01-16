import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jayride-test';
  constructor(private router: Router){

  }
  goTo(page:string){
    this.router.navigateByUrl(page);
  }
}
