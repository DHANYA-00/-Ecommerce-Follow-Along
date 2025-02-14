# -Ecommerce-Follow-Along

*Milestone1:project Overview*

This project aims to build a dynamic e-commerce platform that allows users to browse products, add them to a shopping cart, and complete purchases securely.

*Key Features of the Project:*

- User-friendly product search and filtering options.
- Product categories for easy navigation.
- Secure user authentication with login and registration.
- Integration of a shopping cart and payment gateway for seamless transactions.
- Admin panel for managing product listings, orders, and user data.

*Tech Stack:*

*Frontend:*

React: A JavaScript library for building dynamic user interfaces.
HTML, CSS, JavaScript: Basic web technologies used for structuring and styling the application.

*Backend:*

- Node.js: A JavaScript runtime for server-side development.
= Express.js: A web framework for Node.js to simplify routing and server management.

*Database:*

MongoDB: A NoSQL database used for storing product, user, and order data in a flexible, document-based format.


*Milestone-2:*

*Login component Overview:-*

The Login component is a user authentication interface built with React. It allows users to enter their email and password, toggle password visibility, and submit their credentials. The component is styled with utility classes from Tailwind CSS and uses icons from the react-icons library.


*Features:*

Email Input: A text field for users to input their email address.

Password Input with Visibility Toggle:

Passwords are hidden by default.

Users can toggle visibility using the eye icons.

Remember Me Checkbox: A checkbox to let users opt for remembering their login details.

Forgot Password Link: A link for password recovery.

Submit Button: A button to submit login credentials.

Registration Prompt: A message encouraging users without an account to sign up.


*Dependencies:-*

React: For building the component structure.

Tailwind CSS: For styling the component with utility classes.

React Icons: For incorporating eye icons to toggle password visibility.



*Milestone 3: Server setup and error handling*


*Key Features:*

- Organized backend code with a clear folder structure.

- Configured a Node.js server using Express to handle APIs.

- Integrated MongoDB for data storage and management.

- Implemented basic error handling for smooth server operations.


*Tech Stack*

- Backend: Node.js, Express.
- Database: MongoDB, Mongoose.


*Milestone 4: Enabling File Uploads Using Multer*

*Key Features:*

- User Model: Created a user model to handle user-related data and interactions.

- User Controller: Developed a user controller to manage user logic such as creating users, handling authentication, etc.

- File Uploads: Integrated Multer for file handling to allow users to upload files (e.g., profile pictures or product images).

- File Storage Configuration: Configured Multer for local file storage, allowing easy access to uploaded files.


*Tech Stack:*

- Backend: Node.js, Express.

- Database: MongoDB, Mongoose.

- File Handling: Multer (for file uploads).




Milestone 5: Project Signup Setup

This milestone focuses on setting up the project structure and implementing a basic signup page.

Key Features

- Project Setup: Initialized the project with the required dependencies and folder structure.
- Signup Page: A simple signup page with fields for Name Email Password User Photo.

Tech Stack Used

- Frontend: React



**Milestone 6: Password Encryption and User Data Storage**

Password Encryption: Used bcrypt to hash passwords.

User Data Storage: Saved user data securely in the database.

GitHub Updates: Committed changes for password encryption.

Tech stack used:
nodejs


*Milestone 7:-*

  In this milestone we are going to create a backend endpoint for user and  the focus is on validating user credentials and verifying the encrypted password stored in the database.



Key features:

   1) validate user credentials during login:

Protect User Data: Keeps passwords safe even if the database is compromised.

Privacy: Ensures passwords aren't stored in plain text.

Compliance: Meets security standards like GDPR and PCI-DSS.

Prevents Password Theft: Hashed passwords are difficult to decipher, increasing security.

   2) compare the encrypted password with the user’s input:

User Enters Credentials:
The user provides their email/username and password on the login page.

