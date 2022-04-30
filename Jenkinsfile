pipeline {
    agent any
    triggers {
            pollSCM '* * * * *'
        }
          tools {nodejs "nodejs"}
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
                  sh '''npm run test'''
              }
          }
        }
}