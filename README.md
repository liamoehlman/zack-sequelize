# zack-sequelize
returns a configured instance of [zack](https://www.npmjs.com/package/zack) for use with sequelize

```javascript
var transact = require('zack-sequelize')(sequelize)


 // wrap a task with a transaction.
var doThing = transact(function(transaction, a, b, callback){
    callback(null, a + b);
});

// call the task, transactions are automatically handled.
doThing(10, 20, function(error, result){
    // etc...
});
```