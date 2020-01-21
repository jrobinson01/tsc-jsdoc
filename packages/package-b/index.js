import {add, subtract} from 'package-a';
import {multiply} from 'package-a/lib/lib-fns.js';

// tsc and vscode are happy again
add(2, 2);

// this should be an error, and vscode and tsc both flag it
subtract(2, 'banana');

multiply(2, 4);
