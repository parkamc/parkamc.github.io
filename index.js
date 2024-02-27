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

function nano() {
const apiUrl = 'https://api.weatherapi.com/v1/current.json?key=unbangeemail@gmail.com&q=orlando,lf&aqi=no
';
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  } 
}
