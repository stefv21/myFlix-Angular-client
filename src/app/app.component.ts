import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/**
 * Root component of the myFlix Angular application
 * Serves as the main entry point and container for all other components
 */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /** Application title displayed in the UI */
  title = 'myFlix-Angular-client';
}
