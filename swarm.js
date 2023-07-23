const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const imageContainer = document.querySelector(".image-container");

let currentIndex = 0;
const images = imageContainer.querySelector("img");
const totalImages = images.length;

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentImage)
});

function showImage(index) {
    imageContainer.style.transform = `translateX(-${index * 100}%)`;
}