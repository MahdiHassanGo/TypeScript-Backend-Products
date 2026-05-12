# Node.js Product API Server

A simple RESTful API server built with Node.js and TypeScript for managing products. This project demonstrates basic CRUD operations using a JSON file as a database.

## Features

- **RESTful API**: Full CRUD operations for products
- **TypeScript**: Type-safe development
- **JSON Database**: Simple file-based storage
- **Environment Configuration**: Configurable port via environment variables
- **Modular Architecture**: Organized code structure with routes, services, and utilities

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd node-js
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   PORT=5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The server will start on the port specified in your `.env` file (default: 5000).

## Usage

The API provides endpoints for managing products. All responses are in JSON format.

### API Endpoints

#### Get All Products
- **GET** `/products`
- Returns a list of all products

#### Get Product by ID
- **GET** `/products/:id`
- Returns a single product by ID

#### Create Product
- **POST** `/products`
- Body: JSON object with product details (name, description, price)
- Creates a new product with auto-generated ID

#### Update Product
- **PUT** `/products/:id`
- Body: JSON object with updated product details
- Updates an existing product by ID

#### Delete Product
- **DELETE** `/products/:id`
- Deletes a product by ID

### Example Requests

#### Create a Product
```bash
curl -X POST http://localhost:5000/products \
  -H "Content-Type: application/json" \
  -d '{"name": "Sample Product", "description": "A sample product", "price": 29.99}'
```

#### Get All Products
```bash
curl http://localhost:5000/products
```

## Project Structure

```
src/
├── config/
│   └── index.ts          # Configuration management
├── database/
│   └── db.json           # JSON database file
├── routes/
│   └── route.ts          # Route handlers
├── service/
│   └── productServices.ts # Data access layer
├── types/
│   └── productType.ts    # TypeScript interfaces
├── utility/
│   ├── parseBody.ts      # Request body parsing
│   └── sendResponse.ts   # Response formatting
└── server.ts             # Main server file
```

## Environment Variables

- `PORT`: Server port (default: 5000)

## Scripts

- `npm run dev`: Start the development server with hot reload
- `npm test`: Run tests (currently not implemented)

## Dependencies

- **Runtime**:
  - `dotenv`: Environment variable management
  - `tsx`: TypeScript execution and REPL

- **Development**:
  - `@types/node`: TypeScript definitions for Node.js

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests (if available)
5. Submit a pull request

## License

This project is licensed under the ISC License.