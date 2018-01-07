let AWS = require('aws-sdk');
AWS.config.update(require('./creds'));
let db = new AWS.DynamoDB.DocumentClient();

let params = {
    TableName: 'idGenerator',
    Item: {
        table: 'myTestTable',
        id: 1,
    }
};


db.put(params).promise((data)=>{
    console.log("Atomic counter for 'myTestTable' created, starting id is 1");
})