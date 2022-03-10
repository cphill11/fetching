var upload = document.querySelector("#upload");

upload.addEventListener("change", function(event) {
    console.log(event.target.files)
    let formData = new FormData();
    formData.append("upload_preset", "puppies");
    formData.append("file", event.target.files[0]);

    fetch(`https://api.cloudinary.com/v1_1/dkzs0mf5p/image/upload`, {
        method: "POST",
        body: formData,
    }).then(response => {
        return response.json()
    }).then(data => {
        console.log(data)
        fetch('/api/pet/shabang', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(postUpload => {
            console.log(postUpload)
        
        })
    })
})

// this needs to be prepended somewhere `https://res.cloudinary.com/dkzs0mf5p/image/fetch/`