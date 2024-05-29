---
sidebar_position: 2
---
# Create Module

Creates a new module.

- **Endpoint**: `http://localhost:8080/api/v1/ricoin/modules`
- **Method**: POST
- **Description**: Creates a new module.
- **Request Body**:
    ```json
    {
      "name": "String",
      "active": Boolean
    }
    ```
- **Example Request**:
    ```http
    http://localhost:8080/api/v1/ricoin/modules
    ```
    *Content-Type: application/json*
    ```
    {
      "name": "Phrasal Verbs",
      "active": true
    }
    ```
- **Example Response** (Status: 200 OK):
    ```json
    {
      "id": 5,
      "name": "Phrasal Verbs",
      "active": true
    }
    ```
- **Usability Notes**:
  - This endpoint allows you to create a new module.
  - The request body should contain the name and active status of the module to be created.
  - The response includes the ID, name, and active status of the newly created module.

