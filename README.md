# 🏷️ Inventory App

An **Inventory Management System** built using **Node.js**, **Express**, and **MongoDB**.  
This app allows you to manage suppliers, purchases, products, and stock levels with full CRUD (Create, Read, Update, Delete) operations and API testing support via **Postman**.

---

## 🚀 Features

- Add, update, delete, and view suppliers.
- Manage product details (name, quantity, price, etc.).
- Handle purchases and automatically update stock.
- RESTful API endpoints for all inventory operations.
- Easy testing using **Postman**.
- MongoDB-based persistent data storage.

---

## 🧰 Tech Stack

| Layer | Technology |
|-------|-------------|
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Testing | Postman |
| Environment Variables | dotenv |
| Dev Tool | Nodemon |

---


3. Create a .env file

Create a file named .env in the root folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string

4. Start the server

For development (with auto-restart):

npx nodemon server.js


For production:

node server.js

📬 API Endpoints (Example)
Method	Endpoint	Description
POST	/api/suppliers	Add a new supplier
GET	/api/suppliers	Get all suppliers
PUT	/api/suppliers/:id	Update supplier details
DELETE	/api/suppliers/:id	Delete a supplier
POST	/api/purchases	Record a new purchase
GET	/api/purchases	Get all purchases

🧪 You can test all routes easily using Postman by setting Content-Type: application/json.
