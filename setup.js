/**
 * Created by shashank on 31/3/17.
 */


let fs = require('fs');
let path = require('path');


let refModule = [__dirname,'node_modules','app'].join(path.sep);
let  coreModule =[__dirname,'src'].join(path.sep);


if(!fs.existsSync(refModule)){
  fs.symlinkSync(coreModule, refModule);
}