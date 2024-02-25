function gogo() {
    const url = "https://api.nasa.gov/planetary/apod?api_key=Wdd6X8nKfqBsP92J7ofCbcpped49hyCsdGofLbLE";
    fetch(url)
        .then(response => response.json())
        .then(data => display_image(data.url))
        .catch(error => console.error("Error:", error));
}

function display_image(imageUrl) {
    const imageElement = document.getElementById("image");
    imageElement.src = imageUrl;
}
