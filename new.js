const images = [
    "Рисунок1.jpg",
    "Рисунок2.jpg",
    "Рисунок3.jpg"
];

let currentIndex = 0;
const imageElement = document.getElementById("slider-image");
const nextButton = document.getElementById("next-btn");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
    // Опционально: можно добавить alt
    imageElement.alt = `Изображение ${currentIndex + 1}`;
}

nextButton.addEventListener("click", changeImage);
