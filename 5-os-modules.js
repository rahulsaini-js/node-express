const os = require('os');

//info about currrent user

const user = os.userInfo()
console.log(user);

// method return the system uptime in seconds

console.log(`the System uptime is ${os.uptime()} seconds`);


//operating system info

const currentOs={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    fremem:os.freemem(),
}

console.log(currentOs);