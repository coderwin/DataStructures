define([], function(){

//获取大于一个数的最小素数
var getMaxPrime = function(n){
	for (var i = n; i < 2*n; i++) {
		var flag = false;
		for (var j = 2; j <i; j++) {
			if(i%j==0){
				flag = true;
				break
			}
		}
		if (!flag) return i
	}
};

var HashTable = function(max) {
	this.hashKey = [];
	this.hashVal = [];
	//hash table长度
	//var tableLength = getMaxPrime(max);
	this.table = new Array(getMaxPrime(max));
};

HashTable.prototype = {
	constructor: HashTable,
	//hash函数
	hashFunc: function(key){
		var H = 37;
		var hashKey = 0;
		for (var i = 0; i < key.length; ++i) {
			hashKey += H * hashKey + key.charCodeAt(i);
		}
		hashKey = hashKey % this.table.length;
		if (hashKey < 0) {
			hashKey += this.table.length-1;
		}
		return parseInt(hashKey);
	},
	put: function(key, data){
		this.hashKey.push(this.hashFunc(key));
		this.hashVal.push(data);
		this.table[this.hashFunc(key)] = data;
	},
	get: function(key){
		return this.table[this.hashFunc(key)];
	},
	showTable: function(){
		var ohash = {};
		for (var i = 0; i < this.table.length; ++i) {
			if (this.table[i] != undefined) {
				ohash[i] = this.table[i];
			}
		}
		return JSON.stringify(ohash)
	}
};

//hash冲突的解决方案
//1、开链法
var ChainsHashTable = function(max){
	HashTable.call(this);
	this.chains();
};
ChainsHashTable.prototype = new HashTable()
ChainsHashTable.prototype.constructor = ChainsHashTable;
ChainsHashTable.prototype.chains = function(){
	for (var i = 0; i < this.table.length; ++i) {
		this.table[i] = [];
	}
};
ChainsHashTable.prototype.put = function(key, data){
	var pos = this.hashFunc(key);
	var index = 0;
	while(this.table[pos][index]!=undefined){
		index += 2;
	}
	this.table[pos][index] = key;
	this.table[pos][index+1] = data;
};
ChainsHashTable.prototype.get = function(key){
	var pos = this.hashFunc(key);
	var index = 0;
	while(this.table[pos][index]!=key){
		index += 2
	}
	return this.table[pos][index+1];
};
ChainsHashTable.prototype.showTable = function(){
	var ohash = {};
	for (var i = 0; i < this.table.length; ++i) {
		if (this.table[i].length != 0) {
			var arr = [];
			for (var j = 0; j < this.table[i].length; j+=2) {
				arr.push(this.table[i][j+1]);
			}
			ohash[i] = arr;
		}
	}
	return JSON.stringify(ohash)
};

//2、线性探测法
var CheckHashTable = function(max){
	HashTable.call(this);
	this.value = new Array(getMaxPrime(max));
};
CheckHashTable.prototype = new HashTable();
CheckHashTable.prototype.constructor = CheckHashTable;
CheckHashTable.prototype.put = function(key, data){
	var pos = this.hashFunc(key);
	var prevPos = pos;
	while(this.table[pos]!=undefined){
		pos++;
	}
	this.table[pos] = key;
	this.value[pos] = data;
};
CheckHashTable.prototype.get = function(key){
	var pos = this.hashFunc(key);
	while(this.table[pos]!=key){
		pos++
	}
	return this.value[pos];
};


return CheckHashTable;
})
