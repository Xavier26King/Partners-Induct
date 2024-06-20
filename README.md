# Partners-Induct

This project consists of a basic web application that includes a front-end HTML interface and a back-end API for managing partner data. The front-end files are `index.html` and `partners.html`, while the back-end files are housed in the `PartnersAPI` folder. To run this project, you need to have Node.js and npm installed on your system.

## Project Structure

```
project-root/
├── index.html
├── partners.html
├── PartnersAPI/
│   ├── app.js
│   ├── router.js
│   ├── controller.js
│   ├── Partners.js
│   ├── .env
│   └── uploads/
```

### Files and Folders

- **index.html**: The main landing page of the web application.
- **partners.html**: A page dedicated to displaying and interacting with partners' data.
- **PartnersAPI/**: Contains all the back-end code for the API.
  - **app.js**: The entry point of the API server.
  - **router.js**: Defines the routes for the API.
  - **controller.js**: Contains the logic for handling API requests.
  - **Partners.js**: The model for partner data.
  - **.env**: Environment variables file (must be created by the user).
  - **uploads/**: A folder required for file uploads (ensure this folder exists).

## Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node package manager)

## Setup Instructions

1. **Clone the repository** (if using a version control system like Git):

   ```bash
   git clone <repository-url>
   cd project-root
   ```

2. **Install the required libraries**:

   Open a terminal in VS Code (or any terminal) and run:

   ```bash
   npm install express mongoose multer cors dotenv
   ```

3. **Navigate to the `PartnersAPI` directory**:

   ```bash
   cd PartnersAPI
   ```

4. **Set up environment variables**:

   Create a `.env` file in the `PartnersAPI` directory and add the following variables:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=4000
   ```

   Replace `your_mongodb_connection_string` with your actual MongoDB URI.

5. **Ensure the `uploads` folder exists**:

   If the `uploads` folder does not exist, create it within the `PartnersAPI` directory:

   ```bash
   mkdir uploads
   ```

6. **Start the API server**:

   Use `nodemon` to start the server (this will automatically restart the server on any changes):

   ```bash
   nodemon app.js
   ```

7. **Run the front-end**:

   Open `index.html` or `partners.html` in your browser. If you have a live server extension in VS Code, you can right-click on `partners.html` and select "Open with Live Server" to go live.

## Changes in `app.js`

The `app.js` file has been updated to use environment variables for the MongoDB connection string and the server port. Here is the updated content of `app.js`:

```javascript
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import Router from './routes.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => app.listen(port))
  .then(() => console.log(`Connected to the database and server is running on port ${port}`))
  .catch((err) => console.log(err));

app.use('/api/partners', Router);
```

### Common Issues

1. **Missing `uploads` folder**: Ensure the `uploads` folder is present in the `PartnersAPI` directory as it is required for file uploads.
2. **Port Conflicts**: Make sure the port defined in the `.env` file is not being used by another application.
3. **Database Connection**: Verify your MongoDB instance is running and the connection string in the `.env` file is correct.

## Contributions

Feel free to fork this project, create a new branch, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

---

Happy coding! If you encounter any issues or have any questions, please open an issue or contact the project maintainer.
