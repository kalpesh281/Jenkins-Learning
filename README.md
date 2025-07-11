# Jenkins-Learning

A full-stack project demonstrating CI/CD automation using Jenkins, Docker, and Render.  
This repository contains a backend (Node.js/Express) and a frontend (React) application.

## Features

- Automated CI/CD pipeline using Jenkins
- Dockerized backend service
- Secure environment variable management
- Automatic deployment to Render after successful builds
- Jenkins webhook automation for continuous integration

## Project Structure

```
.
├── backend/      # Node.js/Express backend API
├── frontend/     # React frontend
├── Jenkinsfile   # Jenkins pipeline definition
└── ...
```

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)
- [Jenkins](https://www.jenkins.io/) (for CI/CD)
- [Render](https://render.com/) account (for deployment)

### Local Development

1. **Clone the repository:**

   ```sh
   git clone https://github.com/kalpesh281/Jenkins-Learning.git
   cd Jenkins-Learning
   ```

2. **Backend setup:**

   - Create a `.env` file in the `backend/` directory with the following:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```
   - Start the backend:
     ```sh
     cd backend
     npm install
     npm run dev
     ```

3. **Frontend setup:**
   - Update `frontend/src/constant/config.js` if needed.
   - Start the frontend:
     ```sh
     cd ../frontend
     npm install
     npm start
     ```

### Docker Compose

To run the backend using Docker Compose:

```sh
docker compose up --build backend
```

## CI/CD Pipeline with Jenkins

This project uses Jenkins for continuous integration and deployment.  
The pipeline is defined in the `Jenkinsfile` and includes the following automated steps:

1. **Clone Repository:** Jenkins pulls the latest code from GitHub.
2. **Create .env File:** Jenkins injects secrets from its credentials store into a `.env` file for the backend.
3. **Build Docker Image:** Jenkins builds the backend Docker image using Docker Compose.
4. **Login to Docker Hub:** Jenkins logs in using stored Docker Hub credentials.
5. **Push Image:** Jenkins pushes the backend image to Docker Hub.
6. **Deploy to Render:** Jenkins triggers a deployment on Render using a deploy hook (webhook).

### Jenkins Webhook Automation

- **GitHub → Jenkins:**  
  Configure a webhook in your GitHub repository to notify Jenkins of new pushes:

  - Go to your GitHub repo → Settings → Webhooks → Add webhook.
  - Payload URL: `http://<your-jenkins-server>/github-webhook/`
  - Content type: `application/json`
  - Events: Just the push event.

- **Jenkins → Render:**  
  Jenkins triggers Render deployment via a deploy hook URL.  
  Example dummy deploy hook:
  ```
  https://api.render.com/deploy/srv-xxxxxxxxxxxxxxxxxxxxxxxx?key=xxxxxxxxxxxxxxxx
  ```
  This is stored as a Jenkins secret (`render_deploy_hook`).

### Example Jenkins Credentials (Dummy Values)

- `backend_port`: `5000`
- `mongo_uri`: `mongodb://dummy:dummy@localhost:27017/dummy`
- `jwt_secret`: `dummysecret`
- `dockerhub` (username/password): `dummyuser` / `dummypassword`
- `render_deploy_hook`:  
  `https://api.render.com/deploy/srv-dummyid?key=dummykey`

## Environment Variables

- Managed securely via Jenkins credentials for CI/CD.
- Locally, use a `.env` file in the `backend/` directory.

## License

MIT
