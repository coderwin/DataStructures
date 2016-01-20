define([], function(){
var Stack = function() {
	this.top = 0;
	this.stackStore = [].slice.call(arguments);
};
Stack.prototype = {
	constructor: Stack,
	push: function(element) {
		this.stackStore[this.top] = element;
		this.top++;
	},
	pop: function(){
		var pop = this.stackStore[this.top-1];
		this.stackStore.splice(this.top-1,1);
		this.top--;
		return pop;
	},
	peek: function(){
		return this.stackStore[this.top-1];
	},
	clear: function(){
		this.top = 0;	
		this.stackStore = [];
	},
	length: function(){
		return this.top;
	}
};
return Stack;
})
