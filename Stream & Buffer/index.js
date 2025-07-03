const fs = require('fs')

const read = fs.createReadStream('./file.txt', 'utf-8')


read.on('data', (chunk) => {
    console.log(chunk);
    
})