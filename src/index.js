import moment from 'moment';

import graph from './graph';
import { stack, recursive } from './dfs';

console.log('Recursive');
recursive(graph, 0, item => console.log(item));

console.log('Stack');
stack(graph, 0, item => console.log(item));