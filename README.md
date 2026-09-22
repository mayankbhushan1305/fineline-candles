<div align="center">

  # 🕯️ Fineline Crafts & Candles
  ### *Artisanal Soy Wax Creations • Custom Fragrance • Aesthetic Living*

  <p align="center">
    A responsive, client-side boutique e-commerce web platform built with <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Vite</strong>. Features dynamic product configuration, real-time pricing calculations, and automated direct-checkout generation.
  </p>

  <!-- Status Badges -->
  <p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge" alt="Status" />
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-interactive-demo-flow">How It Works</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Run Locally</a> •
    <a href="#-project-architecture">Architecture</a>
  </p>

</div>

---

## 🌟 Key Features

<table>
  <tr>
    <td width="50%">
      <h3>🛍️ Boutique 3-Column Catalog</h3>
      <p>Clean, modern catalog display locked to a 3-column desktop layout that fluidly collapses for tablet and mobile viewports, keeping product cards uniform and clean.</p>
    </td>
    <td width="50%">
      <h3>🎨 Customizer Modal Engine</h3>
      <p>Interactive pop-up modal allowing users to configure customized fragrance notes (Jasmine, Lavender, Fruit Basket, etc.) and custom candle color palettes on the fly.</p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>⚡ Instant Price Calculator</h3>
      <p>State-driven arithmetic calculation ($Price \times Quantity$) updates subtotals instantly inside the customization window as quantity buttons are toggled.</p>
    </td>
    <td width="50%">
      <h3>📲 Dynamic Messaging Checkout</h3>
      <p>Parses user-configured order details directly into structured query payloads to populate social messaging order drafts with zero backend friction.</p>
    </td>
  </tr>
</table>

---

## 🔄 Interactive Flow

```mermaid
graph LR
    A[Browse Candle Catalog] --> B[Click 'Customize & Order']
    B --> C[Configure Fragrance & Color]
    C --> D[Adjust Quantity / Live Price Calc]
    D --> E[Confirm Customization]
    E --> F[Generate Dynamic Direct Order Link]
