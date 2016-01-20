define([], function(){
//数组扩展列表
var List = function() {
  this.listSize = 0;
  this.pos = 0;
  this.listStore = [].slice.call(arguments) || [];
};
List.prototype = {
  constructor: List,

  find: function(element){
    for (var i = 0; i < this.listStore.length; ++i) {
      if (this.listStore[i] == element) {
        return i;
      }
    }
    return -1;
  },

  append: function(element){
    this.listStore[this.listSize++] = element;
  },
  
  insert: function(element, after){
    var insertPos = this.find(after);
    if (insertPos > -1) {
      this.listStore.splice(insertPos+1, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  },

  remove: function(element){
    var foundAt = this.find(element);
    if (foundAt > -1) {
      this.listStore.splice(foundAt,1);
      --this.listSize;
      return true;
    }
    return false;
  },

  clear: function(){
    delete this.listStore;
    this.listStore = [];
    this.listSize = this.pos = 0;
  },

  contains: function(element){
    for (var i = 0; i < this.listStore.length; ++i) {
    if (this.listStore[i] == element) {
      return true;
    }
  },

  front: function(){
    this.pos = 0;
  },
  end: function() {
    this.pos = this.listSize-1;
  },

  prev: function(){
    if (this.pos > 0) {
    --this.pos;
  },
  next: function(){
    if (this.pos < this.listSize-1) {
    ++this.pos;
  },

  
  currPos: function(){
    return this.pos;
  },
  moveTo: function(pos){
    this.pos = pos;
  },

  getElement: function(){
    return this.listStore[this.pos];
  },

  length: function(){
    return this.listSize;
  },
  toString: function(){
    return this.listStore;
  }
};
return List
})
