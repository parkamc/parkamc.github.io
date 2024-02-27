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
const apiUrl = 'http://api.weatherapi.com/v1/forecast.json?key=27f96f52919b4129a8f161122242702&q=Orlando&days=8&aqi=no&alerts=no';
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
