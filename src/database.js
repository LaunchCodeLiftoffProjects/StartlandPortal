const MongoClient = require('mongodb').MongoClient
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

    MongoClient.connect('mongodb+srv://StartlandAdmin:9mTqQIcpIGFHhV3I@registeredusers.vaujr.mongodb.net/<dbname>?retryWrites=true&w=majority', { useUnifiedTopology: true })
    
    .then(client => {
      console.log('Connected to Database')
      
      const db = client.db('startland-users')
      const usersCollection = db.collection('users')

      app.use(bodyParser.urlencoded({
        extended: true}))

      app.get('/', (req, res) => {
        res.sendFile('/Users/kafra/Desktop/Launch_Code/StartlandPortal-Project/StartlandPortal-Project/src' + '/app/user-registration/user-registration.component.html')
      })

      app.post('/user-registration', (req, res) => {
        usersCollection.insertOne(req.body)
        .then(result => {
          console.log(result)
        })
        .catch(error => console.error(error))
    })

      app.listen(3000, function() {})
      
    })
    
    .catch(error => console.error(error))