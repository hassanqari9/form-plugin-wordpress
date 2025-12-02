# 🎨 React Form Widget for WordPress

A beautiful, dynamic React form widget that can be embedded anywhere in WordPress without a plugin.

## ✨ Features

- ✅ **No Plugin Required** - Just upload 2 files (JS + CSS)
- ✅ **Fully Dynamic** - Configure fields via HTML attributes
- ✅ **Dark & Light Themes** - Beautiful design for both modes
- ✅ **Multiple Field Types** - Text, email, phone, textarea, select
- ✅ **Responsive Design** - Works perfectly on all devices
- ✅ **Modern UI** - Smooth animations and premium aesthetics

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Mode

```bash
npm run dev
```

Open `http://localhost:5173` to see the demo.

### 3. Build for Production

```bash
npm run build
```

This generates:

- `dist/widget.js`
- `dist/widget.css`

## 📦 WordPress Integration

### Step 1: Upload Files

Upload `widget.js` and `widget.css` to WordPress Media Library.

You'll get URLs like:

```
https://yoursite.com/wp-content/uploads/2025/01/widget.js
https://yoursite.com/wp-content/uploads/2025/01/widget.css
```

### Step 2: Add Widget to Any Page

In any WordPress page, post, or HTML block, add:

```html
<link rel="stylesheet" href="https://yoursite.com/.../widget.css" />

<div
  id="my-form-1"
  class="my-react-form-widget"
  data-theme="dark"
  data-fields='[
    {"type": "text", "label": "Full Name"},
    {"type": "email", "label": "Email Address"},
    {"type": "phone", "label": "Phone Number"},
    {"type": "textarea", "label": "Message"}
  ]'
></div>

<script src="https://yoursite.com/.../widget.js"></script>
```

### Step 3: Customize Fields

Modify the `data-fields` attribute to add/remove fields:

```json
[
  { "type": "text", "label": "Company Name" },
  { "type": "email", "label": "Business Email" },
  {
    "type": "select",
    "label": "Service",
    "options": ["Web Dev", "Design", "SEO"]
  },
  { "type": "textarea", "label": "Project Details" }
]
```

## 🎨 Themes

Set `data-theme` to either:

- `light` - Clean white design with blue accents
- `dark` - Sleek dark design with glowing effects

## 📋 Supported Field Types

| Type       | Description                 | Example               |
| ---------- | --------------------------- | --------------------- |
| `text`     | Single-line text input      | Name, Company         |
| `email`    | Email input with validation | Email Address         |
| `phone`    | Phone number input          | Phone Number          |
| `textarea` | Multi-line text area        | Message, Description  |
| `select`   | Dropdown menu               | Service Type, Country |

## 🔧 Advanced Configuration

### Multiple Widgets on One Page

```html
<!-- Widget 1 -->
<div class="my-react-form-widget" data-theme="light" data-fields="[...]"></div>

<!-- Widget 2 -->
<div class="my-react-form-widget" data-theme="dark" data-fields="[...]"></div>
```

### Custom Styling

Override CSS variables in your theme:

```css
.form-widget.light {
  --primary-color: #ff6b6b;
  --border-radius: 20px;
}
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🛠️ Project Structure

```
form-widget-wordpress/
├── src/
│   ├── App.jsx          # Main form component
│   ├── App.css          # Styling
│   ├── widget.jsx       # Widget initializer
│   └── index.jsx     # Auto-init script
├── dist/                # Build output
│   ├── widget.js
│   └── widget.css
├── index.html           # Demo page
├── vite.config.js       # Build configuration
└── package.json
```

## 🎯 Use Cases

- Contact forms
- Lead generation forms
- Service request forms
- Newsletter signups
- Survey forms
- Booking forms

## 📝 License

MIT License - Feel free to use in any project!

## 🤝 Support

For issues or questions, please open an issue on GitHub.

---

**Made with ❤️ for WordPress developers**
