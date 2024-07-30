const uploadTabs = document.querySelector(".photo_video_hanlers");
const uploadTabButton = document.querySelectorAll(".photo_video_hanler");
const uploadContents = document.querySelectorAll(".upload_content");

uploadTabs.onclick = (e) => {
  let target = e.target;
  while (target && !target.classList.contains("photo_video_hanler")) {
    target = target.parentNode;
  }
  if (target && target.dataset.id) {
    const id = target.dataset.id;
    uploadTabButton.forEach((btn) => {
      btn.classList.remove("active_handler");
    });
    target.classList.add("active_handler");

    uploadContents.forEach((content) => {
      content.classList.remove("active_handler");
    });
    const element = document.getElementById(id);
    element.classList.add("active_handler");
  }
};
