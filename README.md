# :pushpin: express-books
A simple REST API built with Express.js, Sequelize, and PostgreSQL to manage books, members, and borrowings.

# :rocket: Features
- Manage Books, Members, and Borrowings
- Pagination and filtering
- Sequelize ORM with Postgres
- Validation with `express-validator`
- Environment-based configuration

# :package: Requirements
- Node.js 24+
- PostgreSQL 16+
- npm / yarn / pnpm

# :hammer_and_wrench: Setup
## :one: Clone the repository:
```
git clone https://github.com/voxelox/express-books.git
cd express-books
```

## :two: Install dependencies:
Using npm:
```
npm install
```
Using yarn:
```
yarn install
```
Using pnpm:
```
pnpm install
```

## :three: Configure environment variables:
Create `.env`:
```
DATABASE_HOST=example.com
DATABASE_DB=postgres
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_PORT=5432
```

## :four: Run database migrations:
```
pnpm run deploy
```

## :five: Start the server:
```
pnpm start
```

# :books: API Documentation
## :pushpin: Books
### Get all books (with pagination)
```
GET /api/books?title=Test&author=Test&page=1&limit=10
```
### Response:
```
{
  "data": [
    {
      "id": "0569cc7d-01c0-4fc5-b9f4-f03b51735306",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "published_year": 1925,
      "stock": 5,
      "isbn": "9780743273565",
      "available": true
    },
    {
      "id": "1b74d79e-fb9e-4b2a-8bba-66ac1f9cfcef",
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "published_year": 1960,
      "stock": 3,
      "isbn": "9780446310789",
      "available": true
    },
    {
      "id": "6216f445-e845-4608-88a1-9bee8ae457d5",
      "title": "1984",
      "author": "George Orwell",
      "published_year": 1949,
      "stock": 4,
      "isbn": "9780451524935",
      "available": true
    },
    {
      "id": "d12ccb3d-45dc-4377-96d4-8385c27b2c05",
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "published_year": 1813,
      "stock": 6,
      "isbn": "9780141439518",
      "available": true
    },
    {
      "id": "62219050-3423-4792-8f29-0fce17fa369a",
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "published_year": 1951,
      "stock": 3,
      "isbn": "9780316769488",
      "available": true
    },
    {
      "id": "0070cb79-8ea6-4488-ac4a-d35be9de68a6",
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "published_year": 1937,
      "stock": 7,
      "isbn": "9780547928227",
      "available": true
    },
    {
      "id": "7a8ba492-065d-448f-a941-5f04a2ab3920",
      "title": "The Da Vinci Code",
      "author": "Dan Brown",
      "published_year": 2003,
      "stock": 4,
      "isbn": "9780307474278",
      "available": true
    },
    {
      "id": "065fd204-6b1b-49fd-af0e-918f73217497",
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "published_year": 1988,
      "stock": 5,
      "isbn": "9780062315007",
      "available": true
    },
    {
      "id": "c92085b7-b5e7-4f18-a509-f6df62190d46",
      "title": "The Little Prince",
      "author": "Antoine de Saint-Exupéry",
      "published_year": 1943,
      "stock": 8,
      "isbn": "9780156012195",
      "available": true
    },
    {
      "id": "7aefb0f8-f118-4b09-b035-2586519a1190",
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "published_year": 1932,
      "stock": 4,
      "isbn": "9780060850524",
      "available": true
    }
  ],
  "pagination": {
    "total": 20,
    "page": 1,
    "limit": 10,
    "totalPages": 2
  }
}
```

## :pushpin: Members
### Create member
```
POST /api/members
```
### Body:
```
{
  "name": "John Doe",
  "email": "john.doe@email.com",
  "phone": "081234567890",
  "address": "123 Main St"
}
```

### Get borrowing history
```
GET /api/members/:id/borrowings
```
### Body:
```
{
    "status": "RETURNED",
    "page": 1,
    "limit": 10
}
```
### Response:
```
{
  "data": [
    {
      "id": "4769aedb-6936-4278-b790-7e66c314655e",
      "book_id": "0569cc7d-01c0-4fc5-b9f4-f03b51735306",
      "member_id": "9dcc9005-9340-4621-9025-6b1526e6676e",
      "borrow_date": "2024-11-21T00:00:00.000Z",
      "return_date": "2024-11-28T00:00:00.000Z",
      "status": "RETURNED",
      "created_at": "2025-07-30T14:39:11.202Z",
      "updated_at": "2025-07-30T14:39:11.202Z",
      "Book": {
        "id": "0569cc7d-01c0-4fc5-b9f4-f03b51735306",
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "published_year": 1925,
        "stock": 5,
        "isbn": "9780743273565",
        "created_at": "2025-07-30T14:39:11.187Z",
        "updated_at": "2025-07-30T14:39:11.187Z"
      }
    }
  ],
  "pagination": {
    "total": 1,
    "page": 1,
    "limit": 10,
    "totalPages": 1
  }
}
```

## :pushpin: Borrowings
### Create borrowing
```
POST /api/borrowings
```
### Body:
```
{
    "book_id": "uuid",
    "member_id": "uuid"
}
```
### Return book
```
POST /api/borrowings/:id/return
```