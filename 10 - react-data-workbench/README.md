# React Data Workbench

## 📌 Overview

A structured React-based workspace focused on building data-driven user interfaces with modular architecture, reusable UI components, and scalable data handling patterns.

This repository currently includes authentication flows, analytical UI components, and integration between mock data and API-driven rendering.

---

## ⚙️ Current Implementation

### 🔐 Authentication

- User Login Form
- User Registration Form
- Form validation using Formik

### 📊 Data Visualization & UI

- Interactive data tables
- Bar chart visualization
- Pie and donut chart rendering
- Line and gauge charts
- Sankey diagram visualization
- Grouped and stacked chart layouts
- Structured analytical UI components

### 🔄 Data Handling

- Mock data integration for development
- API-based data fetching
- Switchable mock ↔ API architecture
- Data transformation for chart rendering

---

## 🛠️ Tech Stack

- React.js
- Vite
- Formik
- Ant Design
- @antv/g2

---

## 📂 Structure

```bash
src/
├── core/
│   ├── api/
│   │   ├── chartApi.js
│   │   └── userApi.js
│   │
│   └── mock/
│       ├── chartMock.js
│       └── userMock.js
│
├── modules/
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   └── data-display/
│       ├── DataTable.jsx
│       ├── BarChart.jsx
│       ├── PieChart.jsx
│       ├── DonutChart.jsx
│       ├── LineChart.jsx
│       ├── GaugeChart.jsx
│       ├── RoseChart.jsx
│       ├── SankeyChart.jsx
│       ├── GroupedBarChart.jsx
│       └── StackedColumnLineChart.jsx
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```
---

## 🚀 Running the Project

```bash
npm install
npm run dev
```
