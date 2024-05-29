---
sidebar_position: 4
---
# Delete Module

Deletes an existing module from the system.

:::danger[Take care]

Deleting a module is irreversible and removes it permanently from the system.

Deleting a module also removes associated scores.

:::

- **Endpoint**: `http://localhost:8080/api/v1/ricoin/modules/{id}`
- **Method**: DELETE
- **Description**: Deletes an existing module by its ID.
- **Parameters**:
  - `{id}`: The unique identifier of the module to be deleted.
- **Example Request**:
    ```http
    http://localhost:8080/api/v1/ricoin/modules/{id}
    ```
- **Example Response** (Status: 204 No Content):
    - No content returned.
- **Usability Notes**:
  - Deleting a module is irreversible and removes it permanently from the system.
  - A status code of 204 indicates a successful deletion of the module.
