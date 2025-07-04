
# 📘 Node.js Concepts Summary

<!-- Node.js Runtime & Event Loop  -->

**Runtime**: ek system he jo hamare JS code run ko run krta he

**EventLoop**: eventloop woh system h jo hamare async code ko control krta he qk JS single threaded h mtlb hm ne ek kaam diya gaya h jo 5 sec me hoga to baqi code ruk jayega jb tk woh 5 sec poori nh honge to event loop isi ko handle krt he bg me sare kaam hote rhen or baqi code bh chlta rhe

---

<!-- Module System (CommonJS & ES Modules) -->

**Module**: a block of code jise hm kahi bh use krskte there are two module systems: **CommonJS** and **ES Modules**

- **CommonJS**: Default hote hen  
  Syntax: `require`, `module.exports`  
  Good for backend Node apps

- **ES Modules**: Modern  
  Syntax: `import`, `export`  
  Use if:  
  • File ends with `.mjs` OR  
  • Add `"type": "module"` in `package.json`  
  Best for frontend / full-stack projects (like Next.js)

---

<!-- Asynchronous Patterns (Callbacks, Promises, async/await) -->

**Asynchronous**: jo foran result nh deta bg me chlta h bd me result deta he.  
There are 3 ways to handle async code:

- **Callback**: ek function jiske andr args me hm ek or function likhte hen or tb call hota h jb async task complete ho jata h. Too much nesting = "callback hell"

- **Promises**: ek object hota h jo future me ya to resolve hota h ya reject hota h

- **async/await**: modern syntax to write async code like sync style

---

<!-- I/O Primitives (Buffers & Streams) -->

**I/O (Input/Output)**: file read/write, data send/receive etc.

### 📥 Streams:
Data ko chunk me read/write krne ka method (useful for large files)

Types of Streams:
1. **Readable** – for reading data
2. **Writable** – for writing data
3. **Duplex** – for both
4. **Transform** – for modifying data

**Why Stream?**
- Efficient for large data
- Doesn’t block event loop
- Works asynchronously

**Common Methods**:
- `.pipe()`
- `.on(event, callback)`
- `.write(data)`
- `.end()`

### 📦 Buffers:
Temporary memory chunks to store binary data like images, videos, etc.

**Methods**:
- `Buffer.alloc(size)`
- `Buffer.from(data)`
- `.toString()`

(Node.js me buffer built-in hota he, require krne ki zaroorat nh)

---

<!-- File System (`fs`) & Path Handling -->

### 📁 File System

Node.js ka built-in module jis se files read, write, update, delete krte hen

```js
const fs = require("fs");
```

**Common Methods**:
1. `fs.readFile()` – File read (async)
2. `fs.writeFile()` – File overwrite
3. `fs.appendFile()` – File me data add
4. `fs.unlink()` – File delete
5. `fs.rename()` – File ka naam change
6. `fs.mkdir()` – New folder
7. `fs.readdir()` – Folder contents

---

### 📂 Path Module

Cross-platform file path handle krne k lye use hota h

```js
const path = require("path");
```

**Common Methods**:
1. `path.join()` – Safe way to join paths
2. `path.basename()` – Sirf file ka naam
3. `path.dirname()` – Folder ka naam
4. `path.extname()` – File extension
5. `path.resolve()` – Full absolute path

---

<!-- Built‑in Networking (`http`/`https`, `net`, `dgram`) -->

### 🌐 Built-in Networking

Node.js ko internet se connect krne wale modules

**`http` module**: basic server
```js
const http = require("http");
```

**`https` module**: secure server (needs SSL cert)
```js
const https = require("https");
```

**`net` module**: TCP based (chat, file transfer)
```js
const net = require("net");
```

**`dgram` module**: UDP based (games, voice apps)
```js
const dgram = require("dgram");
```

| Module | Purpose |
|--------|---------|
| `http` | Basic web server |
| `https` | Secure web server |
| `net` | TCP chat/file |
| `dgram` | UDP fast games/audio |

---

<!-- Event‑Driven Design (`EventEmitter`) -->

### 🌀 Event-Driven Design

Event-driven mtlb koi kaam tab chlao jab koi “event” ho jese click, message, etc.  
`EventEmitter` class allow krti h custom events create & listen krne k lye.

**Why Important?** Streams, fs, socket, timers — sab me Node.js internally `EventEmitter` use krta h.

**Common Methods**:
1. `.on(event, fn)`
2. `.emit(event, data)`
3. `.once(event, fn)`
4. `.off(event, fn)` / `removeListener()`
5. `.listenerCount()`

**Steps**:
1. `EventEmitter` class import kro
2. Uska object bnao
3. `.on()` se listener lagao
4. `.emit()` se event fire kro

---

<!-- Process Management & Environment (`Signals`, `process.env`) -->

### ⚙️ Process & Environment

Node.js tumhe process ko control krne k tools deta hai: env vars, exit codes, signals

**Why?**
1. Runtime behavior change krna
2. Secrets, ports set krna
3. Exit/cleanup signals handle krna

**Common Methods**:

```js
process.env.PORT; // env variable
process.exit(1);  // manual exit
```

```js
process.on("exit", (code) => {
  console.log(`Exiting with code: ${code}`);
});
```

---

<!-- Error Handling & Debugging -->

### 🧪 Error Handling & Debugging

**Error Handling**: program crash hone se bacha kr handle krna  
**Debugging**: error find krna

**Techniques**:
1. `try { } catch(err) { }`
2. `.catch()` in Promises
3. `process.on("uncaughtException")`
4. `console.log`, `console.error`
5. `debugger`
6. `node inspect`

---

<!-- Security Fundamentals (Input Validation, TLS Basics) -->

### 🔐 Security

Node apps ko secure bnane k basic concepts

**Why?**
1. Hackers can send malicious input
2. Sensitive data (passwords/tokens) ko protect krna
3. HTTPS required for secure data transfer

#### A. Input Validation

```js
if (!email.includes("@")) {
  return res.status(400).send("Invalid email");
}
```

**Libraries**:
- express-validator
- Joi

#### B. TLS Basics

`https` + TLS = encrypted connection (SSL cert required)

```js
const https = require("https");
```

Benefits:
- Prevent MITM attacks
- Safe login, tokens
- Data encryption

---

<!-- Performance Awareness (Profiling; Blocking vs. Non‑Blocking) -->

### ⚡ Performance Awareness

**Why Important?**  
Node.js single-threaded hota h, blocking code se pura app ruk skta h

#### A. Blocking vs Non-Blocking

| Type | Description |
|------|-------------|
| Blocking | Agla code wait karega |
| Non-Blocking | Code async chlta rhega |

#### B. Profiling Tools

| Tool | Use |
|------|-----|
| `--inspect` | Chrome DevTools debugging |
| `console.time()` | Measure execution time |
| `clinic.js`, `v8-profiler-next` | Deep profiling |

---

