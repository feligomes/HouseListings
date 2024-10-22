# HouseListing

HouseListing is a small React-based web application working as a showcase of technologies. It displays a listing of saved house listings and allows users to view the available dates for each one.

## Project Description

This project demonstrates a modern React application with features such as listing display, detailed views, error handling, and integration with a mock API. It's designed to showcase best practices in React development, state management, and UI design.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/feligomes/HouseListings.git
   cd HouseListing
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Application

To start the development server:

```
npm run dev
```

## API Information

This project uses a mock API that intentionally fails at times to demonstrate error handling. The API provides limited data, which is supplemented with randomly generated information for a more complete user experience.

## Project Structure

```
src/
├── components/
├── pages/
├── App.jsx
└── main.jsx
```

## Important considerations

- The API fails on purpose to demonstrate the error handling functionality.
- Mocked data and random data are used to populate the page due to limited data from the API.
- MUI is used to improve the look and feel of the project, though it can be removed if needed.
- This project was completed in approximately 4 hours.
- The available dates feature is currently informative only, as there's no endpoint to reserve dates.
- Random data usage may cause images and details to change on reload, which wouldn't occur in a real application with complete endpoints.

## Features

- Landing page with a list of house listings
- Detailed view for individual house listings
- Responsive design for various screen sizes
- Error handling with refresh button
- Display of available dates for each listing

## Technologies Used

- React
- Vite
- React Router
- CSS Modules
- MUI (Material-UI)

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or later)
- npm

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
