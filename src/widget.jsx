import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export function initWidget(element) {
  const fields = JSON.parse(element.getAttribute("data-fields") || "[]");

  let theme;
  try {
    const themeAttr = element.getAttribute("data-theme");
    if (themeAttr && themeAttr.trim().startsWith("{")) {
      theme = JSON.parse(themeAttr);
    } else {
      throw new Error("Not JSON");
    }
  } catch (e) {
    const themeStr = element.getAttribute("data-theme") || "light";
    theme = themeStr === "dark" ? {
      bgColor: "#1a1a1a",
      fieldBg: "#2a2a2a",
      buttonColor: "#4a9eff",
      textColor: "#ffffff",
      borderColor: "#404040",
      fieldBorderColor: "#404040"
    } : {
      bgColor: "#ffffff",
      fieldBg: "#ffffff",
      buttonColor: "#0073ff",
      textColor: "#1a1a1a",
      borderColor: "#e0e0e0",
      fieldBorderColor: "#e0e0e0"
    };
  }

  ReactDOM.createRoot(element).render(
    <App fields={fields} theme={theme} />
  );
}
