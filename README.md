# MernEats - Food Delivery Web Application

Welcome to **MernEats**, a comprehensive food delivery web application built with the MERN stack (MongoDB, Express, React, Node.js). This README provides an overview of the project, how to set it up, and the key features of the application.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

**MernEats** is designed to provide a seamless food ordering experience. Users can browse restaurants, view menus, add items to their cart, and place orders. Restaurant owners can manage their menu and orders efficiently.

## Features

- User authentication and authorization
- Browse restaurants by city or cuisine
- View restaurant details and menus
- Add items to the cart and manage the cart
- Place orders and track order status
- Restaurant owner dashboard to manage menu items and orders
- Mobile app for quick and personalized ordering experience

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Payment Integration**: Stripe
- **Authentication**: JWT (JSON Web Tokens)

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/yourusername/merneats.git
cd merneats
```

### Install Dependencies

#### Server

```bash
cd server
npm install
```

#### Client

```bash
cd client
npm install
```

## Configuration

### Server

Create a `.env` file in the `server` directory and add the following environment variables:

```env
PORT=10000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### Client

Create a `.env` file in the `client` directory and add the following environment variables:

```env
REACT_APP_API_BASE_URL=http://localhost:10000/api
```

## Running the Application

### Start the Server

```bash
cd server
npm start
```

### Start the Client

```bash
cd client
npm start
```

Open your browser and navigate to `http://localhost:3000` to see the application running.

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login a user

### Restaurants

- `GET /api/restaurants`: Get all restaurants
- `GET /api/restaurants/:id`: Get restaurant by ID

### Menu Items

- `GET /api/restaurants/:id/menu-items`: Get menu items for a restaurant
- `POST /api/restaurants/:id/menu-items`: Add a menu item (restaurant owner)
- `DELETE /api/menu-items/:id`: Delete a menu item (restaurant owner)

### Orders

- `POST /api/orders`: Create a new order
- `GET /api/orders/:id`: Get order details
- `GET /api/orders/user/:userId`: Get orders for a user

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure your code adheres to the project's coding standards.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for using MernEats! We hope you enjoy using our application. If you have any questions or feedback, feel free to open an issue or contact us.
