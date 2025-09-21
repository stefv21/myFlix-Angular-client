import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

/**
 * Welcome page component - landing page of the application
 * Provides options for user login and registration
 */
@Component({
  selector: 'app-welcome-page',
  imports: [MatButtonModule, RouterModule],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.css'
})
export class WelcomePageComponent implements OnInit {
  /**
   * Constructor - Injects dialog service
   * @param dialog - Material Dialog service for opening modals
   */
  constructor(public dialog: MatDialog) { }
  
  /**
   * Angular lifecycle hook - initializes component
   */
  ngOnInit(): void {
  }
  
  /**
   * Opens user registration dialog
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }
  
  /**
   * Opens user login dialog
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '280px'
    });
  }
}
