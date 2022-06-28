const fs=require('fs');

//we deal with both async and sync approaches

//We go for Sync firstly
const {readFileSync,writeFileSync}=require('fs');

//Reading the content from a fiel
const first=readFileSync('./content/first.txt','utf-8');
const second=readFileSync('./content/second.txt','utf-8');

// console.log(first,second);

//Writing the result into another file
writeFileSync('./content/result-sync.txt',`here is the result:${first}.${second}`);

//Writing result by appending
writeFileSync('./content/result-sync.txt',`here is the result:${first}.${second}`,{flag:'a'});
