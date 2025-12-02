import React, { useState } from "react";
import "./App.css";

export default function App({ fields = [], theme = {} }) {
  const [formData, setFormData] = useState({});

  const style = {
    "--widget-bg": theme.bgColor || "#ffffff",
    "--widget-text": theme.textColor || "#1a1a1a",
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
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <form
      className="form-widget"
      style={style}
      onSubmit={handleSubmit}
    >
      <div className="form-grid">
        {fields.map((field, i) => (
          <div
            key={i}
            className={`form-field ${field.type === 'textarea' ? 'full-width' : ''}`}
          >
            {field.type === "text" && (
              <input
                className="form-input"
                type="text"
                placeholder={`${field.label}*`}
                required
                onChange={(e) => handleChange(field.label, e.target.value)}
              />
            )}

            {field.type === "email" && (
              <input
                className="form-input"
                type="email"
                placeholder={`${field.label}*`}
                required
                onChange={(e) => handleChange(field.label, e.target.value)}
              />
            )}

            {field.type === "phone" && (
              <input
                className="form-input"
                type="tel"
                placeholder={`${field.label}*`}
                required
                onChange={(e) => handleChange(field.label, e.target.value)}
              />
            )}

            {field.type === "textarea" && (
              <textarea
                className="form-input form-textarea"
                placeholder={`${field.label}*`}
                required
                onChange={(e) => handleChange(field.label, e.target.value)}
              />
            )}

            {field.type === "select" && (
              <select
                className="form-input"
                onChange={(e) => handleChange(field.label, e.target.value)}
                required
                defaultValue=""
                style={{ color: formData[field.label] ? 'inherit' : '#999999' }}
              >
                <option value="" disabled hidden>{field.label}*</option>
                {field.options?.map((opt, idx) => (
                  <option key={idx} value={opt} style={{ color: 'var(--widget-text)' }}>
                    {opt}
                  </option>
                ))}
              </select>
            )}

            {field.type === "radio" && (
              <div className="form-group-container">
                <label className="form-group-label">{field.label}*</label>
                <div className="radio-group">
                  {field.options?.map((opt, idx) => (
                    <label key={idx} className="radio-option">
                      <input
                        type="radio"
                        name={field.label}
                        value={opt}
                        required
                        onChange={(e) => handleChange(field.label, e.target.value)}
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
                    <label className="form-group-label">{field.label}*</label>
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
                                : current.filter(item => item !== opt);
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
                      required
                      onChange={(e) => handleChange(field.label, e.target.checked ? "Yes" : "No")}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-label">{field.label}*</span>
                  </label>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="privacy-checkbox">
        <label className="privacy-label">
          <input type="checkbox" required />
          <span>
            I have read the privacy statement and understand that my personal data will be processed for the purpose of providing the necessary information and assistance.*
          </span>
        </label>
      </div>

      <div className="button-container">
        <button
          className="form-button"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
