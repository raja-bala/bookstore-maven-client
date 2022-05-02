pipeline {
    agent any
    triggers {
            pollSCM '* * * * *'
        }
          tools {nodejs "nodejs"}
          stages {
              stage('Test') {
                            steps {
                                sh '''npm run test:nowatch'''
                            }
                        }            
              stage('Build') {
              steps {
                  sh '''
                  npm install
                  npm run build
                  '''
              }
          }
          
          stage('Deploy') {
                steps {
                  dir("${WORKSPACE}"){
                          sh '''
                              git push https://git.heroku.com/book-store-maven.git HEAD:master
                              '''
                      }
                }
            }
        }
}