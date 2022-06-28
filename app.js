// npm favours the reusability of the code
// npm=> node package manager

// Installing packages is two types
// 1)local dependency -- npm i <packagenmae>
// 2)global dependency-- npm install -g <packagename>

const _=require('lodash')

const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems);