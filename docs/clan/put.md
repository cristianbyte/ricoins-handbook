---
sidebar_position: 3
---
# Updating Clans

This endpoint allows you to update an existing clan in the system. 

:::tip[My tip]

Both the clan ID in the URL and the request body must match to ensure correct updating.

:::
#### Update Clan
- **Endpoint**: `http://localhost:8080/api/v1/ricoin/clans/{id}`
- **Method**: PUT
- **Description**: Updates an existing clan by its ID.
- **Parameters**:
  - `{id}`: The unique identifier of the clan to be updated.
- **Request Body**:
    ```json
    {
        "id": int,
        "name": "String",
        "cohort": "String",
        "urlImage": "String"
    }
    ```
- **Usability Notes**:
  - Both the clan ID in the URL and the `id` field in the request body must match to ensure correct updating.
  - The updating of images and coins is not implemented yet and is planned for a future version.
- **Example Request**:
    ```http
    http://localhost:8080/api/v1/ricoin/clans/6
   ```
    *Content-Type: application/json*
      ```
    {
        "id": 6,
        "name": "Newton",
        "cohort": "2",
        "urlImage": "urlTest"
    }
    ```
- **Example Response**:
    - **Status**: 200 OK
    ```json
    {
        "id": 6,
        "name": "Newton",
        "cohort": "2",
        "urlImage": "urlTest",
        "coins": 0
    }
    ```
- **Usability Notes**:
  - A status code of 200 indicates a successful update of the clan.