Fetch User Data from Database:
The backend retrieves the user record based on the provided email/username.
If the user is not found, return an error: "User does not exist."

Compare Encrypted Passwords:
Process the user's input password using the same hashing algorithm (e.g., bcrypt).
Compare the resulting hash to the stored hashed password.
If they match, the user is authenticated; if not, send an error.

Tech stalk:
 Backend : bcryptjs.


*Milestone 8:-*

In this milestone,  we will create a frontend card component for products and design a homepage to display these cards for each product.

Key features:
  1) create a card component:

Showcase Products Effectively: Presents product details in a clear and visually appealing way.

Reusable Design: Can be used across multiple pages or sections of the app.

Improved User Experience: Makes it easy for users to browse and interact with products.

Organized Layout: Keeps the homepage clean and structured.

  2) display those cards on the products page:

Create a Dynamic Component: Design a single card component that accepts product details as props.

Use Mapping: Use array mapping to iterate over the product list and render a card for each product.

Pass Data Dynamically: Pass unique product information (e.g., name, price, image) to each card.

Maintain Consistency: Ensure the layout remains uniform for all products.


Tech stack :

Frontend: react


## MileStone-9 : CreateProduct Component


# Overview

CreateProduct is a React component that allows users to create a product by filling out a form with details such as name, description, category, price, stock, and images. It provides real-time image previews and validates required fields before submission.

# Features

User-friendly form for creating a product
Supports image uploads with previews  
Dynamically updates form state using React useState
Cleans up object URLs to prevent memory leaks
Uses Tailwind CSS for styling
Displays an alert upon successful submission

## Milestone 10: Updated models/product.js controller/product.js Createproductjs

# Controller/Product.js:

This Express.js route handles the creation of a new product. It validates the product data, checks if the user exists in the database, and ensures that at least one image is uploaded. If validation passes, the product is saved to the database and a success message is returned.

# model/Product.js

This code defines a Mongoose schema for a "Product" model in MongoDB. It specifies fields such as name, description, category, tags, price, stock, email, and images, with validation rules to ensure that required data is provided. Additionally, it includes automatic timestamping for creation and modification times. The schema is then used to create and export the Product model.

# src/Creatproduct.js

The CreateProduct component is a form for creating a new product. Here's a quick breakdown of its key features:

**State Management:** Uses useState to manage the form data for name, description, category, tags, price, stock, and email, along with image handling (images and previewImages).

**File Handling:** Allows users to upload multiple images, which are previewed before submission. The images are added to the form data using FormData.

**Form Submission:** When the form is submitted, the data is sent to the backend using axios. If the request is successful, a success message is displayed, and the form is reset. If there's an error, an alert is shown.

**Category Options:** Provides a set of predefined categories for the product (Electronics, Fashion, Books, and Home Appliances).


**Milestone 11 - Dynamic Home Page with MongoDB Integration**

In this milestone, we focused on making the home page dynamic by fetching and displaying product data stored in MongoDB. The objective was to write a backend endpoint that retrieves all saved product data and sends it to the frontend. On the frontend, we implemented a function to request this data and dynamically render it using the previously created product card component. This milestone helped in understanding how to extract data from MongoDB, send it through an API endpoint, receive it in the frontend, and display it efficiently using components. By completing this, we have successfully built a dynamic product listing system that enhances user interaction and improves the functionality of our application.

**Milestone 12 - My Products Page with User-Based Filtering** 

In this milestone, we developed the **My Products** page, which displays only the products added by the logged-in user based on their email. We achieved this by writing a backend endpoint that filters product data in MongoDB using the user's email and sends only the relevant products to the frontend. On the frontend, we implemented a function to fetch this filtered data and dynamically render it using the existing product card component. This milestone provided valuable experience in filtering data based on specific constraints, handling API requests efficiently, and dynamically displaying user-specific content. Successfully completing this step enhances the personalization of the application, allowing users to manage their own products seamlessly. 
