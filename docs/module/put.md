---
sidebar_position: 3
---
# Update Module

Updates an existing module in the system.

:::tip My Tip
The module ID in the URL and the `id` field in the request body must match to ensure correct updating.
:::

- **Endpoint**: `http://localhost:8080/api/v1/ricoin/modules/{id}`
- **Method**: PUT
- **Description**: Updates an existing module by its ID.
- **Parameters**:
  - `{id}`: The unique identifier of the module to be updated.
- **Request Body**:
    ```json
    {
        "id": int,
        "name": "String",
        "active": Boolean
    }
    ```
- **Example Request**:
    ```http
    http://localhost:8080/api/v1/ricoin/modules/5
        ```
    *Content-Type: application/json*
    ```
    {
        "name": "Phrasal Verbs",
        "active": false
    }
    ```
- **Example Response** (Status: 200 OK):
    ```json
    {
        "id": 5,
        "name": "Phrasal Verbs",
        "active": false
    }
    ```
- **Usability Notes**:
  - A status code of 200 indicates a successful update of the module.
