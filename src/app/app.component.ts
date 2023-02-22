import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'HelloWorld';
  user = '@gitperalta';

  // This function works when the child send information
  receiveMessage(event: string): void {
    alert(event);
  }
}
