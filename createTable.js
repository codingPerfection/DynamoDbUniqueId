let AWS = require('aws-sdk');
AWS.config.update(require('./creds'));
let db = new AWS.DynamoDB();

var table = {
    "TableName": "idGenerator",
    "AttributeDefinitions": [
        {
            "AttributeName": "table",
            "AttributeType": "S"
            //    id: Number 
        },
    ],
    "KeySchema": [
        {
            "AttributeName": "table",
            "KeyType": "HASH"
        }
    ],
    "ProvisionedThroughput": {
        "ReadCapacityUnits": 1, //Read will never be used
        "WriteCapacityUnits": 1 //you should probably auto-scale this since we are using this for our atomic counter
    },
}

db.createTable(table).promise().then(() => {
    console.log("table idGenerator created");
}).catch(error => {
    console.log(error);
});;