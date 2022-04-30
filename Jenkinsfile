pipeline {
    agent any
    triggers {
            pollSCM '* * * * *'
        }
          stages {
              stage('Build') {
              steps {
                  sh 'npm install'
              }
          }
          stage('Test') {
              steps {
                  sh 'npm test'
              }
          }
        }
}