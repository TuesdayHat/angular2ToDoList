import { Component } from '@angular/core';

@Component({ //says "This Defines A New Component"
  selector: 'app-root',//corresponds to <app-root> in .html file
  template: `<h1>My First Angular 2 App</h1>` //insert this where selector shows up
})

export class AppComponent {
//logic for the component's behavior

}
