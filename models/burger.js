const orm = require("../config/orm.js");

var burger = {

    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne: function(cols, val, cb){
        orm.insertOne("burgers", cols, val, function(res){
            cb(res);
        });
    },

    updateOne: function(col, val, cb){
        orm.updateOne("burgers", col, val, function(res){
            cb(res);
        });
    }
};

module.exports = burger;