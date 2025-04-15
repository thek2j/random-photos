const imageContainerEl = document.querySelector(".image-container");

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", addImages);

function addImages() {
  for (let i = 0; i < 10; i++) {
    {
      const imageEl = document.createElement("img");
      imageEl.src = `https://picsum.photos/200/300?random=${Math.floor(
        Math.random() * 5000
      )}`;
      imageContainerEl.appendChild(imageEl);
    }
  }
}
