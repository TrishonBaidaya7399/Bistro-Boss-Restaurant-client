# Bistro Boss- Restaurant Management MERN web app
## Live link: https://bistro-boss-restaurant-mern.web.app/

<a href="https://bistro-boss-restaurant-mern.web.app/">
  <img src="https://github.com/TrishonBaidaya7399/Bistro-Boss-Restaurant-client/blob/main/Screenshot%202023-12-08%20203513.jpg?raw=true" />
</a>

## Technology Used: 
- React, Node, Express, JWT, HTML, CSS, JS
- MongoDB, Firebase
- Tailwind CSS, DaisyUI, Tanstack


## Key Features: 
### Introduction
- Purpose: Create a user-friendly platform for Restaurant Management.
- Scope: Features include user registration, add items, manage items, management bookings, and role-based access control. Built using MERN stack.

### User Roles and Permissions
- Admin 🌐: Access to all features.
- User 🤝: Order items and pay online through card Payment.

### User Authentication (public)
- Registration:
- Input fields: email, name, avatar, password.
- Default status: "user,"
- Login: Email and password, log in with Google
### Dashboard (private🔒)
- All layouts with a sidebar, fully responsive.
- Profile Page (/dashboard/profile): Display user info
#### User Dashboard 
- Home Page (/dashboard): Display welcome message.
- Payment History Page: Display all payment history.
- Reservation page: Booking page for table.
- My Cart: show all cart-added items

#### Admin Dashboard: 
- Display statistics (total users, revenue, orders, total products).
- Manage Items,
- Add items,
- All users,
- All Payment history,
- My cart.

### Home Page (public): 
- Navbar with links for Dashboard, Contact Us, Our Menu, Our Shop, Login, Cart
- Banner
- Items Category section
- Menu Section
- Footer with relevant links.

### Our Menu Page:
- Banner section with parallax effect
- Items section for individual types of items
- For each section Have a button that navigates to our shop page for this selected category

### Our Shop:
- Has a tab section for individual items category
- for each tab, show all items relevant to this category
- items are shown as cards that have an Add to Cart button
- Clicking on the Add to Cart button, items added to the cart page
 
### Cart page:
- Contain all the added products
- the cart button shows the number of products contained in it
- all orders are shown in a table and have a pay button, and delete button
- clicking on the pay button, redirects the user to the payment page to pay by card

### Responsive
- Make the entire website and dashboard responsive.

### JWT
- Implement JWT on login and secure private APIs with JWT.


