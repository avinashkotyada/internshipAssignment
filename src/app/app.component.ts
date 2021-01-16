import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  num=0
  Numbers = [0]
  phoneNumber = [null]



  Add(){
    this.num = this.num+1
    this.Numbers.push(this.num)
    this.phoneNumber.push( null)
  }

  submit(){
    console.log(this.phoneNumber)
  }


}
