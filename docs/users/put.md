---
sidebar_position: 3
---
# Updating Users

This endpoint allows you to update an existing user in the system.

:::tip My Tip
Both the user ID in the URL and the `id` field in the request body must match to ensure correct updating.
:::

#### Update User
- **Endpoint**: `http://localhost:8080/api/v1/ricoin/users/{id}`
- **Method**: PUT
- **Description**: Updates an existing user by their ID.
- **Parameters**:
  - `{id}`: The unique identifier of the user to be updated.
  - `roleId` (required): Role ID of the user. (1: Admin, 2: Team Leader, 3: Developer)
  - `clansId` (optional): Array of clan IDs associated with the user.
  
  :::tip My Tip
  If the role ID is 3 (Developer), only the assignment of one clan is allowed.
  :::
  
  - `status` (optional): Status of the user. (ACTIVE, TRACKING, CONDITIONAL, INACTIVE, EXPELLED)
- **Request Body**:
    ```json
        {
          "id": "string",
          "email": "string",
          "name": "string",
          "phoneNumber": "string",
          "urlImage": "string",
          "totalCoins": int,
          "roleId": int,
          "clansId": [
            "int"
          ],
          "status": "ACTIVE"
        }
    ```

- **Example Request**:
    ```http
    http://localhost:8080/api/v1/ricoin/users/f36c7799-d943-4a36-aea4-e36bbc032f9f
    ```
    *Content-Type: application/json*
    ```
    {
      "id": "f36c7799-d943-4a36-aea4-e36bbc032f9f",
      "email": "valentina@riwi.io",
      "name": "valentina",
      "phoneNumber": "3002223344",
      "urlImage": "https://img.riwi.io/profileImgValentinaCodeR.jpg",
      "totalCoins": 0,
      "roleId": 3,
      "clansId": [
        1
      ],
      "status": "ACTIVE"
    }
    ```
- **Example Response**:
    - **Status**: 200 OK
    ```json
    {
      "id": "f36c7799-d943-4a36-aea4-e36bbc032f9f",
      "totalCoins": 0,
      "email": "valentina@riwi.io",
      "name": "valentina",
      "phoneNumber": "3002223344",
      "urlImage": "https://img.riwi.io/profileImgValentinaCodeR.jpg",
      "role": {
        "id": 3,
        "name": null
      }
    }
    ```
- **Usability Notes**:
  - A status code of 200 indicates a successful update of the user.
  - The default value for total coins is set to 0.
  - Role ID 1 represents Admin, 2 represents Team Leader, and 3 represents Developer.
  - The `name` attribute in the response for the role may appear as null. We are currently working on an update to provide a name for roles in future versions.




