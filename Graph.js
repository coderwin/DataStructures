define([], function(){
/*定点类*/
var Vertex = function(label,val){
	/*定点指向其他定点的边*/
	this.pathTo = [];
	/*定点编号*/
	this.label = label;
	/*存储顶点数据*/
	this.vertexVal = val;
	/*记录顶点是否被访问过*/
	this.marked = false;
	/*广度优先遍历遍历记录*/
	//this.steped = false;
};
/*图类*/
var Graph = function(v,varr){
	/*顶点数组*/
	this.vertexs = [];
	for (var i = 0; i < v; i++) {
		this.vertexs.push(new Vertex(i, varr[i]));
	}
	/*边条数*/
	this.edges = 0;
};
Graph.prototype = {
	constructor: Graph,
	/*在两个顶点之间增加边*/
	addEdge: function(v, w){
		this.vertexs[v].pathTo.push(w);
		this.vertexs[w].pathTo.push(v);
		this.edges++;
	},
	/*展示图*/
	showGraph: function(){
		var graph = [];
		for (var i = 0; i < this.vertexs.length; i++) {
			graph.push(i+"——>"+this.vertexs[i].pathTo);
		}
		console.log(graph);
		return graph;
	},
	/*深度优先遍历*/
	dfs: function(v,_new){
		if(!_new){
			for (var i = 0; i < this.vertexs.length; i++) {
				this.vertexs[i].marked = false
			}
		}
		this.vertexs[v].marked = true;
		if (this.vertexs[v]!=undefined) {
			console.log(" Visited vertex: " + v);
		}
		for(var w = 0;w<this.vertexs[v].pathTo.length;w++) {
			var k = this.vertexs[v].pathTo[w];
			if (!this.vertexs[k].marked) {
				this.dfs(k, true);
			}
		}
	},
	/*广度优先遍历*/
	bfs: function(v,_new){
		if(!_new){
			for (var i = 0; i < this.vertexs.length; i++) {
				this.vertexs[i].marked = false;
				this.vertexs[i].steped = false;
			}
		}
		this.vertexs[v].marked = true;
		this.vertexs[v].steped = true;
		if (this.vertexs[v]!=undefined&&!_new) {
			console.log(" Visited vertex: " + v);
		}
		for(var w = 0;w<this.vertexs[v].pathTo.length;w++) {
			var k = this.vertexs[v].pathTo[w];
			if (!this.vertexs[k].marked) {
				console.log(" Visited vertex: " + k);
				this.vertexs[k].marked = true;
			}
		}
		for(var w = 0;w<this.vertexs[v].pathTo.length;w++) {
			var k = this.vertexs[v].pathTo[w];
			//console.log(k)
			if(!this.vertexs[k].steped){
				this.bfs(k, true)
			}
			//this.bfs(k, true)
		}
	},
	/*深度优先查找*/
	findByDfs: function(v,val,_new){
		if(!_new){
			for (var i = 0; i < this.vertexs.length; i++) {
				this.vertexs[i].marked = false
			}
		}
		this.vertexs[v].marked = true;
		if (this.vertexs[v]!=undefined) {
			console.log(" Visited vertex: " + v);
			if (this.vertexs[v].vertexVal == val) {
				return this.vertexs[v]
			};
		}
		for(var w = 0;w<this.vertexs[v].pathTo.length;w++) {
			var k = this.vertexs[v].pathTo[w];
			if (!this.vertexs[k].marked) {
				var vertex = this.findByDfs(k,val,true);
				if(vertex){
					return vertex
				}
			}
		}
	},
	findByBfs: function(v,val,_new){
		if(!_new){
			for (var i = 0; i < this.vertexs.length; i++) {
				this.vertexs[i].marked = false;
				this.vertexs[i].steped = false;
			}
		}
		this.vertexs[v].marked = true;
		this.vertexs[v].steped = true;
		if (this.vertexs[v]!=undefined&&!_new) {
			console.log(" Visited vertex: " + v);
			if (this.vertexs[v].vertexVal == val) {
				return this.vertexs[v]
			};
		}
		for(var w = 0;w<this.vertexs[v].pathTo.length;w++) {
			var k = this.vertexs[v].pathTo[w];
			if (!this.vertexs[k].marked) {
				this.vertexs[k].marked = true;
				console.log(" Visited vertex: " + k);
				if (this.vertexs[k].vertexVal == val) {
					return this.vertexs[k]
				};
			}
		}
		for(var w = 0;w<this.vertexs[v].pathTo.length;w++) {
			var k = this.vertexs[v].pathTo[w];
			//console.log(k)
			if(!this.vertexs[k].steped){
				//this.bfs(k, true)
				var vertex = this.findByBfs(k,val,true);
				if(vertex){
					return vertex
				}
			}
			//this.bfs(k, true)
		}
	}
};
return Graph;
})