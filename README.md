# MyFlix Angular Client

A movie database application built with Angular that allows users to browse movies, view details about directors and genres, and manage their favorite movies list.

## Features

- User registration and authentication
- Browse movie collection with detailed information
- View movie synopses, director bios, and genre descriptions
- Add/remove movies from favorites
- User profile management
- Responsive Material Design UI

## Technologies Used

- Angular 19.2.0
- Angular Material
- TypeScript
- RxJS
- HTML5 & CSS3

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd myFlix-Angular-client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Navigate to `http://localhost:4200/`

## API Integration

This application connects to the myFlix REST API hosted at:
`https://aqueous-mountain-08725.herokuapp.com/`

## Documentation

Generate TypeDoc documentation:
```bash
npm run docs
```
View documentation at `./docs/index.html`

## Development

### Code Scaffolding
```bash
ng generate component component-name
```

### Building
```bash
ng build
```

### Testing
```bash
ng test
```

## Project Structure

```
src/app/
├── fetch-api-data.service.ts    # API service
├── movie-card/                  # Movie display component
├── movie-info-dialog/           # Movie details modal
├── user-login-form/             # Login component
├── user-registration-form/      # Registration component
├── user-profile/                # Profile management
└── welcome-page/                # Landing page
```

Built with [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.
