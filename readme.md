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


<!-- Built‑in Networking (`http`/`https`, `net`, `dgram`) -->
 
Netowrking modules jo hamare node js ko internet se connect krwate hen

http module: normal web server banane deta hai jaise browser me request bhejna aur server uska reply de.
const http = require("http");

https module: secure version of http same as http but ssl certificate hota h secure connection k lye 📌 Needs SSL setup (key + cert) run nh krega real ssl k bina

net module: tcp connection k lye hot h reliable data transfer jese chat app, file transfer
const net = require("net"); Isme ek socket bana ke client se message send/receive kar sakte.
You can connect to this using a TCP client like Telnet or netcat.

dgram module: UDP = used in games, voice chat (less reliable but fast)
const dgram = require("dgram"); It listens for incoming UDP messages on port 5000.

http = basic website server
https = secure website server
net = TCP communication (chat)
dgram = UDP communication (fast games ya voice apps)

<!--  Event‑Driven Design (`EventEmitter`) -->
Event-driven mtlb koi kaam tab chalao jab koi “event” ho  jaise click, message, read complete, etc.
event emitter ek class hoti he node js me jo allow krti h k events create hon or us pr react ho jese frontend pe button click hona ek event h to yhn bh hm custom event define krskte hen or jb woh fire ho to code chla skte

why: Streams, file read/write, socket, timers — sab me Node.js internally EventEmitter use karta hai

Common Methods:
1. on(event, fun)  jb event aye to function chle
2. .emit(event, data) event trigger hota he
3. .once(event, fn)  jb ek br chle
4. .off(event, fn) or removeListner()  event hata dena
5. .listenerCount() kitne listeners lage hue

STeps:
1. EventEmitter ek class hai jo tumhe events banane deti hai.
2. Pehle tum us class ka object banaogi.
3. Phir .on() se bataogi ke jab ye event ho to kya karna hai.
4. Aur jab tum .emit() karogi to wo event chalega.

<!-- Process Management & Environment (`Signals`, `process.env`) -->

jb hamara program run hota h to woh ek process hota he or Node.js tumhe us process ko control karne aur uske environment se interact karne ke tools deta hai jaise variables, signals, exit codes, etc.

Why?
1. kabhi kabhi program ke behavior ko runtime pe change karna hota hai (without changing code)
2. Logs ka level, secrets, ports sab environment variables me store karte hain
3. Signals se process ko exit, restart, clean-up kara skte

Common things:
1. process.env: ye obj hota h jis me project k env var save hote hen
console.log(process.env.PORT);

2. process.exit([code]): tmhara app manually close hojae
Example: 

if (!process.env.SECRET) {
  console.log("Missing secret, exiting...");
  process.exit(1); // 1 = error
}

3. process.on('exit'): jb process close hone wala ho to us time kch kro
Example:
process.on("exit", (code) => {
  console.log(`Process exiting with code: ${code}`);
});

<!-- Error Handling & Debugging -->
Error handling means program me jo bh error aye usko catch krke program ko crash hone se bachana
Debugging: jb code me error dhundte usko bolte debugging

common methods and techniques:
1.  try { } catch(err) { }  normal error handle krte try me jo part sahi h woh chle catch me jo error agya tb chle
2. .catch with promises  promises me koi error ajaye usko catch krna
3. process.on("uncaughtException")	jo error catch na horha ho usko bh pkrlo
4. console.log/ console.error debug print krne k lye
5. debugger: code ko pause krne k ly
6. node inspect: terminal se debug krna


<!-- Security Fundamentals (Input Validation, TLS Basics) -->

security fundamentals woh btate hen k kese hm apne node js k project ko secure bana skte hen specially webapps jhn se user input ata h ya data send ya receive hota he

why?
1. Hackers user input se malicious code bhej sakte hain (e.g. SQL Injection, XSS)
2. App ka data safe hona chahiye specially passwords, tokens
3. Internet pe data bhejna ho to TLS zaroori hota hai (for HTTPS)

A. Input Validation: jb user input bhjta h to check krna he k required format missing na ho , invalid script na ho or correct format me ho Use libraries like: express-validator , Joi , Manual checks (if/else)

Example:
if (!email.includes("@")) {
  return res.status(400).send("Invalid email");
}

B. TLS Basics HTTPS: TLS means transport layer security ye server or client k data ko encrypt krta he jb hm browser me https:// ka use krte hen to woh tls hi use krha hota he

TLS se man in the middle attack s protection milti he, data snooping se, login info leak hone se
node js me https module use hota h with ssl certificate


<!-- Performance Awareness (Profiling; Blocking vs. Non‑Blocking) -->
ye batata h k node js ka project fast chlrha h ya slow or kis code ki waja se slow chl rha hota h is me 2 cheezen hoti hen profiling (code analysis) or blocking vs non blocking (code behavior)

why?
1. node js single threaded hota he agr 1 kaam slow ho to poora app rukskta he
2. Tumhe samajhna chahiye kaunsa code fast hai (non-blocking) aur kaunsa app ko freeze kar raha hai (blocking)

A. BLOCKING VS NON BLOCKING
blocking: jb ek kaam complete hone tk agla code ruk jata he it is sync
non blocking: jb kaam bg me chlta rhe or agla code foran chl jaye it is async

B. PROFILING
Ye technique batati hai ke kaha pe time lag raha hai, konsa function slow hai, memory usage kaisi hai

Tools:

1. --inspect flag with Chrome DevTools
2. console.time() & console.timeEnd()
3. Profiling tools like clinic.js, v8-profiler-next

