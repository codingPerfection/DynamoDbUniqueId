# Dynamo db safe way to generate unique id

[Read tutorial](http://codingperfection.com/scalable-way-of-generating-unique-id-for-dynamo-db-atomic-counter/)

Use this scripts to safely generate unique ids for your dynamo tables

To use it:
 - install aws-sdk in directory.
 - update creds.js with your apiKey and secret.
 - run "node createTable.js"
 - run "node insertStartId.js"
 - run "node generateId.js"

 
You can export the snippet to generate id and include it in your project :)
