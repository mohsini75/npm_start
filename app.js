const _ = require("lodash");
const array = [1, [2, [3, [4]]]];
const newitem = _.flattenDeep(array);
console.log(newitem);