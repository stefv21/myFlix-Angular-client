import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * Component for user login form
 * Displays a dialog with form fields for user authentication
 */
@Component({
  selector: 'app-user-login-form',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './user-login-form.component.html',
  styleUrl: './user-login-form.component.css'
})
export class UserLoginFormComponent implements OnInit {

  /** User login credentials */
  @Input() userData = { Username: '', Password: '' };

  /**
   * Constructor - Injects required services
   * @param fetchApiData - Service for API calls
   * @param dialogRef - Reference to the dialog
   * @param snackBar - Service for showing notifications
   * @param router - Angular router for navigation
   */
  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router) { }

  /**
   * Angular lifecycle hook - initializes component
   */
  ngOnInit(): void {
  }

  /**
   * Authenticates user with provided credentials
   * Stores user data and token in localStorage on success
   * Navigates to movies page after successful login
   */
  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((result: any) => {
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem('token', result.token);
      this.dialogRef.close();
      this.snackBar.open('User logged in successfully!', 'OK', {
        duration: 2000
      });
      this.router.navigate(['movies']);
    }, (result: any) => {
      this.snackBar.open('Login failed', 'OK', {
        duration: 2000
      });
    });
  }

}
