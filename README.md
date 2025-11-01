# Notes App

A modern, full-stack note-taking application built with React and Node.js, featuring a clean UI and rate-limiting protection.

## Technology Stack

### Frontend
- React
- React Router for navigation
- Tailwind CSS for styling
- Axios for API requests
- React Hot Toast for notifications

### Backend
- Node.js with Express
- MongoDB for database
- Rate limiting middleware
- CORS protection
- Environment variable configuration

## Features

- Create, Read, Update, and Delete notes
- Responsive design that works on mobile and desktop
- Rate limiting protection against API abuse
- Clean and modern UI with a gradient background
- Real-time error handling and notifications
- Loading states and error boundaries

## Project Structure

### Frontend Structure
```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Main application pages
│   ├── lib/                # Utilities and configurations
│   ├── assets/            # Static assets
│   └── App.jsx            # Main application component
```

### Backend Structure
```
backend/
├── src/
│   ├── config/            # Database and other configurations
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Custom middleware (rate limiting, etc.)
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── server.js         # Main server file
```

## Key Components

1. **HomePage**: Main dashboard displaying all notes in a grid layout
2. **CreatePage**: Form for creating new notes
3. **NoteDetailPage**: Detailed view of individual notes
4. **Navbar**: Navigation component present across all pages
5. **NoteCard**: Card component for displaying individual notes
6. **RateLimitedUI**: Component shown when API rate limit is exceeded

## API Endpoints

- GET /api/notes - Retrieve all notes
- POST /api/notes - Create a new note
- GET /api/notes/:id - Get a specific note
- PUT /api/notes/:id - Update a note
- DELETE /api/notes/:id - Delete a note

## Security Features

- Rate limiting to prevent API abuse
- CORS protection in development
- Environment variable configuration
- Error handling middleware

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```
3. Set up environment variables
4. Run the development servers:
   ```bash
   # Run frontend
   cd frontend
   npm run dev

   # Run backend
   cd backend
   npm run dev
   ```

## Screenshots Guide

Key pages and features to screenshot:
1. Homepage with notes grid
2. Create note page
3. Note detail view
4. Rate limit warning (if triggered)
5. Mobile responsive view
6. Error states and loading states