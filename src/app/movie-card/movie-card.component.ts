import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { MovieInfoDialogComponent } from '../movie-info-dialog/movie-info-dialog.component';

/**
 * Component for displaying movie cards with movie information
 * Allows users to view movie details, add to favorites, and see genre/director info
 */
@Component({
  selector: 'app-movie-card',
  imports: [
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements OnInit {
  /** Array of movies to display */
  movies: any[] = [];
  
  /**
   * Constructor - Injects required services
   * @param fetchApiData - Service for API calls
   * @param dialog - Material Dialog service for modals
   * @param snackBar - Material SnackBar service for notifications
   */
  constructor(
    public fetchApiData: UserRegistrationService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  /**
   * Angular lifecycle hook - initializes component
   */
  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Retrieves movies data (currently using mock data)
   * TODO: Replace with actual API call when backend is ready
   */
  getMovies(): void {
    // Temporary mock data for testing
    this.movies = [
      { 
        Title: 'The Matrix', 
        ImagePath: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        Description: 'A computer hacker learns about the true nature of reality.',
        Genre: { Name: 'Sci-Fi', Description: 'Science fiction movies explore futuristic concepts.' },
        Director: { Name: 'The Wachowskis', Bio: 'American film directors known for The Matrix series.' }
      },
      { 
        Title: 'Inception', 
        ImagePath: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
        Description: 'A thief who steals corporate secrets through dream-sharing technology.',
        Genre: { Name: 'Thriller', Description: 'Thriller movies are designed to hold interest and suspense.' },
        Director: { Name: 'Christopher Nolan', Bio: 'British-American filmmaker known for complex narratives.' }
      },
      { 
        Title: 'Interstellar', 
        ImagePath: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
        Description: 'A team of explorers travel through a wormhole in space.',
        Genre: { Name: 'Drama', Description: 'Drama movies focus on realistic characters and emotional themes.' },
        Director: { Name: 'Christopher Nolan', Bio: 'British-American filmmaker known for complex narratives.' }
      }
    ];
    
    // Uncomment this when your API is working:
    // this.fetchApiData.getAllMovies().subscribe((resp: any) => {
    //     this.movies = resp;
    //     console.log(this.movies);
    //     return this.movies;
    //   });
  }

  /**
   * Opens dialog displaying genre information
   * @param genre - Genre object containing name and description
   */
  openGenreDialog(genre: any): void {
    this.dialog.open(MovieInfoDialogComponent, {
      data: {
        title: genre.Name,
        content: genre.Description
      },
      width: '400px'
    });
  }

  /**
   * Opens dialog displaying director information
   * @param director - Director object containing name and bio
   */
  openDirectorDialog(director: any): void {
    this.dialog.open(MovieInfoDialogComponent, {
      data: {
        title: director.Name,
        content: director.Bio
      },
      width: '400px'
    });
  }

  /**
   * Opens dialog displaying movie synopsis
   * @param movie - Movie object containing title and description
   */
  openSynopsisDialog(movie: any): void {
    this.dialog.open(MovieInfoDialogComponent, {
      data: {
        title: movie.Title,
        content: movie.Description
      },
      width: '400px'
    });
  }

  /**
   * Adds movie to user's favorites list
   * @param movie - Movie object to add to favorites
   */
  addToFavorites(movie: any): void {
    this.snackBar.open(`${movie.Title} added to favorites!`, 'OK', {
      duration: 2000
    });
  }
}
