# HouseListing

HouseListing is a React-based web application for browsing and viewing house listings. This project demonstrates the use of modern web technologies and best practices in front-end development.

## Installation

1. Clone the repository:   ```
   git clone https://github.com/your-username/HouseListing.git
   cd HouseListing   ```

2. Install dependencies:   ```
   npm install   ```

## Running the Application

To start the development server:

```
npm run dev
``` 

## Important considerations

- The API fails on purpose this is to demostrate the error handling working.
- A lot of mocked data and random data is used to populate the page because of the limited data we receive from the API. Such as missing images and details.
- The project mentioned not using any extra libraries but I did use MUI since it can really improve the look and feel of the project. Still this could be easily removed if needed.
- This project was done in the time span of 4 hours.
- So far the avaialbe dates is only informative since we don't have an endpoint to actually reserve those dates. 
- Since random data was used the images and some details may change on each reload, this would not happen in a real application with more complete endpoints. 

## Features

- Landing page with a list of house listings
- Detailed view for individual house listings
- Responsive design for various screen sizes
- Loading spinner for improved user experience

## Technologies Used

- React
- Vite (for fast development and building)
- React Router (for navigation)
- CSS Modules (for scoped styling)

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v14 or later)
- npm (usually comes with Node.js)

