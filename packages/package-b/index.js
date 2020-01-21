import {add, subtract} from 'package-a';
import {multiply} from 'package-a/lib/lib-fns.js';

// tsc can now determine that the parameters and return are numbers
add(2, 2);

// and will complain that the second parameter is not a number
subtract(2, 'banana');

// it also works for absolute imports
multiply(2, 2);
