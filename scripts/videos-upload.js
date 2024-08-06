const uploadVideoBtn = document.getElementById("uploadVideoBtn");
const fileVideoInput = document.getElementById("fileVideoInput");
const dragBoxVideoBlock = document.getElementById("dragBoxVideoBlock");

uploadVideoBtn.addEventListener("click", function () {
    fileVideoInput.click();
});

fileVideoInput.addEventListener("change", function (event) {
  handleFiles(event.target.files);
});

dragBoxVideoBlock.addEventListener("dragover", function (event) {
  event.preventDefault();
  dragBoxVideoBlock.style.border = "2px dashed #000"; // Example styling on dragover
});

dragBoxVideoBlock.addEventListener("dragleave", function () {
    dragBoxVideoBlock.style.border = "none"; // Reset styling
});

dragBoxVideoBlock.addEventListener("drop", function (event) {
  event.preventDefault();
  dragBoxVideoBlock.style.border = "none"; // Reset styling
  handleFiles(event.dataTransfer.files);
});

function handleFiles(files) {
  const acceptedFileTypes = ["video/mp4", "video/x-msvideo"];
  Array.from(files).forEach((file) => {
    if (
      acceptedFileTypes.includes(file.type) &&
      file.size <= 1000 * 1024 * 1024
    ) {
      // 1000MB
      const reader = new FileReader();
      reader.onload = function (e) {
        const video = document.createElement("video");
        video.src = e.target.result;
        video.controls = true;
        video.classList.add("uploaded-video");
        dragBoxVideoBlock.appendChild(video);
        dragBoxVideoBlock.classList.add('filled_dragbox')
      };
      reader.readAsDataURL(file);
    } else {
      alert("File type not supported or file size is too large.");
    }
  });
}
