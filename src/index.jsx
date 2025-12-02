import { initWidget } from "./widget";

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 React Widget Script Loaded!");
  // Support both class (multiple) and ID (single/legacy)
  const widgets = document.querySelectorAll(".my-react-form-widget, #react-contact-widget");
  console.log("Found widgets:", widgets.length);

  widgets.forEach((el) => {
    initWidget(el);
  });
});
