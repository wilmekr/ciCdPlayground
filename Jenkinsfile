pipeline {
    agent any

    tools {
        nodejs 'yarn'
    }

    stages {
        stage('Checkout'){
            steps{
                sh 'yarn'
                sh 'yarn build'
                git branch: 'main', url: 'https://github.com/wilmekr/ciCdPlayground.git'
            }
        }

        stage('UnitTest') {
            steps {
                sh 'yarn test'
            }
        }

        stage('IntegrationTest') {
            steps {
                sh 'yarn test:e2e'
            }
            post {
                success {
                    junit '**/reports/**/*.xml'
                }
            }
        }
    }
}
