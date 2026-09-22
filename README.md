<div align="center">

  # 🕯️ Fineline Crafts & Candles
  ### *Artisanal Soy Wax Creations • Custom Fragrance • Aesthetic Living*

  <p align="center">
    A responsive boutique e-commerce web platform built with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Vite</strong>. Features dynamic product configuration, real-time pricing calculations, and automated direct-order generation.
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge" alt="Status" />
  </p>

</div>

---

## 🌟 Key Features

<table>
  <tr>
    <td width="50%">
      <h3>🛍️ Boutique 3-Column Catalog</h3>
      <p>Clean, modern catalog display locked to a balanced 3-column layout on desktop that fluidly adapts across tablet and mobile viewports.</p>
    </td>
    <td width="50%">
      <h3>🎨 Customizer Modal Engine</h3>
      <p>Dedicated configuration modal allowing users to customize fragrance profiles (Jasmine, Lavender, Fruit Basket) and curated candle colors on demand.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>⚡ Instant Price Calculator</h3>
      <p>Client-side arithmetic engine that dynamically computes subtotals ($Price \times Quantity$) in real time as quantities adjust.</p>
    </td>
    <td width="50%">
      <h3>📲 Direct Checkout Integration</h3>
      <p>Automatically compiles personalized product preferences into formatted messaging payloads for seamless order placement via social channels.</p>
    </td>
  </tr>
</table>

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19 (Component-driven architecture) |
| **Language** | TypeScript (Strict type safety via interfaces) |
| **Build Tooling** | Vite (Fast builds and Hot Module Replacement) |
| **Styling & UI** | Pure CSS3 (Responsive Grid, Custom Flexbox, Modal Overlays) |
| **Version Control** | Git & GitHub |

---

## 📁 Project Architecture

```text
fineline-candles/
├── public/                 # Static candle image catalog
├── src/
│   ├── App.css             # 3-column grid layout, modal styles & typography
│   ├── App.tsx             # Main application, customizer modal & calculation logic
│   ├── products.ts         # Candle catalog dataset & CandleProduct interface
│   ├── main.tsx            # Vite root entry & DOM mounting
│   └── index.css           # Global typography & CSS resets
├── index.html              # HTML5 application shell
├── package.json            # Project dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build parameters
