const fs = require('fs');

function handlesError(err){
    throw new Error(err);
}

function airFile(filePath) {
    encoding = 'utf8';
    fs.readFile(filePath, encoding, (_, data) => {
    if (err) {
        handlesError(err);
    }else{
        console.log(data);
    };
    });
};

airFile('./src/01-a-lib-fs/text.md');