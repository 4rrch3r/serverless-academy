const fs = require("fs");

async function readAndTransformCsv(path,format,next){
    try {
        return (await fs.promises.readFile(path,format)).split('\r\n').map(element=>{
            let splittedElement = element.replace(/"/g, '').split(',');
            return {
                minRange: splittedElement[0],
                maxRange: splittedElement[1],
                countryName: splittedElement[3],
            }
           });
    } catch (error) {
        return next(error)
    }
}

module.exports={
 readAndTransformCsv
}