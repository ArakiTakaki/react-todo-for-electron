const storage = require('electron-json-storage');

export default class Storage{

  static set(name,data){
    storage.set(name,data,function(err){
      if (err) throw err;
    })
  }

  static get(name){
    return storage.get(name,function(err,data){
      if (err) throw err;
      return data;
    });
  }
}
