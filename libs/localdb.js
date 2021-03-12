export default class localDB {
  constructor(dbName, tableName, fileds) {
    /*
      dbName = String,
      tableName = String,
      fileds = Object({
        "field1" : { "unique": true },
        "field2" : { "unique": false },
        "field3" : { "unique": false }
      })
    */

    this.private = true;
    try {
      localStorage;
    } catch (err) {
      this.private = false;
    }

    if (this.private) {
      this.dbName = dbName;
      this.tableName = tableName;
      this.fileds = fileds;

      this.init(dbName, tableName, fileds);
    } else {
      this.data = new Object();
      this.errInit(dbName, tableName, fileds);
    }
  }

  async init(dbName, tableName, fields) {
    const result = new Promise(resolve => {
      const request = window.indexedDB.open(dbName, 1);

      request.onupgradeneeded = () => {
        const db = request.result;
        const fieldsNames = Array();

        for (let field in fields) {
          fieldsNames.push(field);
        }

        const store = db.createObjectStore(tableName, { keyPath: fieldsNames[0] });
        fieldsNames.forEach((name, i) => {
          store.createIndex('by_' + name, name, { unique: fields[name].unique });
        });

        resolve(db);
      };
      request.onsuccess = () => {
        resolve(request.result);
      };
    });

    this.db = await result;

    this.setItem = async function (object) {
      const request = this.db.transaction([this.tableName], 'readwrite').objectStore(this.tableName).put(object);
      return await new Promise(resolve => {
        request.onerror = err => {
          resolve(err);
        };
        request.onsuccess = function () {
          resolve(request.result);
        };
      });
    };

    this.getItem = async function (name) {
      const request = this.db.transaction([this.tableName], 'readonly').objectStore(this.tableName).get(name);
      return await new Promise(resolve => {
        request.onerror = err => {
          resolve(err);
        };
        request.onsuccess = function () {
          resolve(request.result);
        };
      });
    };

    this.getAll = async function () {
      const request = this.db.transaction([this.tableName], 'readonly').objectStore(this.tableName).getAll();
      return await new Promise(resolve => {
        request.onerror = err => {
          resolve(err);
        };
        request.onsuccess = function () {
          resolve(request.result);
        };
      });
    };
  }

  async errInit() {
    this.setItem = async function (object) {
      this.data[object.word] = object;
    };

    this.getItem = async function (name) {
      return this.data[name];
    };

    this.getAll = async function () {
      let result = new Array();
      for (let key in this.data) {
        result.push(this.data[key]);
      }
      return result;
    };
  }
}

/*

  async addError(name) {
    let word = await this.getItem(name);
    if (!word) word = { word: name, error: 0, success: 0, state: '' };
    word.error += 1;
    if (word.state === '-') {
      if (word.success > 0) word.success -= 1;
    } else word.state = '-';
    this.setItem(word);
  }

  async addSuccess(name) {
    let word = await this.getItem(name);
    if (!word) word = { word: name, error: 0, success: 0, state: '' };
    word.success += 1;
    if (word.state === '+') {
      if (word.error > 0) word.error -= 1;
    } else word.state = '+';
    this.setItem(word);
  }

  async getAllByIndexKey(index, key) {
    const array = await this.getAll();
    let result = new Array();
    array.forEach(item => {
      for (let indx in item) {
        if (indx === index && item[indx] === key) result.push(item);
      }
    });
    return result;
  }

*/
