import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputtext : number
  Number : number


  change(event)
   {this.inputtext = event.target.value
  
  }

  generateNum(){
    if(this.inputtext%2===0){
     this.Number= this.inputtext*this.inputtext-1
    }else{
     this.Number = this.inputtext*this.inputtext+1
    }
  }
}
