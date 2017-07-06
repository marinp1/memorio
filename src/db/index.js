const Store = require('jfs');

let db;

export function createDb() {
  db = new Store('data', { type: 'memory' });
}

export function addUser(username, password) {
  return db.save(username, {
    username,
    password,
  }, err => (err === null));
}

export function getUser(username, password) {
  return db.get(username, (err, obj) => {
    if (err !== null) {
      return false;
    }
    if (obj.password !== password) {
      return false;
    }
    return obj.username;
  });
}
