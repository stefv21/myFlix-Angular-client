import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

/**
 * Component for user registration form
 * Displays a dialog with form fields for new user registration
 */
@Component({
  selector: 'app-user-registration-form',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './user-registration-form.component.html',
  styleUrl: './user-registration-form.component.css'
})
export class UserRegistrationFormComponent implements OnInit {

  /** User registration data object */
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**
   * Constructor - Injects required services
   * @param fetchApiData - Service for API calls
   * @param dialogRef - Reference to the dialog
   * @param snackBar - Service for showing notifications
   */
  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar) { }

  /**
   * Angular lifecycle hook - initializes component
   */
  ngOnInit(): void {
  }

  /**
   * Registers a new user with the provided form data
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result: any) => {
     this.dialogRef.close();
     this.snackBar.open('User registered successfully!', 'OK', {
        duration: 2000
     });
    }, (error: any) => {
      const errorMessage = error.error?.message || error.message || 'Registration failed. Please try again.';
      this.snackBar.open(errorMessage, 'OK', {
        duration: 3000
      });
    });
  }

}
