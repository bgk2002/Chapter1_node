//Reading the file asynchronously

const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  }
  // console.log(res);
  const first = res;
  readFile("./content/second.txt", "utf-8", (err, res) => {
    if (err) {
      console.log(err);
    }
    const second = res;
    writeFile("./content/resultasync.txt", `${first} and ${second}`,(err,res)=>{
        if(err){
            console.log(err);
        }
        console.log(res);
    });
  });
});
