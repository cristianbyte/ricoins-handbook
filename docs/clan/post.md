---
sidebar_position: 2
---
# Creating New Clans

This endpoint allows you to create new clans within the system. Clans are groups of users categorized by cohort and can be assigned a name, cohort, coins, and an optional URL for an image.


- **Endpoint**: `http://localhost:8080/api/v1/ricoin/clans`
- **Method**: POST
- **Description**: Creates a new clan.
- **Request Body**:
    ```json
    {
      "name": "string",
      "cohort": "string",
      "coins": 0,
      "urlImage": "string"
    }
    ```
- **Usability Notes**:
  - The `urlImage` field cannot be set from the frontend at this time.
  - This endpoint is versioned for the second version of the API.
- **Example Request**:
    ```http
    http://localhost:8080/api/v1/ricoin/clans
    ```
    *Content-Type: application/json*
    ```
    {
      "name": "Einstein",
      "cohort": "3",
      "urlImage": "urlPrueba",
      "coins": 0
    }
    ```
- **Example Response** (Status: 201 Created):
    ```json
    {
      "id": 6,
      "name": "Einstein",
      "cohort": "3",
      "urlImage": "urlPrueba",
      "coins": 0
    }
    ```
- **Usability Notes**:
  - This endpoint creates a new clan based on the provided data.
  - A status code of 201 indicates that the clan was successfully created.
