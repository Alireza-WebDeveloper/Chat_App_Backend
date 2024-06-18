# Game API Documentation

## Introduction

This document provides an overview of the endpoints available in the Game API. The API allows users to retrieve information about games, including their platforms, genres, banners, landing page images, top games for specific years, a random game for use in a slider, and details of specific games.

## Contact Information

For any questions or inquiries regarding this API, please contact the Amazing Developer.

## Endpoints

### Get All Games

- **Endpoint:** `/api/game`
- **Method:** GET
- **Description:** Retrieve the list of games based on platform and genre.

#### Parameters

- `platform`: The platform of the games. (e.g., <span style="color: #ff69b4;">playstation</span>, <span style="color: #ff69b4;">xbox</span>, <span style="color: #ff69b4;">steam</span>)
- `genre`: The genre of the games. (e.g., <span style="color: #1e90ff;">action</span>, <span style="color: #1e90ff;">adventure</span>, <span style="color: #1e90ff;">fps</span>)

#### Responses

- `200`: Successful operation
- `400`: Bad Request
- `404`: Not Found
- `500`: Internal Server Error

### Get Banner

- **Endpoint:** `/api/banner`
- **Method:** GET
- **Description:** Retrieve the banner.

#### Responses

- `200`: Successful operation
- `400`: Bad Request
- `404`: Not Found
- `500`: Internal Server Error

### Get gameLanding

- **Endpoint:** `/api/gamelanding`
- **Method:** GET
- **Description:** Retrieve the landing page images.

#### Responses

- `200`: Successful operation
- `400`: Bad Request
- `404`: Not Found
- `500`: Internal Server Error

### Get platform

- **Endpoint:** `/api/platform`
- **Method:** GET
- **Description:** Retrieve the list of game platforms.

#### Responses

- `200`: Successful operation
- `400`: Bad Request
- `404`: Not Found
- `500`: Internal Server Error

### Get genre

- **Endpoint:** `/api/genre`
- **Method:** GET
- **Description:** Retrieve the list of game genres.

#### Responses

- `200`: Successful operation
- `400`: Bad Request
- `404`: Not Found
- `500`: Internal Server Error

### Get topGames for a specific year

- **Endpoint:** `/api/topGames/{year}`
- **Method:** GET
- **Description:** Returns the top games for the specified year.

#### Parameters

- `year` (path parameter): The year of the top games. (e.g., <span style="color: #228b22;">2021</span>, <span style="color: #228b22;">2022</span>, <span style="color: #228b22;">2023</span>, ...)

#### Responses

- `200`: Successful operation
- `400`: Bad Request
- `404`: Not Found
- `500`: Internal Server Error

### Get randomGame for slider

- **Endpoint:** `/api/randomGame`
- **Method:** GET
- **Description:** Retrieve a random game for use in a slider.

#### Responses

- `200`: Successful operation
- `400`: Bad Request
- `404`: Not Found
- `500`: Internal Server Error

### Get Game Detail

- **Endpoint:** `/api/game/{gameId}`
- **Method:** GET
- **Description:** Retrieve the details of a specific game by its ID.

#### Parameters

- `gameId` (path parameter): The unique identifier of the game.

#### Responses

- `200`: Successful operation
- `400`: Bad Request
- `404`: Not Found
- `500`: Internal Server Error
