const uploadBtn = document.getElementById("uploadBtn");
const fileInput = document.getElementById("fileInput");
const dragBoxBlock = document.getElementById("dragBoxBlock");

uploadBtn.addEventListener("click", function () {
  fileInput.click();
});

fileInput.addEventListener("change", function (event) {
  handlePhotoFiles(event.target.files);
});

dragBoxBlock.addEventListener("dragover", function (event) {
  event.preventDefault();
  dragBoxBlock.style.border = "2px dashed #000"; // Example styling on dragover
});

dragBoxBlock.addEventListener("dragleave", function () {
  dragBoxBlock.style.border = "none"; // Reset styling
});

dragBoxBlock.addEventListener("drop", function (event) {
  event.preventDefault();
  dragBoxBlock.style.border = "none"; // Reset styling
  handlePhotoFiles(event.dataTransfer.files);
});

function handlePhotoFiles(files) {
  const acceptedFileTypes = ["image/jpeg", "image/png", "image/gif"];
  Array.from(files).forEach((file) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      img.classList.add("uploaded-img");
      dragBoxBlock.appendChild(img);
      dragBoxBlock.classList.add("filled_dragbox");
    };
    reader.readAsDataURL(file);
  });
}
