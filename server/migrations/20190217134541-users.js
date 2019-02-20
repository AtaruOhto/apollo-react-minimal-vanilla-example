'use strict';

let dbm = null;
let type = null;
let seed = null;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  return db.createTable('users', {
    id: { type: 'int', primaryKey: true },
    name: 'string',
    createdAt: 'date',
    updatedAt: 'date'
  }, callback)
};

exports.down = function(db) {
  return db.dropTable('users', callback);
};

exports._meta = {
  "version": 1
};
