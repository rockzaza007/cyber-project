# Cybersecurity Project

## Description

This project is aimed at developing a cybersecurity application that implements various security features including CRUD operations, authentication, authorization, encryption, and Docker containerization.

## Features

- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on sensitive data.
- **Authentication**: Implement user authentication to ensure secure access to the application.
- **Authorization**: Enforce access control policies to determine user permissions.
- **Encryption**: Utilize encryption algorithms to protect sensitive data at rest and in transit.
- **Docker**: Containerize the application using Docker for easy deployment and scalability.

## Technologies Used

- **Frontend**: [React](https://reactjs.org/), [Material-UI](https://mui.com/)
- **Backend**: [Node.js](https://nodejs.org/), [Starpi](https://strapi.io/)
- **Database**: [Postgres](https://www.postgresql.org/)
- **Authentication**: [JWT (JSON Web Tokens)](https://jwt.io/)
- **Authorization**: Role-based access control (RBAC)
- **Encryption**: [crypto](https://www.npmjs.com/package/crypto-js), [OpenSSL](https://www.openssl.org/)
- **Containerization**: [Docker](https://www.docker.com/)

## Installation

Follow these steps to set up and run the project locally:

1. Clone the repository:

```bash
git clone https://github.com/your-username/cybersecurity-project.git
```

2. Navigate to the project directory:

```bash
cd cyber-project
```

3. Install dependencies for both frontend and backend:

```bash
cd frontend
yarn install

cd ../backend
yarn install
```

## Configuration

1. Configure environment variables:

Set up environment variables for database connection, JWT secret, and other configurations. Refer to the .env.example files provided in both frontend and backend directories.


## Usage

1. Start Frontend:
```bash
cd frontend
yarn start
```
Access the application in your web browser at http://localhost:3000.

2. Start Backend API:
```bash
cd backend
docker build -t cyber-app:1.0.0 .
docker-compose up
```
Configuration accroding .env file

## Contributing
If you want to contribute to this project, please follow the contribution guidelines provided in the CONTRIBUTING.md file.

## License
This project is licensed under the MIT License.

## Credits
Include credits or acknowledgments for any external resources, libraries, or inspiration used in the project.

## Contact
For inquiries or feedback, contact [s6502041520129@email.kmutnb.ac.th].

## Acknowledgements
Any acknowledgements or thanks you want to give can be included here.


Feel free to modify this template according to your specific project details, such as changing the technologies used, adding more detailed instructions, or including additional sections.
