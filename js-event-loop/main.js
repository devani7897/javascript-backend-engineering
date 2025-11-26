
// Synchronous task
console.log("Synchronous Log 1");

// Macro-task 
setInterval(()=>{
    console.log("Interval Log 1 after 100 ms");
}, 100);

setTimeout(()=>{
    console.log("Timeout Log 1 after 1000 ms");
}, 1000);

// Micro-task
Promise.resolve().then(()=>{
    console.log("Promise Log 1");
})

// Synchronous task
console.log("Synchronous Log 2");

                                     
/* ==========================================
   |                                         |          ++++++++++++++++++++++++++++
   |                                         |          |        WEB API           |
   |                                         |          |                          |
   |                                         |          |                          |
   |                                         |          |                          |
   |                                         |          |                          |
   |                                         |          |                          |        
   |                                         |          ++++++++++++++++++++++++++++
   |                                         |  
   |                                         | 
   ===========================================
      CALL STACK
    
      MICRO-TASK QUEUE (Promises)
      ==========================
                             
                             
       Promise.resolve().then(()=>{
         console.log("Promise Log 1");
         })                       
                              
      ==========================

        MACRO-TASK QUEUE (setTimeout, setInterval)
        ==========================
       setTimeout(()=>{
    console.log("Timeout Log 1 after 0 ms");
}, 0);
        ==========================
*/

// Final Output Order:
// Synchronous Log 1
// Synchronous Log 2
// Promise Log 1
// Timeout Log 1 after 0 ms