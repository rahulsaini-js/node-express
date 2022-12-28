const { readFile, writeFile } = require('fs');

//return Buffer bcoz we didn't use 'utf8'
// readFile('./content/first.txt', (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// })


//return the text data
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// })

//write file //callback hell 😈
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
        }
        const second = result;
        writeFile('./content/result-async.txt',
            `here is the result: ${first} and ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
            }
        )
    })
})

