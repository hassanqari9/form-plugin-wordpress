import React, { useState } from "react";
import "./App.css";

export default function App({ fields = [], theme = {} }) {
  const [formData, setFormData] = useState({});

  const style = {
    "--widget-bg": theme.bgColor || "#ffffff",
    "--widget-text": theme.textColor || "#1a1a1a",
    "--widget-field-text": theme.fieldTextColor || "#1a1a1a",
    "--widget-border": theme.borderColor || "rgba(0,0,0,0.1)",
    "--field-bg": theme.fieldBg || "#ffffff",
    "--field-border": theme.fieldBorderColor || theme.borderColor || "#e0e0e0",
    "--button-bg": theme.buttonColor || "#0073ff",
    "--button-text": "#ffffff",
  };

  const handleChange = (fieldLabel, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldLabel]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
                               
    // Validate dynamic fields
    for (const field of fields) {
      const value = formData[field.label];

      if (field.required) {
        if (!value || (Array.isArray(value) && value.length === 0)) {
          return;
        }
      }

      if (value) {
        if (field.type === "email") {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) return;
        }
        if (field.type === "phone") {
          const phoneRegex = /^[\d\+\-\(\)\s]{7,}$/;
          if (!phoneRegex.test(value)) return;
        }
      }
    }

    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <form className="form-widget" style={style} onSubmit={handleSubmit}>
      {/* default fields */}
      <div className="form-grid">
        <input
          className="form-input"
          type="text"
          placeholder={`Full Name*`}
          required
          onChange={(e) => handleChange("Full Name", e.target.value)}
        />
        <input
          className="form-input"
          type="email"
          placeholder={`Email*`}
          required
          onChange={(e) => handleChange("Email", e.target.value)}
        />
        <input
          className="form-input"
          type="phone"
          placeholder={`Phone*`}
          required
          pattern="^\+?\d+$"
          onChange={(e) => handleChange("Phone", e.target.value)}
        />
        <input
          className="form-input"
          type="company"
          placeholder={`Company Name*`}
          required
          onChange={(e) => handleChange("Company Name", e.target.value)}
        />
      </div>

      <div className="form-grid">
        {fields.map((field, i) => {
          const isRequired = field.required === true;
          const labelText = `${field.label}${isRequired ? "*" : ""}`;

          return (
            <div
              key={i}
              className={`form-field ${
                field.type === "textarea" ? "full-width" : ""
              }`}
            >
              {field.type === "text" && (
                <input
                  className="form-input"
                  type="text"
                  placeholder={labelText}
                  required={isRequired}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                />
              )}
              {field.type === "email" && (
                <input
                  className="form-input"
                  type="email"
                  placeholder={labelText}
                  required={isRequired}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                />
              )}
              {field.type === "phone" && (
                <input
                  className="form-input"
                  type="tel"
                  placeholder={labelText}
                  required={isRequired}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                />
              )}
              {field.type === "select" && (
                <select
                  className="form-input"
                  onChange={(e) => handleChange(field.label, e.target.value)}
                  required={isRequired}
                  defaultValue=""
                  style={{ color: formData[field.label] ? "inherit" : "#999999" }}
                >
                  <option value="" disabled hidden>
                    {labelText}
                  </option>
                  {field.options?.map((opt, idx) => (
                    <option
                      key={idx}
                      value={opt}
                      style={{ color: "var(--widget-text)" }}
                    >
                      {opt}
                    </option>
                  ))}
                </select>
              )}
              {field.type === "radio" && (
                <div className="form-group-container">
                  <label className="form-group-label">{labelText}</label>
                  <div className="radio-group">
                    {field.options?.map((opt, idx) => (
                      <label key={idx} className="radio-option">
                        <input
                          type="radio"
                          name={field.label}
                          value={opt}
                          checked={formData[field.label] === opt}
                          required={isRequired && !formData[field.label]}
                          onClick={(e) => {
                            if (formData[field.label] === opt) {
                              handleChange(field.label, "");
                            } else {
                              handleChange(field.label, opt);
                            }
                          }}
                          onChange={() => {}}
                        />
                        <span className="radio-custom"></span>
                        <span className="radio-label">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {field.type === "checkbox" && (
                <div className="form-group-container">
                  {field.options ? (
                    <>
                      <label className="form-group-label">{labelText}</label>
                      <div className="checkbox-group">
                        {field.options.map((opt, idx) => (
                          <label key={idx} className="checkbox-option">
                            <input
                              type="checkbox"
                              value={opt}
                              onChange={(e) => {
                                const current = formData[field.label] || [];
                                const updated = e.target.checked
                                  ? [...current, opt]
                                  : current.filter((item) => item !== opt);
                                handleChange(field.label, updated);
                              }}
                            />
                            <span className="checkbox-custom"></span>
                            <span className="checkbox-label">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </>
                  ) : (
                    <label className="checkbox-single">
                      <input
                        type="checkbox"
                        required={isRequired}
                        onChange={(e) =>
                          handleChange(
                            field.label,
                            e.target.checked ? "Yes" : "No"
                          )
                        }
                      />
                      <span className="checkbox-custom"></span>
                      <span className="checkbox-label">{labelText}</span>
                    </label>
                  )}
                </div>
              )}
              {field.type === "textarea" && (
                <textarea
                  className="form-input form-textarea"
                  placeholder={labelText}
                  required={isRequired}
                  onChange={(e) => handleChange(field.label, e.target.value)}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* default fields */}
      <textarea
        className="form-input form-textarea"
        placeholder={`Message*`}
        required
        onChange={(e) => handleChange("Message", e.target.value)}
      />

      <input
        type="file"
        className=""
        placeholder={`Upload file*`}
        required
        onChange={(e) => handleChange("File", e.target.value)}
      />

      <div className="privacy-checkbox">
        <label className="privacy-label">
          <input type="checkbox" required />
          <span>
            I have read the privacy statement and understand that my personal
            data will be processed for the purpose of providing the necessary
            information and assistance.*
          </span>
        </label>
      </div>

      <div className="button-container">
        <button className="form-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
