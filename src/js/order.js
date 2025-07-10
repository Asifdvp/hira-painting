flatpickr("#date", {
  dateFormat: "Y-m-d",
});
flatpickr("#customTime", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
});

const urlParams = new URLSearchParams(window.location.search);
const selectedService = urlParams.get("service");
console.log(urlParams.get("service"));
if (selectedService) {
  const selectEl = document.getElementById("service-select");
  for (let option of selectEl.options) {
    if (option.value === selectedService) {
      option.selected = true;
      break;
    }
  }
}
