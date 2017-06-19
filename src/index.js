import graph from './graph';
import { stack, recursive } from './dfs';
import sort from './insertion-sort';

console.log('DFS - Recursive');
recursive(graph, 0, item => console.log(item));

console.log('DFS - Stack');
stack(graph, 0, item => console.log(item));

console.log('Insertion sort');
console.log(sort([520, 450, 154, 310, 285, 379]));
