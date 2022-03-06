require("dotenv").config();
// aliasing version 2 & referencing w/ a variable
const cloudinary = require("cloudinary").v2;

//cloudinary picks up env & is not configured
console.log(cloudinary.config().cloud_name);

// Node.js SDK uploader fxn returns a promise
cloudinary.uploader
    // need to change what image we use!!  ****
    .upload("./public/assets/images/screenshot.png", {
        //image is the default resource type if it isn't specified
        resource_type: "image",
    })
    .then((result) => {
        // JSON.stringify will provide a formatted string
        // 1st param is the value to be output
        // 2nd param null is a fxn that can be applied to the output
        // 3rd param is the number of space characters to use for whitespace in formatting the output
        console.log("success", JSON.stringify(result, null, 2));
    })
    .catch((error) => {
        console.log("error", JSON.stringify(error, null, 2));
    });

    module.exports = router;