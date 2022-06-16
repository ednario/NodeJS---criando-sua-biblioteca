const fs = require('fs');

// TRATAMENTO DE ERROS
function handlesError(err){
    throw new Error(err);
}

// ASYNC/AWAIT
async function airFile(fileName){
    const encoding = 'utf8';
    try {
        const file = await fs.promises.readFile(fileName, encoding);
        console.log(file);
    } catch (err) {
        handlesError(err);
    }
}

// PROMISSES
// function airFile(fileName){
//     const encoding = 'utf8';
//     fs.promises
//         .readFile(fileName, encoding)
//         .then((data) => console.log(data))
//         .catch((err) => handlesError(err));
// }

// function airFile(filePath) {
//     encoding = 'utf8';
//     fs.readFile(filePath, encoding, (_, data) => {
//     if (err) {
//         handlesError(err);
//     }else{
//         console.log(data);
//     };
//     });
// };

airFile('./src/carregamento-de-arquivos/text.md');