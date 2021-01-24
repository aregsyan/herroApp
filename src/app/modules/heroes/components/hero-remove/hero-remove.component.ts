import { Component } from '@angular/core';
const AngularExpressions = require("angular-expressions");

@Component({
  selector: 'app-hero-remove',
  templateUrl: './hero-remove.component.html'
})

export class HeroRemoveComponent {
  constructor() {
    
    var evaluateEXP = AngularExpressions.compile("2+2");

    if(evaluateEXP() == 4) {
      console.log("The result is 4");
  } else {
      console.log("The result is not 4")
  }
  }
}
