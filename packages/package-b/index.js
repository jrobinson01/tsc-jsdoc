import {add, subtract} from 'package-a';

// tsc can now determine that the parameters and return are numbers
add(2, 2);

// but does not complain that the second parameter is not a number
subtract(2, 'banana');
