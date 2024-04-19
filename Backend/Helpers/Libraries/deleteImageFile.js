const path = require("path")
const fs = require("fs")

const { getStorage } = require('firebase-admin/storage');

const deleteImageFile = async (folderName, photoUrl) => {
    try{
        const bucket = getStorage().bucket();

        const originalFilename = decodeURIComponent(path.basename(photoUrl));
        const index = originalFilename.indexOf('?');

        const baseName = originalFilename.substring(0, index);
        await bucket.file(`${folderName}/${baseName}`).delete();
    }
    catch(error){
        console.log(error);
        
    }

}


module.exports = deleteImageFile