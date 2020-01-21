import {add, subtract} from 'package-a';
import {multiply} from 'package-a/lib/lib-fns.js';

// tsc has no idea what is going on now
add(2, 2);

// this should be an error!
subtract(2, 'banana');

multiply(2, 2);
