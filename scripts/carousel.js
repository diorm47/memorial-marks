document.addEventListener("DOMContentLoaded", () => {
  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  let currentIndex = 0;

  const images = [
    "./assets/images/foto.png",
    "./assets/images/carousel.png",
    "./assets/images/carousel-2.png",
  ];

  function updateMainImage(index) {
    mainImage.src = images[index];
    thumbnails.forEach((thumbnail, i) => {
      thumbnail.classList.toggle("active", i === index);
    });
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      currentIndex = index;
      updateMainImage(currentIndex);
    });
  });

  prevButton.addEventListener("click", () => {
    currentIndex =
      currentIndex - 1 + images.length < 0
        ? images.length - 1
        : (currentIndex - 1 + images.length) % images.length;
    updateMainImage(currentIndex);
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateMainImage(currentIndex);
  });

  updateMainImage(currentIndex);
});
