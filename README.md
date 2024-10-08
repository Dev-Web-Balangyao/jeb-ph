# JEB - Hire Skilled Professionals Online

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Development](#development)
- [Linting and Formatting](#linting-and-formatting)
- [Building the Project](#building-the-project)
- [Environment Variables](#environment-variables)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Project Structure
jeb-ph/ ├── backend/ │ ├── src/ │ │ ├── controllers/ │ │ ├── models/ │ │ ├── routes/ │ │ ├── app.ts │ │ └── server.ts │ ├── .env │ ├── package.json │ ├── tsconfig.json │ └── ... ├── frontend/ │ ├── public/ │ │ ├── index.html │ │ └── ... │ ├── src/ │ │ ├── assets/ │ │ ├── components/ │ │ ├── hooks/ │ │ ├── pages/ │ │ ├── services/ │ │ ├── utils/ │ │ ├── App.tsx │ │ └── index.tsx │ ├── .dockerignore │ ├── package.json │ ├── tsconfig.json │ └── ... ├── .gitignore ├── docker-compose.yml └── README.md

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 20 or higher)
- [Docker](https://www.docker.com/)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/Dev-Web-Balangyao/jeb-ph.git
    cd jeb-ph
    ```

2. **Install backend dependencies**:

    ```sh
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:

    ```sh
    cd ../frontend
    npm install
    ```

### Running the Project

You can run the project using Docker Compose.

1. **Navigate to the root directory**:

    ```sh
    cd ..
    ```

2. **Build and run the Docker containers**:

    ```sh
    docker-compose up --build
    ```

This will start both the backend and frontend services. The backend will be accessible on port 5000 and the frontend on port 3000.

### Development

#### Backend

To run the backend in development mode with hot-reloading:

```sh
cd backend
npm run dev
```

#### Frontend

To run the frontend in development mode with hot-reloading:


```sh
cd frontend
npm start
```

### Limiting and Formatting

#### Backend

To lint the backend code:

```sh
cd backend
npm run lint
```
To format the backend code:

```sh
cd backend
npm run format
```

To format the backend code:

#### Frontend

To lint the frontend code:

```sh
cd frontend
npm run lint
```

To format the frontend code:

```sh
cd frontend
npm run format
```

### Building the Project

#### Backend

To build the backend:

```sh
cd backend
npm run build
```

#### Frontend

To build the frontend:

```sh
cd frontend
npm run build
```

### Environment Variables

Create a `.env` file in the `backend` directory to store environment variables:

```plaintext
PORT=
DATABASE_URL=
```


### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Docker](https://www.docker.com/)
- [Express](https://expressjs.com/)
- [Create React App](https://create-react-app.dev/)