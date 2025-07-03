<!-- Node.js Runtime & Event Loop  -->

Runtime : ek system he jo hamare JS code run ko run krta he

EventLoop: eventloop woh system h jo hamare async code ko control krta he qk JS single threaded h mtlb hm ne ek kaam diya gaya h jo 5 sec me hoga to baqi code ruk jayega jb tk woh 5 sec poori nh honge to event loop isi ko handle krt he bg me sare kaam hote rhen or baqi code bh chlta rhe

<!--  Module System (CommonJS & ES Modules) -->

module: a block of code jise hm kahi bh use krskte there are two module systems common JS and es modules

Common JS: default hote hen, syntax: require, module.export , Good for backend Node apps

ES Modules: modern , syntrax: import export Only works if: File ends with .mjs, OR You add "type": "module" in package.json , Best for frontend / full-stack projects (like Next.js)

<!-- Asynchronous Patterns (Callbacks, Promises, async/await) -->

Aynchronus jo foran result nh deta bg me chlta h bd me result deta he there are 3 ways to handle async code like callbacks, promises, async/await

callback: ek function jiske andr args me hm ek or function likhte hen or tb call hota h jb async task complete hojata h but nesting zyada hojae to callback hell me chle jate hen which is very hard to read

Promises: ye ek obj hota h jo future me ya to resolve hota h ya reject hota h

async await: its modern hm async function banate hen or await likhte hen

<!-- I/O Primitives (Buffers & Streams) -->

IO mtlb input output mtlb file read krna bhejna likhna network se data lena and all

Streams: way to read and write data in sequence or chunks instead of whole like bht bari file read krna mushkil h to stream k zarye hm apni file ko chunks me divide krke read krskte hen 

types of stream:
1. readable stream: for reading data
2. writable stream: for writing data
3. duplex stream: for both reading and writing
4. transform stream: for modifying nd transforming data

Why use stream:
1. efficient for large data
2. event loop block nh krta
3. asychronusly use hota he

Common methods:
1. .pipe(): pipe data from 1 stream to another
2. .on(event, callback):  listens event like data, end , error
3. .write(data): write data in writable stream
4. end(): signals the end of writing

Buffers: container ya ek temporary storage area h jis me chunks of data transfer hota h binary data store hota h like images, videos, files. temporary data store hota h , buffer ka ek fixed size hota h usi size ka data store hota h if file is more to buffer khali hone ka wait krna parga

Methods:
1. Buffer.alloc(size): creates a new buffers of a specified size
2. Buffer.from(data): converts data into a buffer ---> buffer create krke value store krna
3. .toString(): converts buffer to string

node js me already hoti h to import export krne ki zaroori nh hota

<!-- File System (`fs`) & Path Handling -->

file system: node js ka built in module he jis se hm files read, write, update, delete krte hen like ksi file k sth kaam kren to fs use hota h

const fs = require("fs");

Common methods: 
1. fs.readFile()	File read (async)
2. fs.writeFile()	File me likhega (overwrite)
3. fs.appendFile()	File me data add karega
4. fs.unlink()	File delete karega
5. fs.rename()	File ka naam change karega
6. fs.mkdir()	New folder banata hai
7. fs.readdir()	Folder ke andar ki files read

path modeule: path module file paths ko manage karne k kaam ata h specially jab Windows ya Mac/Linux me cross-platform kaam kar rahe hon

const path = require("path");

Common Methods: 
1. path.join()	Safe way to join paths (cross-platform)
2. path.basename()	File ka sirf naam return karta hai
3. path.dirname()	Folder ka naam return karta hai
4. path.extname()	File ka extension return karta hai
5. path.resolve()	Full absolute path return karta hai


