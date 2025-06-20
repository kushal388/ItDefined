
/*
Front_end 

 Components:
       1) Call Stack
        Executes functions one by one (LIFO order).

       2) Web APIs
        Provided by browser — handles timers, DOM events, AJAX.

        3)Callback Queue (Task Queue)
        Holds setTimeout, setInterval, and DOM events.

        4)Microtask Queue
        Holds promises (.then, catch, finally) and queueMicrotask.

        5)Event Loop
            Continuously checks:

            Is the Call Stack empty?

            If yes, it first processes Microtask Queue, then Callback Queue.
 ┌────────────────────────────┐
 │        Call Stack          │
 └────────────────────────────┘
           ↓ when empty
 ┌─────────────┐   ← Microtask Queue (Promises)
 │  Event Loop │
 └─────────────┘
           ↓
 ┌────────────────────────────┐
 │   Callback Queue / Task Q  │ ← setTimeout, setInterval, DOM Events
 └────────────────────────────┘

 */


console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("microtask"));

console.log("end");

/*
output : start
        end
        microtask
        timeout
 */       



// *****************************************************************************88

/*
Bacend : Node.js also uses the V8 engine, but it has its own libuv-based Event Loop.

Handles: File system I/O (fs.readFile) ,Network I/O (http, net),Timers,Promises,process.nextTick, setImmediate


 Node.js Event Loop Phases:
    1)Timers (setTimeout, setInterval)

    2)Pending callbacks

    3)Idle/prepare

    4)Poll (I/O events)

    5)Check (setImmediate)

    6)Close callbacks
        → Microtasks (e.g., Promise.then, process.nextTick) run between these phases.


┌────────────────────────────┐
│         Timers             │ ← setTimeout / setInterval
└────────────────────────────┘
│   ↓
│ Pending Callbacks          │ ← e.g. TCP errors
│   ↓
│ Idle / Prepare             │
│   ↓
│ Poll (I/O)                 │ ← e.g. fs.readFile
│   ↓
│ Check                      │ ← setImmediate
│   ↓
│ Close Callbacks            │ ← e.g. socket.on('close')
└────────────────────────────┘

→ Between each phase, Node runs:
  1. Microtasks (`Promise.then`)
  2. process.nextTick() (even before Promises!)


 ┌───────────────────────────────┐
 │           timers              │  → `setTimeout`, `setInterval`
 ├───────────────────────────────┤
 │      pending callbacks        │  → system-level errors, I/O
 ├───────────────────────────────┤
 │         idle, prepare         │  → internal use
 ├───────────────────────────────┤
 │            poll               │  → I/O waiting and handling
 ├───────────────────────────────┤
 │            check              │  → `setImmediate`
 ├───────────────────────────────┤
 │      close callbacks          │  → e.g. socket.on('close')








  */


  

/*

setTimeout(() => console.log("timeout"), 0);
setImmediate(() => console.log("immediate"));
Promise.resolve().then(() => console.log("promise"));
process.nextTick(() => console.log("nextTick"));

output: nextTick
        promise
        timeout
        immediate


*/

/*
    setTimeout(() => console.log("timeout"), 0);
    setImmediate(() => console.log("immediate"));

    fs.readFile("event loop.txt", () => {
    console.log("file read");

    setTimeout(() => console.log("inner timeout"), 0);
    setImmediate(() => console.log("inner immediate"));

    process.nextTick(() => console.log("inner nextTick"));
    Promise.resolve().then(() => console.log("inner promise"));
    });

    process.nextTick(() => console.log("nextTick"));
    Promise.resolve().then(() => console.log("promise"));



    Output :    nextTick
                promise
                file read
                inner nextTick
                inner promise
                inner immediate
                inner timeout
                immediate
                timeout

*/