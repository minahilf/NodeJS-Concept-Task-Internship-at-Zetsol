// TRY CATCH 

try {
    a = 2
    b = 4
    console.log(a + z);
} catch (err) {
    console.log(err);   
}

// output: z is not defined 

// PROMISE WITH CATCH 

promise.reject("kch galat hogya")
.catch((err) => {
    console.log(err);
})

// GLOBAL ERROR CATCHING 
process.on("uncaughtException", (err) => {
    console.log(err.message);
})

// Ye tab kaam aata hai jab tumhara code error me phat jaye aur tumne try-catch nahi lagaya ho


