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
var Graph = require("./Graph");
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

