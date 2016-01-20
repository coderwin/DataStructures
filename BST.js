define([], function(){
var Node = function(nodeVal, left, right){
	this.left = left;
	this.right = right;
	this.nodeVal = nodeVal;
};
Node.prototype.showVal = function(){
	return this.nodeVal;
};
var BST = function(){
	this.root = null;
};
BST.prototype = {
	constructor: BST,
	/*节点到树的转换*/
	reload: (function(){
		var temp = null;
		return function(node){
			temp||(temp=new BST());
			var callee = arguments.callee;
			if(node != null){
				temp.insert(node.nodeVal);
				callee(node.left);
				callee(node.right);
			}
			return temp
		}
	})(),
	/*插入树*/
	insert: function(data){
		var node = new Node(data, null, null);
		if(!this.root){
			this.root = node;
		}else{
			var current = this.root;
			var parent;
			while(true){
				parent = current;
				if (current.nodeVal> data) {
					current = current.left;
					if (current == null) {
						parent.left = node;
						break;
					}
				}else{
					current = current.right;
					if(current == null){
						parent.right = node;
						break
					}
				}	
			}
		}
	},
	/*移除节点*/
	/*remove: function(data){
		var parent = this.find(data);
		var current = parent;

		while (!(current.right == null)) {
			current = current.right;
		}

		parent.nodeVal = current.nodeVal;
		current = null;

		return this.root;
	},*/

	remove: function(data){
		return this.root = this.removeNode(this.root,data);
	},
	removeNode: function(node, data){
		if(node==null){
            return null;
        }
        if(data==node.nodeVal){
            //如果没有子节点
            if(node.right==null&&node.left==null){
                return null;//直接将节点设为空
            }
            //如果没有左子节点
            if(node.left==null){
                return node.right;//直接指向其右节点
            }
            //如果没有右子节点
            if(node.right==null){
                return node.left;
            }
            //如果有两个节点
            if(node.right!=null&&node.left!=null){
                var rightNode = node.right;
                /*找到最小的右节点*/
                while(rightNode.left!=null){
		            rightNode = rightNode.left;
		        }
		        var tempNode = rightNode;

                node.nodeVal = tempNode.nodeVal;
                node.right = this.removeNode(node.right, tempNode.nodeVal);//依次寻找
                return node;
            }
        }else if (data < node.nodeVal) {
			node.left = this.removeNode(node.left, data);
			return node;
		}else {
			node.right = this.removeNode(node.right, data);
			return node;
		}
	},
	/*查找节点*/
	find: function(data){
		var current = this.root;
		while(current != null){
			if (current.nodeVal==data) {
				return current
			}else if(current.nodeVal< data){
				current = current.right;
			}else{
				current = current.left;
			}
		}
	},
	min: function(){
		return this.inOrder().shift();
		//这样也行
		var current = this.root;
		while (!(current.left == null)) {
			current = current.left;
		}
		return current.nodeVal;
	},
	max: function(){
		return this.inOrder().pop();
		var current = this.root;
		while (!(current.right == null)) {
			current = current.right;
		}
		return current.nodeVal;
	},
	/*前序*/
	preOrder: (function(node){
		var order = [];
		return function(node, notOrder){
			if(!notOrder){
				order = [];
			}
			var callee = arguments.callee;
			if(node != null){
				order.push(node.nodeVal);
				callee(node.left, true);
				callee(node.right, true);
			}
			return order
		}
	})(),
	/*中序*/
	inOrder: (function(node){
		var order = [];
		return function(node, notOrder){
			if(!notOrder){
				order = [];
			}
			var callee = arguments.callee;
			if(node != null){
				callee(node.left, true);
				order.push(node.nodeVal);
				callee(node.right, true);
			}
			return order
		}
	})(),
	/*后序*/
	postOrder: (function(node){
		var order = [];
		return function(node, notOrder){
			if(!notOrder){
				order = [];
			}
			var callee = arguments.callee;
			if(node != null){
				callee(node.left, true);
				callee(node.right,true);
				order.push(node.nodeVal);
			}
			return order
		}
	})()
};
return BST;
})
