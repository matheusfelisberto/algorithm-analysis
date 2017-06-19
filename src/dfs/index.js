/**
 * Make search with stack
 * 
 * @param {object} graph 
 * @param {int} start 
 * @param {function} callback 
 */
const stack = (graph, start, callback) => {
  let stack = [ start ];

  while (stack.length) {
    const current = stack.pop();
    callback(graph[current]);
    graph[current].connections.reverse().map(item => stack.push(item));
  }
}

/**
 * Make search with recursive function
 * the stack are implicit
 * 
 * @param {object} graph 
 * @param {int} start 
 * @param {function} callback 
 */
const recursive = (graph, start, callback) => {
  graph[start].connections.map(item => {
    callback(graph[item]);
    recursive(graph, item, callback);
  });
}

export { stack, recursive };
