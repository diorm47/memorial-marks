document.addEventListener("DOMContentLoaded", () => {
  const fileInput = document.getElementById("file-input");
  const choosePhotoBtn = document.getElementById("choose-photo-btn");
  const dragBox = document.getElementById("drag-box");
  const currentPhoto = document.getElementById("current-photo");

  choosePhotoBtn.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", handleFile);

  dragBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    dragBox.style.borderColor = "#007bff";
  });

  dragBox.addEventListener("dragleave", () => {
    dragBox.style.borderColor = "#ccc";
  });

  dragBox.addEventListener("drop", (e) => {
    e.preventDefault();
    dragBox.style.borderColor = "#ccc";
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile({ target: { files: [file] } });
    }
  });

  function handleFile(event) {
    const file = event.target.files[0];
    if (file && file.size <= 4 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = (e) => {
        currentPhoto.src = e.target.result;
      };
      reader.readAsDataURL(file);
      uploadFile(file);
    } else {
      alert("File size exceeds 4MB or invalid file type.");
    }
  }

  function uploadFile(file) {
    const formData = new FormData();
    formData.append("photo", file);

    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
