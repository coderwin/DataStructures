/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/*链表测试*/
	/*var testStructures = require("./linkedList");
	var test = new testStructures();
	var cities = new testStructures();
	cities.insert("Conway", "head");
	cities.insert("Russellville", "Conway");
	cities.insert("Carlisle", "Russellville");
	cities.insert("Alma", "Carlisle");

	cities.insert("ChenJian", "Russellville");
	console.log(cities.toString())*/

	/*散列表测试*/
	/*var testStructures = require("./hashTable");

	var someNames = ["David", "Jennifer", "Donnie", "Raymond",
	"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
	var someAges = [21,22,23,24,25,26,27,28,29];
	var hTable = new testStructures(137);
	for (var i = 0; i < someNames.length; ++i) {
		hTable.put(someNames[i],someAges[i]);
		console.log(hTable.hashFunc(someNames[i]))
	}
	console.log(hTable.showTable());
	console.log(hTable.get("Jonathan"))*/

	/*集合测试*/
	/*var testStructures = require("./Set");
	var set = new testStructures();
	var someNames = ["David", "Jennifer", "Donnie", "Raymond",
	"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
	for (var i = 0; i < someNames.length; ++i) {
		set.add(someNames[i]);
	}
	console.log(set.showSet())
	set.del("Danny");
	console.log(set.showSet())

	console.log(set.contain("Danny"))
	console.log(set.contain("Clayton"))

	var subset = new testStructures();
	subset.add("David");
	subset.add("Donnie");
	console.log(subset.subSet(set));

	subset.add("xxx");
	subset.add("Mike");
	console.log(subset.intersect(set).showSet())
	console.log(subset.union(set).showSet())



	subset.add("xxxxxxxxx");
	subset.add("Mikexxxxx");
	console.log(subset.difference(set).showSet())

	console.log(subset.length())*/


	/*BST二叉树测试*/
	/*var Bst = require("./BST");
	var bst = new Bst();
	bst.insert(80);
	bst.insert(75);
	bst.insert(88);
	bst.insert(74);
	bst.insert(79);
	console.log(bst.inOrder(bst.root))
	console.log(bst.preOrder(bst.root))
	console.log(bst.postOrder(bst.root))
	console.log(bst.max())
	console.log(bst.min())

	console.log(bst.root)
	console.log(bst.reload(bst.root).root);

	console.log("------------------------------------------------")
	console.log(bst.remove(80));
	console.log(bst.root)
	console.log("------------------------------------------------")
	console.log(bst.inOrder(bst.root))*/

	/*测试图Graph*/
	var Graph = __webpack_require__(1);
	/*构建图*/
	g = new Graph(5,[11,22,33,44,55]);
	/*构建边*/
	g.addEdge(0, 1);
	g.addEdge(0, 2);
	g.addEdge(1, 3);
	g.addEdge(2, 4);
	g.addEdge(0, 3);
	/*展示图*/
	console.log("showGraph:")
	g.showGraph();
	/*深度优先遍历*/
	console.log("dfs:")
	g.dfs(0);
	/*深度优先算法查找*/
	console.log("findByDfs:")
	var vertex = g.findByDfs(0,33);
	console.log(vertex);
	/*广度优先遍历*/
	console.log("bfs:")
	g.bfs(0);

	/*广度优先算法查找*/
	console.log("findByBfs:")
	var vertexDfs = g.findByBfs(0,33);
	console.log(vertexDfs);



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }
/******/ ]);