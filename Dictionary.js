define([], function(){
var Dictionary = function(){
	this.records = {};
	this.values = [];
	this.keys = [];
};
Dictionary.prototypr = {
	constructor: Dictionary,
	add: function(key, val){
		this.records[key] = val;
		this.values.push(val);
		this.keys.push(key);
	},
	delKey: function(keyOrVal){
		if (keyOrVal in this.records) {
			delete this.records[keyOrVal];
		}else{
			this.delVal(keyOrVal)
		}
		this.getKeys();
		return this;
	},
	delVal: function(val){
		for(var k in this.records){
			if (this.records[k]==val) {
				delete this.records[k];
			}
		}
		this.getVals();
		return this;
	},
	getKeys: function(){
		var keys = [];
		for(var k in this.records){
			keys.push(k)
		}
		return this.keys = keys;
	},
	getVals: function(){
		var vals = [];
		for(var k in this.records){
			vals.push(this.records[k])
		}
		return this.values = vals;
	},
	clear: function(){
		this.keys = [];
		this.values = [];
		this.records = {};
		return this
	},
	length: function(){
		return this.keys.length
	}
}
return Dictionary;
})