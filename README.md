# Triluxo Backend

Welcome to the backend application for Triluxo! This Express.js application interacts with a MongoDB database to manage books.

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Installation
1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/Triluxo-Backend.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd Triluxo-Backend
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

### Deployed Link
To access the home page, navigate to [https://lovely-moccasins-eel.cyclic.app/](https://lovely-moccasins-eel.cyclic.app/) in your browser.

### API Endpoints

#### Get Books Data
- Retrieve a list of books:
    ```http
    GET /books
    ```
    Example response:
    ```json
    [
        {
            "id": 1,
            "title": "Sample Book 1",
            "author": "Author 1",
            "publishedYear": 2022
        },
        {
            "id": 2,
            "title": "Sample Book 2",
            "author": "Author 2",
            "publishedYear": 2023
        }
    ]
    ```

#### Add a New Book
- Add a new book to the database:
    ```http
    POST /post
    ```
    Example request body:
    ```json
    {
        "title": "New Book",
        "author": "New Author",
        "publishedYear": 2023
    }
    ```

#### Update a Book
- Update an existing book by ID:
    ```http
    PUT /update/:id
    ```
    Example request body:
    ```json
    {
        "title": "Updated Title",
        "author": "Updated Author",
        "publishedYear": 2023
    }
    ```

#### Delete a Book
- Delete a book by ID:
    ```http
    DELETE /delete/:id
    ```

    Example response:
    ```json
    {
        "message": "Book with ID 1 deleted successfully."
    }
    ```

Make sure to run the application locally (http://localhost:4000) to test these endpoints.
