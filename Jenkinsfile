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
          stage('Deploy') {
                steps {
                  dir("${WORKSPACE}"){
                          sh '''
                              git push https://git.heroku.com/bookstore-maven-client.git HEAD:master
                              '''
                      }
                }
            }
        }
}