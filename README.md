# eCommerce Website
## Live Demo
See the website live at [link](https://ecommercesuhail.netlify.app).
## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Introduction
This is a full-featured eCommerce website developed using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse products, add them to their cart, and purchase them online.

## Features
- User authentication and authorization
- Product listing, searching, and filtering
- Shopping cart functionality
- Order management
- Admin dashboard for managing products, users, and orders
- Responsive design for mobile and desktop

## Installation
To get a local copy up and running, follow these simple steps:

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

### Clone the repository
```bash
git clone https://github.com/SuhailHamid42/ecommercee.git
cd ecommercee
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
BRAINTREE_MERCHANT_ID=your_braintree_merchant_id
BRAINTREE_PUBLIC_KEY=your_braintree_public_key
BRAINTREE_PRIVATE_KEY=your_braintree_private_key
# Run backend server
cd backend
npm run dev

# Run frontend server
cd ../frontend
npm start

login details:
1. Admin: email = admin@gmail.com   passsword = admin
2. User:  email = ishti@gmail.com   password  = ishti
