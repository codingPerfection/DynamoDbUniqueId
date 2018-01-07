let AWS = require('aws-sdk');
AWS.config.update(require('./creds'));
let db = new AWS.DynamoDB();

let generateId = (table) => {
    return new Promise((res, rej) => {
        var params = {
            ExpressionAttributeValues: {
                ":incr": { N: '1' }
            },
            Key: {
                "table": { S: table }
            },
            ReturnValues: "ALL_NEW",
            TableName: "idGenerator",
            UpdateExpression: "SET id = id + :incr",
        };
        db.updateItem(params).promise().then(data => {
            res(parseInt(data.Attributes.id.N));
        }).catch(err => {
            rej(err);
        })
    })
}

generateId("myTestTable").then((id) => {
    console.log("new unique id for myTestTable is:", id);
})