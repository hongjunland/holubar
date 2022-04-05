pipeline {
    agent none
    options { skipDefaultCheckout(false) }
    stages {
        stage('git pull') {
            agent any
            steps {
                checkout scm
            }
        }
        stage('Docker Compose Run') {
            agent any
            steps {
                sh 'docker ps -f name=server -q \
                | xargs --no-run-if-empty docker container stop'
                sh 'docker container ls -a -f name=server -q \
                | xargs -r docker container rm'
                sh 'docker rmi -f server'

                sh 'docker-compose up'
            }
        }
        stage('Frontend build') {
            agent any
            steps {
                sh 'docker build -t web:latest /var/jenkins_home/workspace/NFT/frontend'
            }
        }
        stage('Docker run') {
            agent any
            steps {
                sh 'docker ps -f name=web -q \
        | xargs --no-run-if-empty docker container stop'

                sh 'docker container ls -a -f name=web -q \
        | xargs -r docker container rm'

                sh 'docker rmi -f web'

                sh 'docker run -d --name web \
                -p 80:80 \
                -p 443:443 \
                -v /home/ubuntu/sslkey/:/var/jenkins_home/workspace/nft/sslkey/ \
                -v /etc/localtime:/etc/localtime:ro \
                --network nftnet \
                web:latest'
            }
        }
    }
}
