import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fab-test';

  FabOptions = {
    buttons: [
      {
        icon: 'timeline'
      },
      {
        icon: 'view_headline'
      },
      {
        icon: 'room'
      },
      {
        icon: 'lightbulb_outline'
      },
      {
        icon: 'lock'
      }
    ]
  };

  doAction(trigger) {
    console.log(trigger);
  }
}
