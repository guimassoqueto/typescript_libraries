// A modern JavaScript utility library delivering modularity, performance & extras.
// Documentation: https://lodash.com/

import lodash from "lodash";
const print = console.log

let array: string[] = ['a', 'b', 'c', 'd', 'e'];

array = lodash.shuffle(array);
print(array)