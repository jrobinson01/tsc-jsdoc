import {add, subtract} from 'package-a';
import {multiply} from 'package-a/lib/lib-fns.js';

// tsc can tell that the function takes two parameters.
add(2, 2);

subtract(2, 2);

multiply(2, 2);
