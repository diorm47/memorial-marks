document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".calendar-container")
    .forEach((calendarContainer) => {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();

      const day = calendarContainer.querySelector(".calendar-dates");
      const currdate = calendarContainer.querySelector(
        ".calendar-current-date"
      );
      const prenexIcons = calendarContainer.querySelectorAll(
        ".calendar-navigation span"
      );
      const dateInput = calendarContainer
        .closest(".data_input")
        .querySelector(".date-input");

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const manipulate = () => {
        let dayone = new Date(year, month, 1).getDay();
        let lastdate = new Date(year, month + 1, 0).getDate();
        let dayend = new Date(year, month, lastdate).getDay();
        let monthlastdate = new Date(year, month, 0).getDate();

        let lit = "";
        for (let i = dayone; i > 0; i--) {
          lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
        }
        for (let i = 1; i <= lastdate; i++) {
          let isToday =
            i === date.getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
              ? "active"
              : "";
          lit += `<li class="${isToday}">${i}</li>`;
        }
        for (let i = dayend; i < 6; i++) {
          lit += `<li class="inactive">${i - dayend + 1}</li>`;
        }
        currdate.innerText = `${months[month]} ${year}`;
        day.innerHTML = lit;

        day.querySelectorAll("li:not(.inactive)").forEach((dateItem) => {
          dateItem.addEventListener("click", () => {
            const selectedDate = `${String(dateItem.textContent).padStart(
              2,
              "0"
            )}/${String(month + 1).padStart(2, "0")}/${year}`;
            dateInput.value = selectedDate;
            calendarContainer.classList.remove("visible_calendar");
          });
        });
      };

      manipulate();

      prenexIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
          month = icon.id === "calendar-prev" ? month - 1 : month + 1;
          if (month < 0 || month > 11) {
            date = new Date(year, month, new Date().getDate());
            year = date.getFullYear();
            month = date.getMonth();
          } else {
            date = new Date();
          }
          manipulate();
        });
      });
    });

  document.querySelectorAll(".toggle-calendar-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      const calendarContainer = event.target.nextElementSibling;
      if (calendarContainer.classList.contains("visible_calendar")) {
        calendarContainer.classList.remove("visible_calendar");
      } else {
        document
          .querySelectorAll(".calendar-container")
          .forEach((container) =>
            container.classList.remove("visible_calendar")
          );
        calendarContainer.classList.add("visible_calendar");
      }
      event.stopPropagation();
    });
  });

  document.addEventListener("click", (event) => {
    if (
      !event.target.closest(".calendar-container") &&
      !event.target.closest(".toggle-calendar-button")
    ) {
      document
        .querySelectorAll(".calendar-container")
        .forEach((container) => container.classList.remove("visible_calendar"));
    }
  });
});
