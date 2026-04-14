
---

# Node.js MongoDB Product Management Application

A full-stack **product management dashboard** built using **Node.js, Express.js, MongoDB, EJS, and Tailwind CSS** following the **MVC architecture**.

The application provides RESTful APIs for product CRUD operations and a dynamic admin interface to **search, filter, and sort products efficiently**.

---

# Features

### Product Management

* Create Product
* Get All Products
* Get Product by ID
* Update Product
* Delete Product
* Duplicate product prevention

### Product Discovery

* Product **Search** using regex-based queries
* Product **Filtering** by category and stock status
* Product **Sorting** by price and name
* Combined **Search + Filter + Sort** support

### Validation & Data Handling

* Schema validation using **Mongoose**
* Required fields validation
* Minimum length validation
* MongoDB query optimization

### UI Features

* Dynamic product rendering using **EJS**
* Responsive UI built with **Tailwind CSS**
* Interactive **search bar**
* **Dropdown filters**
* **Sorting menu**
* Dashboard-style product table

---

# Tech Stack

## Backend

* Node.js
* Express.js

## Database

* MongoDB Atlas
* Mongoose ODM

## Frontend

* EJS Template Engine
* Tailwind CSS

## Tools

* Postman (API testing)
* Nodemon (development server)

---

# Project Architecture

The application follows the **MVC (Model-View-Controller)** pattern:

```
Model      → MongoDB schema & database logic
View       → EJS templates + Tailwind UI
Controller → Business logic & API handling
Routes     → API endpoint management
```

---

# Project Workflow

1. Built RESTful APIs using **Express.js**
2. Connected **MongoDB Atlas** using **Mongoose**
3. Designed a **Product Schema with validations**
4. Implemented **CRUD operations**
5. Tested APIs using **Postman**
6. Rendered product data dynamically using **EJS**
7. Styled UI with **Tailwind CSS**
8. Implemented **Search, Filter, and Sorting using query parameters**

---

# API Endpoints

## Create Product

```
POST /api/products
```

Creates a new product.

---

## Get All Products

```
GET /api/products
```

Returns all products.

---

## Get Product by ID

```
GET /api/products/:id
```

Returns a single product.

---

## Update Product

```
PUT /api/products/:id
```

Updates product details.

---

## Delete Product

```
DELETE /api/products/:id
```

Deletes a product.

---

# Search, Filter & Sorting

Products can be dynamically filtered using **query parameters**.

### Search Product

```
/products/filter?search=shirt
```

Search products by name using **case-insensitive regex**.

---

### Filter by Category

```
/products/filter?category=men
```

---

### Filter Low Stock

```
/products/filter?stock=low
```

---

### Sort Products

```
/products/filter?sort=price_asc
/products/filter?sort=price_desc
/products/filter?sort=name_asc
/products/filter?sort=name_desc
```

---

### Combine Filters

```
/products/filter?search=shirt&category=men&sort=price_asc
```

This allows **powerful product discovery** in the dashboard.

---

# UI Preview

The dashboard includes:

* Product search bar
* Category filter dropdown
* Sorting dropdown
* Product table view
* Edit and delete actions

---

# Future Improvements

* Pagination
* Authentication (Admin login)
* Image upload with Multer
* Product categories management
* API rate limiting
* Docker deployment

---

# Author

Raktim Bhattacharya

---

