# API Documentation

## Overview

This document provides an overview of the API, including available endpoints, request and response formats, authentication methods, and any other relevant details.

## Base URL

All API requests should be made to the following base URL: http://localhost:3000/api


## Endpoints

### 1. **Books**

#### GET /books
Returns a list of all available books.

- **URL**: `/books`
- **Method**: `GET`
- **Response**:
  - `200 OK`: Returns a list of books.
  - **Example**:
    ```json
    [
      {
        "id": 1,
        "code": "JK-45",
        "title": "Harry Potter",
        "author": "J.K Rowling",
        "stock": 1,
        "created_at": "2024-01-01T00:00:00Z",
        "updated_at": "2024-01-01T00:00:00Z"
      },
      ...
    ]
    ```

#### POST /books/borrow
Allows a member to borrow a book.

- **URL**: `/books/borrow`
- **Method**: `POST`
- **Request Body**:
  - `memberId`: (integer) The ID of the member.
  - `bookId`: (integer) The ID of the book.
- **Response**:
  - `200 OK`: The book was successfully borrowed.
  - `403 Forbidden`: The member cannot borrow more books, or the book is out of stock.
  - `404 Not Found`: The specified book or member was not found.
  - **Example**:
    ```json
    {
      "message": "Book borrowed successfully"
    }
    ```

#### POST /books/return
Allows a member to return a borrowed book.

- **URL**: `/books/return`
- **Method**: `POST`
- **Request Body**:
  - `memberId`: (integer) The ID of the member.
  - `bookId`: (integer) The ID of the book.
- **Response**:
  - `200 OK`: The book was successfully returned.
  - `404 Not Found`: The specified book or member was not found.
  - **Example**:
    ```json
    {
      "message": "Book returned successfully"
    }
    ```

### 2. **Members**

#### GET /members
Returns a list of all members.

- **URL**: `/members`
- **Method**: `GET`
- **Response**:
  - `200 OK`: Returns a list of members.
  - **Example**:
    ```json
    [
      {
        "id": 1,
        "code": "M001",
        "name": "Angga",
        "penalty_end_date": null,
        "created_at": "2024-01-01T00:00:00Z",
        "updated_at": "2024-01-01T00:00:00Z",
        "borrowed_books_count": 1
      },
      ...
    ]
    ```

## Error Handling

All errors will be returned in the following format:

```json
{
  "error": "Error message"
}
