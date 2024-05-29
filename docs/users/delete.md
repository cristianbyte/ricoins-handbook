---
sidebar_position: 4
---
# Deleting Users

This endpoint allows you to delete a user from the system. Once deleted, the user's information will be permanently removed and cannot be recovered.

#### Delete User
- **Endpoint**: `http://localhost:8080/api/v1/ricoin/users/{Id}`
- **Method**: DELETE
- **Description**: Deletes a user by their unique identifier.
- **Parameters**:
  - `{Id}`: The unique identifier of the user to be deleted.
- **Usability Notes**:
  - Exercise caution when using this endpoint as it permanently deletes the user's data.
  - Deletion of a user also removes any associated scores and assignments.
- **Example Request**:
    ```http
    http://localhost:8080/api/v1/ricoin/users/f36c7799-d943-4a36-aea4-e36bbc032f9f
    ```
- **Example Response**:
    - **Status**: 204 No Content
