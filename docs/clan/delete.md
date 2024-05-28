---
sidebar_position: 4
---
# Deleting Clans

This endpoint allows you to delete an existing clan from the system. 

:::danger[Take care]

Please note that once a clan is deleted, it cannot be recovered. Additionally, all members of the clan, including the *TEAM LEADERS*, will also be removed. 

In future versions, a confirmation for deletion will be implemented, and *TEAM LEADERS* will be excluded from this action.

:::
#### Delete Clan
- **Endpoint**: `http://localhost:8080/api/v1/ricoin/clans/{id}`
- **Method**: DELETE
- **Description**: Deletes a specific clan by its ID.
- **Parameters**:
  - `{id}`: The unique identifier of the clan to be deleted.
- **Usability Notes**:
  - This endpoint permanently removes a clan from the system.
- **Example Request**:
    ```http
    http://localhost:8080/api/v1/ricoin/clans/6
    ```
- **Example Response**:
    - **Status**: 204 No Content
- **Usability Notes**:
  - Provide the ID of the clan to be deleted in the endpoint URL.