document.addEventListener("DOMContentLoaded", () => {
  const openModalButtons = document.querySelectorAll("[data-modal-target]");
  const closeModalButtons = document.querySelectorAll(".exit_modal_btn");
  const closeModalActions = document.querySelectorAll(".close_action");

  function openModal(modal) {
    if (modal == null) return;
    modal.classList.add("visible_modal");
  }

  function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove("visible_modal");
  }

  openModalButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
  });

  closeModalButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal_wrapper");
      closeModal(modal);
    });
  });

  closeModalActions.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal_wrapper");
      closeModal(modal);
    });
  });

  document.addEventListener("click", (e) => {
    const modals = document.querySelectorAll(".modal_wrapper");
    modals.forEach((modal) => {
      if (
        modal.classList.contains("visible_modal") &&
        !modal.querySelector(".modal_container").contains(e.target) &&
        !e.target.closest("[data-modal-target]")
      ) {
        closeModal(modal);
      }
    });
  });
});

function selectIcon(element) {
  const currentIcon = document.getElementById("current-icon");
  currentIcon.src = element.src;

  document.querySelectorAll(".selected_social_icon").forEach((icon) => {
    icon.style.display = "none";
  });

  const selectedIcon = element.previousElementSibling;
  if (selectedIcon && selectedIcon.classList.contains("selected_social_icon")) {
    selectedIcon.style.display = "block";
  }
}
