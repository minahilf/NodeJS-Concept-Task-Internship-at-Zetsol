const fs = require('fs')

// write file 

fs.writeFile('sample.txt', 'hello file system', (err) => {
    if (err) throw err;
     console.log("file written");
}
)

// read file 

fs.readFile('sample.txt', 'utf-8', (data) => {
    console.log(data);
})

