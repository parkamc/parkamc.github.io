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
const apiUrl = 'https://api.meteomatics.com/2024-02-27T10:50:00.000-05:00--2024-07-31T10:50:00.000-04:00:PT5M/t_min_-300cm_1h:F/28.5656649,-81.5856742/html?model=mix';
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
  });
}
