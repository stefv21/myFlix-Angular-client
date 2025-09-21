import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

/**
 * Dialog component for displaying movie information
 * Shows details like genre descriptions, director bios, or movie synopses
 */
@Component({
  selector: 'app-movie-info-dialog',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './movie-info-dialog.component.html',
  styleUrl: './movie-info-dialog.component.css'
})
export class MovieInfoDialogComponent {
  /**
   * Constructor - Injects dialog services and data
   * @param dialogRef - Reference to the dialog
   * @param data - Data passed to the dialog containing title and content
   */
  constructor(
    public dialogRef: MatDialogRef<MovieInfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string; content: string }
  ) {}

  /**
   * Closes the dialog
   */
  onClose(): void {
    this.dialogRef.close();
  }
}
