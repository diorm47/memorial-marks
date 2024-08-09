const tabs = document.querySelector(".tabs_list");
const tabButton = document.querySelectorAll(".menu_item");
const contents = document.querySelectorAll(".menu_item_content");
const mobSidebarBlock = document.querySelector(".edit_page_sidebar");

if (tabs) {
  tabs.onclick = (e) => {
    let target = e.target;
    while (target && !target.classList.contains("menu_item")) {
      target = target.parentNode;
    }
    if (target && target.dataset.id) {
      const id = target.dataset.id;
      tabButton.forEach((btn) => {
        btn.classList.remove("active_menu");
      });
      target.classList.add("active_menu");
      if (mobSidebarBlock) {
        mobSidebarBlock.classList.remove("visible_edit_sidebar");
      }

      contents.forEach((content) => {
        content.classList.remove("active_menu");
      });
      const element = document.getElementById(id);
      element.classList.add("active_menu");
    }
  };
}
document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".professions_list_input input");
  const professionsList = document.querySelector(".professions_list");
  const professionItems = document.querySelectorAll(".professions_item");

  if (input) {
    input.addEventListener("click", function () {
      professionsList.style.display =
        professionsList.style.display === "block" ? "none" : "block";
    });
  }

  professionItems.forEach((item) => {
    item.addEventListener("click", function () {
      input.value = this.textContent.trim();
      professionsList.style.display = "none";
      professionItems.forEach((i) => i.classList.remove("active_profession"));
      this.classList.add("active_profession");
    });
  });
  if (professionsList) {
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".data_input")) {
        professionsList.style.display = "none";
      }
    });
  }
});
