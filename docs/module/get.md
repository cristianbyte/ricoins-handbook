---
sidebar_position: 1
---

# Viewing Modules

Modules represent the various topics covered in the developer studio. Each module focuses on a specific subject matter relevant to developers' training, such as programming languages, frameworks, language skills, etc.

#### Get List of Modules
- **Endpoint**: `http://localhost:8080/api/v1/ricoin/modules`
- **Method**: GET
- **Description**: Retrieves a list of all modules.
- **Example Request**:
    ```http
    http://localhost:8080/api/v1/ricoin/modules
    ```
- **Example Response** (Status: 200 OK):
    ```json
    [
      {
        "id": 1,
        "name": "Python",
        "active": false
      },
      {
        "id": 2,
        "name": "HTML-CSS",
        "active": true
      },
      ...
    ]
    ```
- **Usability Notes**:
  - This endpoint allows you to retrieve a list of all modules.
  - The response includes an array of modules, each containing their ID, name, and active status.
  - There is no pagination or parameters required for this endpoint.
