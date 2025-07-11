pipeline {
    agent any

    environment {
        DOCKER_REPO = "kalpesh0524/backend" 
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo '📥 Cloning repository...'
                git branch: 'main', url: 'https://github.com/kalpesh281/Jenkins-Learning.git'
            }
        }

        stage('Create .env File') {
            steps {
                echo '📝 Creating secure .env file from Jenkins credentials...'
                withCredentials([
                    string(credentialsId: 'backend_port', variable: 'PORT'),
                    string(credentialsId: 'mongo_uri', variable: 'MONGODB_URI'),
                    string(credentialsId: 'jwt_secret', variable: 'JWT_SECRET')
                ]) {
                    writeFile file: './backend/.env', text: """
PORT=$PORT
MONGODB_URI=$MONGODB_URI
JWT_SECRET=$JWT_SECRET
""".stripIndent()
                }
            }
        }

        stage('Build Docker Image (backend)') {
            steps {
                echo '🐳 Building Docker image using docker-compose...'
                sh 'docker compose build backend'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                echo '🔐 Logging into Docker Hub...'
                withCredentials([
                    usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')
                ]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Image to Docker Hub') {
            steps {
                echo '🚀 Tagging and pushing backend image to Docker Hub...'
                sh '''
                    docker push $DOCKER_REPO:latest
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completed successfully!'
        }
        failure {
            echo '❌ Pipeline failed. Check logs for details.'
        }
    }
}
