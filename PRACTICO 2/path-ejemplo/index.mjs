import { log } from 'console';
import path from 'path';

const filePath = './data/example.txt';

const dirName = path.dirname(filePath);
console.log('directorio de base:', dirName);

const baseName = path.basename (filePath, '.txt');
console.log('Nombre del archivo:', baseName);

const extName = path.extname(filePath);
console.log('Extencion del Archivo:', extName);

const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva Ruta:', newPath);

