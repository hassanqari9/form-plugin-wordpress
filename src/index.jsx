import { initWidget } from "./widget";

document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 React Widget Script Loaded!");
  const widgets = document.querySelectorAll(".my-react-form-widget, #react-form-widget");
  console.log("Found widgets:", widgets.length);

  widgets.forEach((el) => {
    initWidget(el);
  });
});
