# 🌐 Portfolio Website

Website portfolio kelompok berbasis **React + Vite** yang dibuat untuk menampilkan profil, skill, project, dan kontak anggota kelompok dengan desain modern, responsive, dan interaktif.

---

# 🚀 Live Demo

🔗 https://rizki1458654.github.io/portofolio/

---

# 👨‍💻 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/rizki1458654">
        <img src="https://github.com/rizki1458654.png" width="100px;" alt="Rizki"/><br>
        <sub><b>Rizki</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ghefan">
        <img src="https://github.com/ghefan.png" width="100px;" alt="Ghefan"/><br>
        <sub><b>Ghefan</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/rachmantok28">
        <img src="https://github.com/rachmantok28.png" width="100px;" alt="Rachman"/><br>
        <sub><b>Rachman</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/RISKIPRADITYA">
        <img src="https://github.com/RISKIPRADITYA.png" width="100px;" alt="Riski"/><br>
        <sub><b>Riski</b></sub>
      </a>
    </td>
  </tr>
</table>

---

# 📌 Features

- Responsive Design
- Modern UI/UX
- Hero Section
- About Section
- Skills Section
- Projects Section
- Contact Section
- Dark / Light Mode
- Fast Performance menggunakan Vite
- Dynamic Data Management
- GitHub Integration
- Supabase Integration

---

# 🛠️ Tech Stack

Project ini dibuat menggunakan teknologi berikut:

- React JS
- Vite
- JavaScript
- CSS3
- Supabase
- Git & GitHub

---

# 📂 Project Structure

```bash
portofolio/
│── public/
│── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components/
│   │   ├── Profile/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── ThemeToggle.jsx
│   │
│   ├── data/
│   │   ├── biodata.js
│   │   ├── index.js
│   │   └── skills.js
│   │
│   ├── lib/
│   │   ├── github.js
│   │   └── supabase.js
│   │
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Installation

Clone repository:

```bash
git clone https://github.com/rizki1458654/portofolio.git
```

Masuk ke folder project:

```bash
cd portofolio
```

Install dependencies:

```bash
npm install
```

Jalankan project:

```bash
npm run dev
```

Buka browser:

```bash
http://localhost:5173
```

---

# 🌐 Deployment GitHub Pages

## 1. Install gh-pages

```bash
npm install gh-pages --save-dev
```

---

## 2. Edit vite.config.js

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portofolio/',
})
```

---

## 3. Edit package.json

Tambahkan:

```json
"homepage": "https://rizki1458654.github.io/portofolio"
```

Pada bagian scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

---

## 4. Build Project

```bash
npm run build
```

---

## 5. Deploy ke GitHub Pages

```bash
npm run deploy
```

---

## 6. Setup GitHub Pages

Masuk ke:

```bash
Settings → Pages
```

Pilih:

```bash
Deploy from a branch
```

Branch:

```bash
gh-pages
```

Folder:

```bash
/ (root)
```

---

# 🤖 Prompt AI Untuk Membuat Website Portfolio

Berikut prompt yang digunakan untuk membantu membangun website portfolio ini menggunakan AI:

---

## 🎨 Prompt UI/UX

```txt
Buatkan website portfolio kelompok modern menggunakan React dan Vite dengan desain dark mode, responsive, clean UI, hero section, about section, skills, projects, contact, dan footer.
Gunakan desain modern seperti website startup teknologi.
Tambahkan animasi smooth dan layout yang profesional.
```

---

## ⚛️ Prompt React Component

```txt
Buatkan component React terpisah untuk Hero, About, Skills, Projects, Contact, Header, Footer, dan Theme Toggle menggunakan React functional component.
Gunakan struktur folder yang rapi dan reusable.
```

---

## 🌙 Prompt Dark Mode

```txt
Tambahkan fitur dark mode dan light mode menggunakan React state dan localStorage agar tema tersimpan otomatis.
```

---

## 📱 Prompt Responsive Design

```txt
Optimalkan tampilan website agar responsive di desktop, tablet, dan mobile menggunakan CSS modern.
```

---

## 🚀 Prompt Deployment

```txt
Ajarkan cara deploy project React Vite ke GitHub Pages menggunakan gh-pages dan konfigurasi vite.config.js.
```

---

# 📸 Preview

Tambahkan screenshot project di folder assets/public.

```md
![Preview](./src/assets/hero.png)
```

---

# 📚 Tutorial Pengembangan

## Menambahkan Skill Baru

Edit file:

```bash
src/data/skills.js
```

---

## Menambahkan Biodata

Edit file:

```bash
src/data/biodata.js
```

---

## Menambahkan Project

Edit file:

```bash
src/sections/Projects.jsx
```

---

## Mengubah Tema Website

Edit file:

```bash
src/components/ThemeToggle.jsx
```

---

# 📬 Contact

GitHub:
https://github.com/rizki1458654

---

# 📄 License

Project ini dibuat untuk kebutuhan pembelajaran dan pengembangan portfolio kelompok.

MIT License © 2025
