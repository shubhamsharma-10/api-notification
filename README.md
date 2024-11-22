# User Notification Preferences API

A NestJS-based API for managing user notification preferences and sending notifications.

## Features

- CRUD operations for user preferences
- Notification sending simulation
- Request validation
- OpenAPI/Swagger documentation
- MongoDB integration
- Unit tests

## Setup

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Set up environment variables:
Create a .env file with:
\`\`\`
MONGODB_URI=mongodb://localhost/notifications
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Access the Swagger documentation at http://localhost:3000/api

## API Endpoints

### User Preferences
- POST /api/preferences - Create user preferences
- GET /api/preferences/:userId - Get user preferences
- PATCH /api/preferences/:userId - Update user preferences
- DELETE /api/preferences/:userId - Delete user preferences

### Testing

Run tests:
\`\`\`bash
npm test
\`\`\`

## Deployment

This API can be deployed to Vercel or AWS Lambda. Configuration files are included for serverless deployment.