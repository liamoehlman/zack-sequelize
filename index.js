var zack = require('zack'),
    abbott = require('abbott');

module.exports = function(sequelize) {
    var settings = {
            create: function(callback) {
                abbott(sequelize.transaction())(callback);
            },
            commit: function(transaction, callback) {
                abbott(transaction.commit())(callback);
            },
            rollback: function(transaction, callback) {
                abbott(transaction.rollback())(callback);
            }
        };

    return zack(settings);
};