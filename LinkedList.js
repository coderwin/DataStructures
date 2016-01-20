define([], function(){

//普通链表
var Node = function(nodeVal) {
	this.nodeVal = nodeVal;
	this.next = null;
};
var LinkedList = function(){
	this.head = new Node("head");
};
LinkedList.prototype = {
	constructor: LinkedList,
	insert: function(nodeVal, item){
		var needInsertNode = new Node(nodeVal);
		var targetInsertNode = this.find(item);
		var nextNode = targetInsertNode.next;
		targetInsertNode.next = needInsertNode;
		needInsertNode.next = nextNode;
	},
	remove: function(item){
		var prevItem = this.findPrev(item);
		var removeItem = this.find(item);
		prevItem.next = removeItem.next;
		removeItem = null;
	},
	find: function(item){
		var cur = this.head;
		while(cur&&cur.nodeVal!=item){
			cur = cur.next;
		}
		return cur;
	},
	findPrev: function(item){
		var cur = this.head;
		while(cur.next!=item){
			cur = cur.next;
		}
		return cur;
	},
	length: function(){
		return this.toString().length;
	},
	toString: function(){
		var cur = this.head;
		var lists = [];
		while(cur.next!=null){
			lists.push(cur.next.nodeVal);
			cur = cur.next;
		}
		return lists
	}
};

//双向链表
var LNode = function(nodeVal) {
	this.nodeVal = nodeVal;
	this.next = null;
	this.prev = null;
};
var Llist = function(){
	this.head = new LNode("head");
}; 
Llist.prototype = new LinkedList;
Llist.prototype.constructor = Llist;
Llist.prototype.insert = function(nodeVal, item){
	var needInsertNode = new LNode(nodeVal);
	var targetInsertNode = this.find(item);
	var nextNode = targetInsertNode.next;
	targetInsertNode.next = needInsertNode;
	needInsertNode.next = nextNode;
	needInsertNode.prev = targetInsertNode;
	if(nextNode){
		(nextNode.prev = needInsertNode);
	}
};
Llist.prototype.remove = function(item){
	var removeItem = this.find(item);
	var prevItem = removeItem.prev;
	var afterItem = removeItem.next;
	prevItem.next = removeItem.next;
	afterItem.prev = prevItem;
	removeItem = null;
};
return Llist;

})
