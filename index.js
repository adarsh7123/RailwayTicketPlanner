document.addEventListener("DOMContentLoaded", function () {
  // Get today's date

  let timestamp = "08:00 am";

  function todayCounter() {
    // Get the current date
    let currentDate = new Date();

    // Add 120 days to the current date
    currentDate.setDate(currentDate.getDate() + 120);

    // Format the date
    let options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    let formattedDate = currentDate.toLocaleString("en-GB", options);

    return formattedDate;
  }

  const todayFormatted = todayCounter();
  document.getElementById("todayBookingDate").innerText =
    todayFormatted ;

  document
    .getElementById("journeyDate")
    .addEventListener("change", function () {
      // Get the selected journey date from the input
      const journeyDate = new Date(this.value);

      // Calculate 120 days before the journey date
      const bookingDate = new Date(journeyDate);
      bookingDate.setDate(journeyDate.getDate() - 120);

      // Format the booking date as dd/mm/yyyy
      const formattedBookingDate = bookingDate.toLocaleDateString("en-GB");

      // Display the calculated booking date
      document.getElementById("selectedBookingDate").innerText =
        formattedBookingDate + " " + `${timestamp}`;
    });

  // Dark mode/light mode toggle
  const body = document.body;
  const card = document.querySelector(".card");
  const darkModeToggle = document.getElementById("darkModeToggle");

  darkModeToggle.addEventListener("change", function () {
    body.classList.toggle("dark-mode", this.checked);
    card.classList.toggle("dark-mode", this.checked);
  });
});
