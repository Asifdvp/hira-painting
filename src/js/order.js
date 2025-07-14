

const urlParams = new URLSearchParams(window.location.search);
const selectedService = urlParams.get("service");
if (selectedService) {
  const selectEl = document.getElementById("service-select");
  for (let option of selectEl.options) {
    if (option.value === selectedService) {
      option.selected = true;
      break;
    }
  }
}
