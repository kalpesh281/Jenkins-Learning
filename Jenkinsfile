pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'kalpesh0524/backend'
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo "📥 Cloning repository..."
                git url: 'https://github.com/kalpesh281/Jenkins-Learning.git', branch: 'main'
            }
        }

        stage('Create .env File') {
            steps {
                echo "📝 Creating secure .env file from Jenkins credentials..."
                withCredentials([
                    string(credentialsId: 'jwt-secret', variable: 'JWT_SECRET'),
                    string(credentialsId: 'mongodb-uri', variable: 'MONGODB_URI'),
                    string(credentialsId: 'port', variable: 'PORT')
                ]) {
                    writeFile file: '.env', text: """PORT=$PORT
MONGODB_URI=$MONGODB_URI
JWT_SECRET=$JWT_SECRET"""
                }
            }
        }

        stage('Build Docker Image (backend)') {
            steps {
                echo "🐳 Building Docker image using docker compose..."
                sh 'docker compose build backend'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    echo "🔐 Logging into Docker Hub..."
                    sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                echo "📤 Pushing Docker image to Docker Hub..."
                sh "docker tag backend $DOCKER_IMAGE:latest"
                sh "docker push $DOCKER_IMAGE:latest"
            }
        }
    }

    post {
        success {
            echo '✅ Build and push completed successfully!'
        }
        failure {
            echo '❌ Build failed. Check the logs above.'
        }
    }
}
