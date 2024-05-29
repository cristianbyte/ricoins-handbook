---
sidebar_position: 2
---
# Creating Users

import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';


This endpoint allows you to create a new user in the system.

#### Create User
- **Endpoint**: `http://localhost:8080/api/v1/ricoin/users`
- **Method**: POST
- **Description**: Creates a new user with the provided information.
- **Parameters**:
  - `email` (required): Email address of the user.
  - `name` (required): Name of the user.
  - `phoneNumber` (required): Phone number of the user.
  - `urlImage` (required): URL of the user's profile image.
  - `totalCoins` (optional, default = 0): Total coins associated with the user.
  - `roleId` (required): Role ID of the user. (1: Admin, 2: Team Leader, 3: Developer)
  - `clansId` (optional): Array of clan IDs associated with the user.

:::info

<Tabs>
  <TabItem value="developer" label="Clan in Developers">If the role ID is 3 (Developer), only the assignment of one clan is allowed.</TabItem>
  <TabItem value="tl_admin" label="Clan in Admins and Team Leaders">If the role ID is 1 (Team Leader), multiple assignments are allowed. However, for role ID 2 (Admin), no assignments are permitted.</TabItem>
</Tabs>

:::
  - `status` (optional): Status of the user. (ACTIVE, TRACKING, CONDITIONAL, INACTIVE, EXPELLED)
- **Request Body**:
    ```json
        {
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
    http://localhost:8080/api/v1/ricoin/users
    ```
    *Content-Type: application/json*
    ```
    {
      "email": "valentina@gmail.com",
      "name": "valentina",
      "phoneNumber": "3001112233",
      "urlImage": "https://img.riwi.io/profileImgValentinaCodeR.jpg",
      "totalCoins": 0,
      "roleId": 3,
      "clansId": [
        1
      ],
      "status": "ACTIVE"
    }
    ```
- **Example Response** (Status: 200 OK):
    ```json
    {
      "id": "f36c7799-d943-4a36-aea4-e36bbc032f9f",
      "totalCoins": 0,
      "email": "valentina@gmail.com",
      "name": "valentina",
      "phoneNumber": "3001112233",
      "urlImage": "https://img.riwi.io/profileImgValentinaCodeR.jpg",
      "role": {
        "id": 3,
        "name": null
      }
    }
    ```

:::info Next version:
     The `name` attribute in the response for the role may appear as null. We are currently working on an update to provide a name for roles in future versions. Additionally, an extension to separate the user's name into first name and last name is planned.
:::

- **Usability Notes**:
  - This endpoint creates a new user with the provided details.
  - A status code of 200 indicates a successful creation of the user.
