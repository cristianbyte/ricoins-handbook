---
sidebar_position: 1
---

# Exploring the Community

This section provides insights into managing users within Riwi, allowing you to understand how to interact with the vibrant developer community.

## Get List of Users

Retrieves a paginated list of users from the Código R platform.

- **Endpoint**: `http://localhost:8080/api/v1/ricoin/users`
- **Method**: GET
- **Description**: Retrieves a list of users with optional filtering and pagination.
- **Parameters**:
  - `page` (optional, default = 1): Page number.
  - `size` (optional, default = 10): Number of users per page.
  - `sortType` (optional, default = ASC): Sorting type for the result set. Values can be: `ASC`, `DESC` or `NONE`.
  - `clan` (optional): Filters users by the specified clan name.
  - `roleType` (optional): Filters users by the specified role type.

:::info Next version.
This endpoint currently only returns developers, regardless of any specified role type in the request. More extensive implementation is planned for the next version.
:::

- **Example Request**:
    ```http
    http://localhost:8080/api/v1/ricoin/users?page=1&size=2
    ```
- **Example Response** (Status: 200 OK):
    ```json
    {
      "content": [
        {
          "id": "00000000-1111-2222-3333-444444444445",
          "totalCoins": 0,
          "email": "brayan@riwi.io",
          "name": "Brayan",
          "phoneNumber": "3003021212",
          "urlImage": "https://image.riwi.io/brayan.jpg",
          "role": {
            "id": 3,
            "name": "DEVELOPER"
          }
        },
        {
          "id": "33333333-4444-5555-6666-777777777777",
          "totalCoins": 0,
          "email": "santiago@riwi.io",
          "name": "Santiago",
          "phoneNumber": "3003004040",
          "urlImage": "https://image.riwi.io/santiago.jpg",
          "role": {
            "id": 3,
            "name": "DEVELOPER"
          }
        }
      ],
      "pageable": {
        "pageNumber": 0,
        "pageSize": 2,
        "sort": {
          "empty": false,
          "sorted": true,
          "unsorted": false
        },
        "offset": 0,
        "paged": true,
        "unpaged": false
      },
      "totalPages": 10,
      "totalElements": 20,
      "last": false,
      "size": 2,
      "number": 0,
      "sort": {
        "empty": false,
        "sorted": true,
        "unsorted": false
      },
      "numberOfElements": 2,
      "first": true,
      "empty": false
    }
    ```
- **Usability Notes**:
  - This endpoint retrieves a paginated list of users from the Código R platform.
  - Optional parameters can be used for filtering by clan and role type.
  - Pagination details are included in the response along with user information such as ID, name, email, phone number, total coins, URL image, and role.

## Viewing Full User Details

This endpoint retrieves detailed information about a specific user, including their scores, assigned clan, and other relevant data.

#### Get Full User Details
- **Endpoint**: `http://localhost:8080/api/v1/ricoin/users/{id}`
- **Method**: GET
- **Description**: Retrieves detailed information about a specific user by their ID.
- **Parameters**:
  - `{id}`: The unique identifier of the user.
- **Example Request**:
    ```http
    http://localhost:8080/api/v1/ricoin/users/full/11111111-2222-3333-4444-555555555555
    ```
- **Example Response** (Status: 200 OK):
    ```json
    {
      "id": "11111111-2222-3333-4444-555555555555",
      "totalCoins": 10,
      "email": "daniela@riwi.io",
      "name": "Daniela",
      "phoneNumber": "3003002020",
      "urlImage": "https://image.riwi.io/daniela.jpg",
      "role": {
        "id": 3,
        "name": "DEVELOPER"
      },
      "clans": [
        {
          "id": 1,
          "name": "Meta",
          "cohort": "1",
          "urlImage": "https://image.riwi.io/metaLogo.png",
          "coins": 10
        }
      ],
      "score": [
        {
          "id": "6ed54c4b-1dd3-11ef-98de-9c6b00142992",
          "asignedUser": {
            "id": "11111111-2222-3333-4444-555555555555",
            "totalCoins": 10,
            "email": "daniela@riwi.io",
            "name": "Daniela",
            "phoneNumber": "3003002020",
            "urlImage": "https://image.riwi.io/daniela.jpg",
            "role": {
              "id": 3,
              "name": "DEVELOPER"
            }
          },
          ...
        }
      ]
    }
    ```
- **Usability Notes**:
  - This endpoint provides comprehensive details about a specific user, including their scores, assigned clan, and other relevant information.
  - A status code of 200 indicates a successful request.
