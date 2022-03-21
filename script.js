
    function goofy1() {
  let images = document.querySelectorAll("img");
  for(let i = 0; i < images.length; i++) {
    images[i].src = "https://media.giphy.com/media/jaqvaWqpKfImQ/giphy.gif";
    images[i].alt = "three cute puppers!"
  }
}
