define(["./linkedList"], function(linkedList){
var Set = function(){
	this.dataSet = new linkedList();
};
Set.prototype = {
	constructor: Set,
	/*添加*/
	add: function(data){
		this.dataSet.insert(data,"head");
	},
	/*移除*/
	del: function(data){
		this.dataSet.remove(data);
	},
	/*包含*/
	contain: function(data){
		var cur = this.dataSet.head;
		while(cur&&cur.nodeVal!=data){
			cur = cur.next;
		}
		return cur!=null
	},
	/*子集*/
	subSet: function(pSet){
		var cur = this.dataSet.head;
		while(cur&&pSet.contain(cur.nodeVal)){
			cur = cur.next;
		}
		return cur==null
	},
	/*交集*/
	intersect: function(pSet){
		var intersect = new Set();
		var cur = this.dataSet.head;
		while(cur){
			if(cur.nodeVal!="head"&&pSet.contain(cur.nodeVal)) {
				intersect.add(cur.nodeVal);
			}
			cur = cur.next;
		}
		return intersect;
	},
	/*并集*/
	union: function(pSet){
		var cur = this.dataSet.head;
		while(cur){
			if(!pSet.contain(cur.nodeVal)){
				pSet.add(cur.nodeVal)
			}
			cur = cur.next;
		}
		return pSet
	},
	/*是己非彼*/
	difference: function(pSet){
		var diff = new Set();
		var cur = this.dataSet.head;
		while(cur){
			if(!pSet.contain(cur.nodeVal)){
				diff.add(cur.nodeVal);
			}
			cur = cur.next;
		}
		return diff
	},
	/*集合长度*/
	length: function(){
		return this.dataSet.length();
	},
	/*展示集合*/
	showSet: function(){
		return this.dataSet.toString()
	}
};
return Set
})