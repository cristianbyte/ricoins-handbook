---
sidebar_position: 1
---

# Getting and Filtering Clans

These endpoints allow you to retrieve clans from the gamification API, with support for pagination and optional filtering by cohort and sorting by coins.

#### Get List of Clans
- **Endpoint**: `http://localhost:8080/api/v1/ricoin/clans`
- **Method**: GET
- **Description**: Retrieves a paginated list of clans.
- **Parameters**:
  - `page` (optional, default = 1): Page number.
  - `size` (optional, default = 10): Number of items per page.
  - `sortType` (optional, default = NONE): Sorting type for the `coins` attribute. Values can be: `NONE`, `ASC`, and `DESC`.
  - `cohort` (optional): Integer representing the cohort of the clan.
- **Example Request**:
    ```http
    http://localhost:8080/api/v1/ricoin/clans?page=1&size=10&sortType=NONE&cohort=2
    ```
- **Example Response** (Status: 200 OK):
    ```json
    {
      "content": [
        {
          "id": 1,
          "name": "Meta",
          "cohort": "1",
          "urlImage": "https://image.riwi.io/metaLogo.png",
          "coins": 10
        },
        {
          "id": 2,
          "name": "Van Rossum",
          "cohort": "1",
          "urlImage": "https://image.riwi.io/varossumLogo.png",
          "coins": 0
        }
      ],
      "pageable": {
        "pageNumber": 0,
        "pageSize": 2,
        "sort": {
          "empty": true,
          "sorted": false,
          "unsorted": true
        },
        "offset": 0,
        "paged": true,
        "unpaged": false
      },
      "totalPages": 3,
      "totalElements": 5,
      "last": false,
      "size": 2,
      "number": 0,
      "sort": {
        "empty": true,
        "sorted": false,
        "unsorted": true
      },
      "first": true,
      "numberOfElements": 2,
      "empty": false
    }
    ```

- **Usability Notes**:
  - This endpoint is useful for retrieving an overview of all clans, with optional filtering by cohort.
  - Pagination details are included in the response along with a list of clans, including their IDs, names, cohorts, image URLs, and coin counts.

## Get Clan by ID

- **Endpoint**: `http://localhost:8080/api/v1/ricoin/clans/{id}`
- **Method**: GET
- **Description**: Retrieves a specific clan by its ID.
- **Parameters**:
  - `{id}`: The unique identifier of the clan.
- **Example Request**:
    ```http
    GET http://localhost:8080/api/v1/ricoin/clans/1
    ```
- **Example Response** (Status: 200 OK):
    ```json
    {
      "id": 1,
      "name": "Meta",
      "cohort": "1",
      "urlImage": "https://image.riwi.io/metaLogo.png",
      "coins": 10
    }
    ```
- **Usability Notes**:
  - This endpoint allows you to retrieve a specific clan by providing its ID.
  - The response includes details such as the clan's ID, name, cohort, image URL, and coin count.
  - A status code of 200 indicates a successful request.
