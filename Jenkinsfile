pipeline {
    agent any
    triggers {
            pollSCM '* * * * *'
        }
         tools {npm "npm"}
          stages {
              stage('Build') {
              steps {
                  sh '''
                  npm install
                  npm run build
                  '''
              }
          }
          stage('Test') {
              steps {
                  sh '''npm test'''
              }
          }
        }
}