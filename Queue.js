define([], function(){
var Queue = function() {
	this.queueStore = [].slice.call(arguments);
};

Queue.protoytpe = {
	constructor: Queue,
	enqueue: function(element){
		this.queueStore.push(element);
	},
	dequeue: function(){
		return this.queueStore.shift();
	},
	front: function(){
		return this.queueStore[0];
	},
	back: function(){
		return this.queueStore[this.queueStore.length-1];
	},
	isEmpty: function(){
		return (this.dataStore.length == 0)? true: false
	},
	toString: function(){
		return this.queueStore;
	}
};
return Queue
})
