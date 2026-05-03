# 🌸 BELAJAR — Panduan Lengkap Project Piko & Lea

> **Dokumen ini menjelaskan SEMUA yang terjadi di Fase 1 project website Piko & Lea.**
> Ditulis untuk kamu yang baru pertama kali belajar coding. Santai aja, kita bahas pelan-pelan! 😊

---

## Daftar Isi

1. [Struktur Folder](#1-struktur-folder)
2. [Setup & Konfigurasi](#2-setup--konfigurasi)
3. [Setiap File yang Dibuat](#3-setiap-file-yang-dibuat)
4. [Sistem Bilingual (i18n)](#4-sistem-bilingual-i18n)
5. [Routing](#5-routing)
6. [Komponen](#6-komponen)
7. [Halaman (Pages)](#7-halaman-pages)
8. [Data Mock](#8-data-mock)
9. [Terminal Commands](#9-terminal-commands)
10. [Cara Menjalankan Project](#10-cara-menjalankan-project)
11. [Behind the Scenes: Kesalahan Sesi Ini](#11-behind-the-scenes-kesalahan-sesi-ini)

---

## 1. Struktur Folder

### Apa itu Struktur Folder?

Bayangin folder project kamu itu kayak **lemari baju**. Kalau semua baju dicampur jadi satu, susah nyarinya kan? Makanya kita pisahkan — kaos di laci 1, celana di laci 2, jaket di laci 3. Sama kayak coding: kita pisahkan file berdasarkan fungsinya.

### Pohon Folder Lengkap

```
ganci web/                        ← 🏠 Folder utama project
│
├── index.html                    ← Halaman HTML utama (pintu masuk website)
├── package.json                  ← Daftar "belanjaan" (library yang dipakai)
├── vite.config.js                ← Pengaturan Vite (build tool)
├── tailwind.config.js            ← Pengaturan Tailwind CSS (styling)
├── postcss.config.js             ← Pengaturan PostCSS (pemroses CSS)
├── PRD.md                        ← Dokumen kebutuhan produk (blueprint)
├── BELAJAR.md                    ← File ini! 📖
│
├── node_modules/                 ← 📦 Folder library yang terinstall (JANGAN DIEDIT)
├── dist/                         ← 📦 Hasil build production (auto-generated)
│
└── src/                          ← 💻 SEMUA kode kita ada di sini!
    │
    ├── main.jsx                  ← Entry point React (file pertama yang dijalankan)
    ├── index.css                 ← File CSS utama (styling global)
    ├── App.jsx                   ← Komponen utama + pengaturan routing
    │
    ├── assets/                   ← 🖼️ Gambar, ikon, file statis
    │
    ├── components/               ← 🧩 Komponen yang dipakai ulang di banyak halaman
    │   ├── Navbar.jsx            ← Menu navigasi di atas
    │   ├── Footer.jsx            ← Bagian bawah website
    │   ├── ProductCard.jsx       ← Kartu produk (dipakai di Home & Catalog)
    │   ├── FloatingWA.jsx        ← Tombol WhatsApp melayang
    │   └── LanguageSwitcher.jsx  ← Toggle ganti bahasa ID/EN
    │
    ├── pages/                    ← 📄 Halaman-halaman website
    │   ├── Home.jsx              ← Halaman utama / landing page
    │   ├── Catalog.jsx           ← Halaman katalog semua produk
    │   ├── ProductDetail.jsx     ← Halaman detail 1 produk
    │   └── HowToOrder.jsx        ← Halaman cara order
    │
    ├── data/                     ← 📊 Data palsu (mock) untuk development
    │   └── mockData.js           ← Data produk, testimoni, pengaturan
    │
    └── i18n/                     ← 🌐 File terjemahan (internasionalisasi)
        ├── index.js              ← Konfigurasi sistem bahasa
        ├── id.json               ← Semua teks dalam Bahasa Indonesia
        └── en.json               ← Semua teks dalam English
```

### Penjelasan Setiap Folder

**`src/` — Source Code**
Semua kode yang kita tulis ada di folder ini. Kenapa namanya `src`? Itu singkatan dari **source** (sumber). Ini standar di hampir semua project JavaScript.

**`src/components/` — Komponen Reusable**
"Komponen" itu kayak **LEGO block**. Kamu bikin sekali, terus bisa dipasang di banyak tempat. Contoh: `ProductCard.jsx` dipakai di halaman Home DAN halaman Catalog. Daripada nulis kode yang sama 2x, mending bikin 1 komponen terus panggil di 2 tempat.

**`src/pages/` — Halaman**
Setiap file di sini = 1 halaman di website. Kenapa dipisah dari `components`? Karena **halaman** itu unik — hanya tampil 1 kali. Sedangkan **komponen** bisa dipakai berkali-kali.

**`src/data/` — Data**
Tempat menyimpan data. Sekarang isinya data palsu (mock). Nanti di Fase 3, data ini akan diganti dengan data asli dari database Supabase.

**`src/i18n/` — Internationalization**
`i18n` = **i** + 18 huruf + **n** = singkatan dari kata "internationalization". Folder ini berisi semua teks website dalam 2 bahasa (Indonesia & English).

**`node_modules/` — JANGAN DIEDIT!**
Folder ini berisi semua library yang kita install. Isinya ribuan file. Kamu **TIDAK PERLU** mengedit atau menghapus folder ini. Kalau hilang, tinggal jalankan `npm install` lagi.

**`dist/` — Distribution**
Folder ini muncul setelah kita jalankan `npm run build`. Isinya versi "jadi" dari website yang siap di-upload ke server. Kamu juga tidak perlu mengedit ini.

---

## 2. Setup & Konfigurasi

### 2.1 Apa itu Vite?

**Analogi:** Bayangin kamu nulis novel. Setiap kali kamu ubah 1 kalimat, kamu harus cetak ulang seluruh buku. Capek kan? Nah, **Vite** itu kayak printer super cepat yang cuma cetak ulang halaman yang berubah, bukan seluruh buku.

**Vite** (dibaca "vit", bahasa Prancis artinya "cepat") adalah **build tool** — alat yang:
1. Menjalankan website kamu di komputer saat development (`npm run dev`)
2. Mengubah kode React + JSX menjadi JavaScript biasa yang bisa dibaca browser
3. Membangun versi final website untuk di-upload (`npm run build`)

**Kenapa Vite, bukan Create React App (CRA)?**
- CRA itu "old school" — lambat, berat, dan sudah tidak direkomendasikan lagi oleh tim React
- Vite **jauh lebih cepat** — server development start dalam hitungan milidetik
- Vite lebih ringan dan modern

### File: vite.config.js

```js
// Ini mengimpor fungsi defineConfig dari library vite
// "import" itu kayak bilang "ambilkan alat ini dari kotak perkakas"
import { defineConfig } from 'vite'

// Ini mengimpor plugin React — agar Vite mengerti kode React/JSX
import react from '@vitejs/plugin-react'

// defineConfig() = fungsi untuk membuat konfigurasi Vite
export default defineConfig({
  // plugins = daftar "tambahan" yang dipasang ke Vite
  // react() = plugin agar Vite bisa memproses file .jsx (kode React)
  plugins: [react()],
})
```

### 2.2 Apa itu Tailwind CSS?

**Analogi:** CSS biasa itu kayak melukis — kamu harus campur cat sendiri, pilih kuas sendiri. Tailwind CSS itu kayak **cat by number** — tinggal tulis nama warna yang kamu mau langsung di HTML.

**Tailwind CSS** adalah framework CSS yang menggunakan pendekatan **utility-first**. Artinya, alih-alih menulis CSS terpisah, kamu langsung tulis styling di dalam elemen HTML menggunakan class-class kecil.

**Contoh perbandingan:**

CSS Biasa:
```css
/* File CSS terpisah */
.tombol-pink {
  background-color: pink;
  color: white;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: bold;
}
```
```html
<button class="tombol-pink">Klik Sini</button>
```

Tailwind CSS:
```html
<!-- Langsung tulis styling di class, tanpa file CSS terpisah -->
<button class="bg-pink-500 text-white px-6 py-3 rounded-full font-bold">Klik Sini</button>
```

Setiap "kata" di dalam class punya arti:
- `bg-pink-500` → **b**ack**g**round warna pink shade 500
- `text-white` → warna teks putih
- `px-6` → **p**adding horisontal (**x** axis) sebesar 1.5rem (24px)
- `py-3` → **p**adding vertikal (**y** axis) sebesar 0.75rem (12px)
- `rounded-full` → sudut bulatnya full circle (lingkaran)
- `font-bold` → teks tebal

### File: tailwind.config.js (baris per baris)

```js
/** @type {import('tailwindcss').Config} */
// ↑ Ini komentar khusus untuk editor kode (VSCode).
//   Fungsinya biar VSCode kasih autocomplete saat mengetik config.
//   Tidak mempengaruhi kode.

export default {
  // === CONTENT ===
  // Tailwind perlu tahu: "File mana aja yang pakai class Tailwind?"
  // Supaya Tailwind HANYA meng-generate CSS untuk class yang benar-benar dipakai.
  // Ini membuat file CSS final kecil dan ringan.
  content: [
    "./index.html",                    // File HTML utama
    "./src/**/*.{js,ts,jsx,tsx}",       // Semua file JS/JSX di folder src (** = semua subfolder)
  ],

  // === THEME ===
  // Di sinilah kita kustomisasi tampilan. "extend" artinya MENAMBAHKAN
  // ke tema bawaan Tailwind tanpa menghapus yang sudah ada.
  theme: {
    extend: {
      // --- WARNA CUSTOM ---
      // Kita bikin warna-warna sesuai brand Piko & Lea (dari PRD.md)
      colors: {
        pink: {
          main: '#F48FB1',     // Pink utama — untuk tombol CTA, highlight
          light: '#FCE4EC',    // Pink muda — untuk background section
          medium: '#F8BBD9',   // Pink sedang — untuk header, divider
        },
        purple: {
          accent: '#CE93D8',   // Ungu aksen — untuk badge, dekorasi
          dark: '#4A148C',     // Ungu gelap — untuk heading, teks penting
        },
        gray: {
          text: '#757575',     // Abu-abu — untuk teks deskripsi, caption
        },
      },

      // --- FONT CUSTOM ---
      // Kita pakai 3 font dari Google Fonts
      fontFamily: {
        // Cara pakai di kode: className="font-playfair"
        playfair: ['"Playfair Display"', 'serif'],   // Font elegan untuk heading
        nunito: ['Nunito', 'sans-serif'],             // Font rounded cute untuk body text
        inter: ['Inter', 'sans-serif'],               // Font clean untuk teks kecil
      },

      // --- ANIMASI CUSTOM ---
      animation: {
        // Animasi pulse yang lebih lambat (untuk tombol WA)
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Animasi melayang naik-turun
        'float': 'float 3s ease-in-out infinite',
        // Animasi kilauan bergerak
        'shimmer': 'shimmer 2s linear infinite',
      },

      // --- KEYFRAMES ---
      // Keyframes = langkah-langkah gerakan animasi
      // Kayak koreografi tari: langkah 1, langkah 2, langkah 3...
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },      // Awal & akhir: posisi normal
          '50%': { transform: 'translateY(-10px)' },        // Tengah: naik 10px
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },          // Mulai dari kiri
          '100%': { backgroundPosition: '200% 0' },         // Bergerak ke kanan
        },
      },
    },
  },

  plugins: [],   // Tidak pakai plugin tambahan
}
```

**Cara pakai warna custom di kode:**
- `bg-pink-main` → background warna #F48FB1
- `text-purple-dark` → teks warna #4A148C
- `border-pink-light` → border warna #FCE4EC

### File: postcss.config.js

```js
// PostCSS adalah "mesin pengolah CSS". Dia yang memproses file CSS kita.
// Di sini kita pasang 2 plugin:
export default {
  plugins: {
    tailwindcss: {},      // Plugin Tailwind — mengubah class Tailwind jadi CSS asli
    autoprefixer: {},     // Plugin Autoprefixer — otomatis menambahkan prefix browser
                          // Contoh: -webkit-transform, -moz-transform, dll
                          // Supaya CSS kita jalan di semua browser
  },
}
```

### File: index.css (baris per baris)

```css
/* === IMPORT GOOGLE FONTS ===
   Ini mengunduh 3 font dari internet (Google Fonts).
   HARUS di baris paling atas, sebelum @tailwind!
   Kalau tidak, akan error "import must precede all other statements" */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Nunito:wght@400;600;700;800&family=Playfair+Display:wght@400;600;700&display=swap');

/* === TAILWIND DIRECTIVES ===
   3 baris ini WAJIB ada. Ini menginject CSS dari Tailwind ke project kita. */
@tailwind base;        /* Reset CSS bawaan browser + base styles */
@tailwind components;  /* Class-class komponen (bisa kita custom di bawah) */
@tailwind utilities;   /* Semua utility class Tailwind (bg-*, text-*, p-*, dll) */

/* === BASE LAYER ===
   @layer base = tempat untuk override style default HTML.
   Semua elemen HTML di seluruh website akan terpengaruh. */
@layer base {
  /* Reset margin & padding semua elemen */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;   /* Ukuran elemen termasuk padding & border */
  }

  html {
    scroll-behavior: smooth;  /* Scroll halus saat klik link anchor */
  }

  body {
    font-family: 'Nunito', sans-serif;           /* Font default seluruh website */
    color: #333;                                  /* Warna teks default: abu gelap */
    background-color: #FFFFFF;                    /* Background putih */
    -webkit-font-smoothing: antialiased;          /* Teks lebih halus di Chrome/Safari */
    -moz-osx-font-smoothing: grayscale;           /* Teks lebih halus di Firefox Mac */
  }

  /* Semua heading pakai font Playfair Display */
  h1, h2, h3 {
    font-family: 'Playfair Display', serif;
    color: #4A148C;    /* Warna ungu gelap */
  }

  /* Warna saat user select/highlight teks */
  ::selection {
    background-color: #F8BBD9;   /* Background pink saat diselect */
    color: #4A148C;              /* Teks ungu saat diselect */
  }
}

/* === COMPONENTS LAYER ===
   @layer components = tempat bikin class custom yang reusable.
   Mirip kayak bikin "shortcut" — 1 class = banyak styling. */
@layer components {
  /* Tombol utama (pink, rounded, bold) */
  .btn-primary {
    @apply bg-pink-main text-white font-nunito font-bold px-6 py-3 rounded-full
           shadow-md hover:shadow-lg hover:brightness-110
           transition-all duration-300 ease-in-out;
    /* @apply = "terapkan class-class Tailwind berikut ke class ini"
       shadow-md = bayangan medium
       hover:shadow-lg = saat dihover, bayangan jadi lebih besar
       hover:brightness-110 = saat dihover, warna sedikit lebih terang
       transition-all duration-300 = animasi transisi 0.3 detik untuk semua perubahan */
  }

  /* Tombol sekunder (putih, border pink) */
  .btn-secondary {
    @apply bg-white text-pink-main font-nunito font-bold px-6 py-3 rounded-full
           border-2 border-pink-main shadow-md hover:bg-pink-light
           transition-all duration-300 ease-in-out;
  }

  /* Kartu produk */
  .card-product {
    @apply bg-white rounded-2xl shadow-md border border-pink-light
           hover:shadow-xl hover:scale-[1.03] hover:border-pink-medium
           transition-all duration-300 ease-in-out overflow-hidden;
    /* rounded-2xl = sudut melengkung extra large (1rem)
       hover:scale-[1.03] = saat dihover, membesar 3%
       overflow-hidden = konten yang keluar dari batas akan disembunyikan */
  }

  /* Padding standar untuk setiap section */
  .section-padding {
    @apply px-4 py-16 md:px-8 lg:px-16 xl:px-24;
    /* px-4 = padding kiri-kanan 1rem (16px) — untuk mobile
       md:px-8 = di layar medium (tablet), padding jadi 2rem
       lg:px-16 = di layar large (desktop), padding jadi 4rem
       xl:px-24 = di layar extra large, padding jadi 6rem */
  }

  /* Heading setiap section */
  .heading-section {
    @apply text-3xl md:text-4xl font-playfair font-bold text-purple-dark text-center mb-4;
  }

  /* Sub-heading setiap section */
  .subheading-section {
    @apply text-gray-text font-nunito text-center text-base md:text-lg mb-12 max-w-2xl mx-auto;
    /* max-w-2xl = lebar maksimal agar teks tidak terlalu lebar
       mx-auto = margin kiri-kanan auto (jadi center) */
  }

  /* Kartu dengan efek kaca/glass */
  .glass-card {
    @apply bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg;
    /* bg-white/70 = background putih dengan 70% opacity (transparan)
       backdrop-blur-md = blur konten di belakang kartu (efek kaca) */
  }
}

/* === UTILITIES LAYER ===
   Utility custom tambahan yang sering kita pakai */
@layer utilities {
  /* Teks dengan gradien warna pink-ungu */
  .text-gradient-pink {
    @apply bg-gradient-to-r from-pink-main to-purple-accent bg-clip-text text-transparent;
    /* Triknya: bikin background gradien, tapi clip ke bentuk teks.
       Lalu bikin teks transparan. Hasilnya: teks terlihat berwarna gradien! */
  }

  /* Background gradien untuk hero section */
  .bg-gradient-hero {
    background: linear-gradient(135deg, #FCE4EC 0%, #F8BBD9 50%, #E1BEE7 100%);
    /* Gradien 135 derajat: pink muda → pink sedang → ungu muda */
  }
}

/* === CUSTOM SCROLLBAR ===
   Mengubah tampilan scrollbar browser agar sesuai tema */
::-webkit-scrollbar {
  width: 8px;                /* Lebar scrollbar */
}
::-webkit-scrollbar-track {
  background: #FCE4EC;      /* Warna track: pink muda */
}
::-webkit-scrollbar-thumb {
  background: #F48FB1;      /* Warna thumb (yang digeser): pink */
  border-radius: 4px;       /* Sudut melengkung */
}
::-webkit-scrollbar-thumb:hover {
  background: #CE93D8;      /* Saat dihover: ungu */
}
```

### 2.3 Apa itu package.json?

**Analogi:** `package.json` itu kayak **daftar belanjaan** atau **resep masakan**. Di situ tertulis semua "bahan" (library) yang dibutuhkan project ini, lengkap dengan versinya.

```json
{
  "name": "ganci-web",       // Nama project
  "private": true,            // Tidak dipublikasikan ke npm
  "version": "0.0.0",         // Versi project
  "type": "module",           // Menggunakan ES Modules (import/export)

  "scripts": {
    // "scripts" = perintah shortcut yang bisa dijalankan pakai "npm run [nama]"
    "dev": "vite",             // npm run dev → jalankan development server
    "build": "vite build",     // npm run build → bikin versi production
    "lint": "eslint .",        // npm run lint → cek kualitas kode
    "preview": "vite preview"  // npm run preview → preview hasil build
  },

  "dependencies": {
    // Library yang DIBUTUHKAN website saat jalan
    "framer-motion": "^12.38.0",       // Library animasi (gerak, transisi, hover)
    "i18next": "^26.0.8",              // Library inti multi-bahasa
    "i18next-browser-languagedetector": "^8.2.1",  // Deteksi bahasa browser user
    "lucide-react": "^1.14.0",         // Library ikon (panah, menu, bintang, dll)
    "react": "^19.2.5",                // React — framework UI utama
    "react-dom": "^19.2.5",            // React DOM — penghubung React ke browser
    "react-i18next": "^17.0.6",        // Penghubung i18next ke React
    "react-router-dom": "^7.14.2",     // Library routing (navigasi antar halaman)
    "zustand": "^5.0.12"               // State management (belum dipakai di Fase 1)
  },

  "devDependencies": {
    // Library yang HANYA dibutuhkan saat development (tidak ikut ke production)
    "@vitejs/plugin-react": "^6.0.1",  // Plugin Vite untuk React
    "autoprefixer": "^10.5.0",         // Auto-tambah prefix CSS untuk browser
    "postcss": "^8.5.13",              // Mesin pengolah CSS
    "tailwindcss": "^3.4.19",          // Tailwind CSS v3
    "vite": "^8.0.10",                 // Vite build tool
    "eslint": "^10.2.1",              // Linter (pengecek kualitas kode)
    // ... dan beberapa plugin eslint lainnya
  }
}
```

**Apa itu tanda `^` di versi?**
`"^12.38.0"` artinya: "pakai versi 12.38.0 atau versi minor/patch yang lebih baru, tapi TIDAK versi major yang berbeda". Jadi bisa update ke 12.39.0 atau 12.38.5, tapi TIDAK ke 13.0.0.


---

## 3. Setiap File yang Dibuat

### 3.1 index.html — Pintu Masuk Website

Ini adalah satu-satunya file HTML di project React. Kenapa cuma 1? Karena React adalah **Single Page Application (SPA)** — seluruh website dimuat dari 1 halaman HTML ini. React yang mengubah isinya secara dinamis.

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <!-- Favicon: ikon kecil di tab browser. Kita pakai emoji bunga 🌸 -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,..." />
    <!-- Viewport: agar website responsif di HP -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Description: deskripsi untuk Google/SEO -->
    <meta name="description" content="Piko & Lea — Keychain Custom Handmade..." />
    <!-- OG tags: untuk preview saat link dishare di sosmed -->
    <meta property="og:title" content="Piko & Lea — Keychain Custom Handmade" />
    <title>Piko & Lea — Keychain Custom Handmade 🌸</title>
  </head>
  <body>
    <!-- div#root: "wadah" tempat React merender semua konten -->
    <div id="root"></div>
    <!-- Script utama: file pertama yang dijalankan -->
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 3.2 main.jsx — Entry Point React

```jsx
import { StrictMode } from 'react'
// StrictMode = mode ketat yang membantu mendeteksi masalah di kode.
// Hanya aktif saat development, tidak berpengaruh di production.

import { createRoot } from 'react-dom/client'
// createRoot = fungsi untuk "menempelkan" React ke halaman HTML.
// react-dom/client = modul React yang khusus berurusan dengan browser DOM.

import './index.css'
// Mengimpor file CSS. "./" artinya "di folder yang sama".
// Ini yang membuat Tailwind CSS aktif di seluruh website.

import App from './App.jsx'
// Mengimpor komponen App — komponen utama yang berisi seluruh website.

// createRoot() = bikin "akar" React
// document.getElementById('root') = cari elemen <div id="root"> di index.html
// .render() = tampilkan komponen <App /> di dalam div tersebut
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

**Alur kerja:** Browser buka index.html → index.html memuat main.jsx → main.jsx merender `<App />` di dalam `<div id="root">` → Website muncul!

### 3.3 App.jsx — Pusat Pengaturan

```jsx
// === IMPORT ===
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// BrowserRouter: membungkus seluruh app agar bisa pakai routing
// Routes, Route: untuk mendefinisikan halaman mana tampil di URL mana
// useLocation: hook untuk tahu URL saat ini

import { useEffect } from 'react';
// useEffect: hook React untuk menjalankan kode saat sesuatu berubah
// Contoh: scroll ke atas saat pindah halaman

import { AnimatePresence } from 'framer-motion';
// AnimatePresence: membungkus halaman agar ada animasi saat ganti halaman

import './i18n';
// Mengaktifkan sistem multi-bahasa. Cukup import sekali di sini.

// Import semua komponen dan halaman
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import HowToOrder from './pages/HowToOrder';

// Komponen untuk scroll ke atas saat pindah halaman
const ScrollToTop = () => {
  const { pathname } = useLocation();
  // useLocation() mengembalikan objek, kita ambil "pathname" (URL path)
  // Contoh: pathname = "/catalog"

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll ke posisi paling atas
  }, [pathname]);
  // [pathname] = "jalankan fungsi ini setiap kali pathname berubah"

  return null;  // Komponen ini tidak merender apa-apa secara visual
};

const AppContent = () => {
  const location = useLocation();

  return (
    <>
      {/* <> dan </> disebut "Fragment" — pembungkus tanpa elemen HTML tambahan */}
      <ScrollToTop />
      <Navbar />       {/* Navbar tampil di SEMUA halaman */}
      <main className="min-h-screen">
        {/* min-h-screen = tinggi minimal = tinggi layar penuh */}
        <AnimatePresence mode="wait">
          {/* mode="wait" = tunggu animasi keluar selesai sebelum animasi masuk */}
          <Routes location={location} key={location.pathname}>
            {/* Setiap Route = 1 halaman */}
            <Route path="/" element={<Home />} />
            {/* path="/" = URL root (homepage) → tampilkan komponen Home */}
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<ProductDetail />} />
            {/* :id = parameter dinamis. Bisa "/catalog/keychain-sketsa-bw" dll */}
            <Route path="/how-to-order" element={<HowToOrder />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />       {/* Footer tampil di SEMUA halaman */}
      <FloatingWA />   {/* Tombol WA melayang di SEMUA halaman */}
    </>
  );
};

function App() {
  return (
    <Router>
      {/* Router HARUS membungkus semua komponen yang pakai routing */}
      <AppContent />
    </Router>
  );
}

export default App;
// "export default" = "file ini mengekspor komponen App sebagai export utama"
// Agar bisa di-import di main.jsx: import App from './App.jsx'
```

---

## 4. Sistem Bilingual (i18n)

### Apa itu i18n?

**i18n** = singkatan dari **i**nternationalizatio**n** (huruf i, 18 huruf di tengah, huruf n).
Artinya: sistem untuk membuat website bisa menampilkan teks dalam berbagai bahasa.

**Kenapa perlu?** Karena di PRD disebutkan website harus bilingual (ID & EN). Calon customer bisa dari Indonesia maupun luar negeri.

### Apa itu react-i18next?

**react-i18next** adalah library yang menghubungkan sistem i18n ke React. Cara kerjanya:

1. Kita tulis semua teks di file JSON (id.json & en.json)
2. Di kode React, kita pakai fungsi `t('key')` untuk mengambil teks sesuai bahasa aktif
3. Saat user ganti bahasa, SEMUA teks di website otomatis berubah

### File: src/i18n/index.js (Konfigurasi)

```js
import i18n from 'i18next';
// Library inti i18n

import { initReactI18next } from 'react-i18next';
// Plugin untuk menghubungkan i18n ke React

import LanguageDetector from 'i18next-browser-languagedetector';
// Plugin untuk mendeteksi bahasa browser user secara otomatis

import id from './id.json';  // File teks Bahasa Indonesia
import en from './en.json';  // File teks English

i18n
  .use(LanguageDetector)     // Aktifkan deteksi bahasa
  .use(initReactI18next)     // Hubungkan ke React
  .init({
    resources: {
      // Daftarkan file terjemahan
      id: { translation: id },   // Bahasa Indonesia
      en: { translation: en },   // English
    },
    fallbackLng: 'id',
    // fallbackLng = bahasa cadangan. Kalau teks tidak ditemukan, pakai Bahasa Indonesia.

    interpolation: {
      escapeValue: false,
      // React sudah otomatis mengamankan dari XSS attack, jadi tidak perlu escape.
    },

    detection: {
      order: ['localStorage', 'navigator'],
      // Urutan deteksi bahasa:
      // 1. Cek localStorage (bahasa yang user pilih sebelumnya)
      // 2. Cek bahasa browser/HP user

      caches: ['localStorage'],
      // Simpan pilihan bahasa di localStorage agar tidak reset saat refresh
    },
  });

export default i18n;
```

### Apa itu localStorage?

**Analogi:** localStorage itu kayak **sticky note yang ditempel di browser**. Data yang disimpan di sana TETAP ada meskipun browser ditutup dan dibuka lagi.

Kapan data hilang? Hanya kalau user sengaja menghapus data browser (clear cache/storage).

Dalam project ini, kita simpan pilihan bahasa di localStorage:
- User pilih English → disimpan `i18nextLng: "en"` di localStorage
- User refresh halaman → website cek localStorage → "oh, bahasa English" → tampilkan English
- Tanpa localStorage, setiap kali refresh bahasa akan reset ke default (Indonesia)

### File Terjemahan: id.json & en.json

File ini berisi SEMUA teks di website dalam format JSON. Strukturnya sama persis, hanya isinya yang beda bahasa.

**Contoh potongan id.json:**
```json
{
  "nav": {
    "home": "Beranda",
    "catalog": "Katalog",
    "howToOrder": "Cara Order"
  },
  "hero": {
    "tagline": "Keychain Custom Handmade",
    "subtitle": "Abadikan momen spesialmu dalam gantungan kunci yang dibuat dengan cinta 🌸",
    "ctaCatalog": "Lihat Produk",
    "ctaOrder": "Order via WA"
  }
}
```

**Contoh potongan en.json (key sama, value beda bahasa):**
```json
{
  "nav": {
    "home": "Home",
    "catalog": "Catalog",
    "howToOrder": "How to Order"
  },
  "hero": {
    "tagline": "Custom Handmade Keychains",
    "subtitle": "Capture your special moments in a keychain made with love 🌸",
    "ctaCatalog": "View Products",
    "ctaOrder": "Order via WA"
  }
}
```

**Cara pakai di kode React:**
```jsx
const { t } = useTranslation();
// t = fungsi translate. Ambil teks sesuai bahasa aktif.

// Kalau bahasa aktif = "id":
t('nav.home')        // → "Beranda"
t('hero.tagline')    // → "Keychain Custom Handmade"

// Kalau bahasa aktif = "en":
t('nav.home')        // → "Home"
t('hero.tagline')    // → "Custom Handmade Keychains"
```

Titik (`.`) dipakai untuk mengakses nested key. `nav.home` = cari key `home` di dalam object `nav`.

### Bagaimana Language Switcher Bekerja?

```
User klik toggle EN → i18n.changeLanguage('en') → i18n memberitahu SEMUA komponen
→ Setiap komponen yang pakai t() otomatis re-render dengan teks English
→ Pilihan 'en' disimpan di localStorage
→ Selesai! Seluruh website berubah ke English dalam hitungan milidetik
```


---

## 5. Routing

### Apa itu Routing?

**Analogi:** Routing itu kayak **papan penunjuk jalan** di mall. Kalau kamu mau ke toko baju → belok kiri. Mau ke food court → belok kanan. Di website, routing menentukan: "URL ini tampilkan halaman apa?"

- URL `/` → tampilkan halaman Home
- URL `/catalog` → tampilkan halaman Catalog
- URL `/catalog/keychain-couple` → tampilkan detail produk Couple
- URL `/how-to-order` → tampilkan halaman Cara Order

### Website Biasa vs React (SPA)

**Website biasa (Multi Page):**
Setiap kali klik link, browser memuat SELURUH halaman baru dari server. Layar jadi putih sebentar (loading). Setiap halaman = 1 file HTML terpisah.

**React / SPA (Single Page Application):**
Halaman TIDAK dimuat ulang. React hanya **mengganti isi** di dalam `<div id="root">` secara instan. Makanya terasa cepat — tidak ada layar putih saat pindah halaman.

### React Router v6

**React Router** adalah library yang mengurus routing di React. Cara kerjanya:

```jsx
// Di App.jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/catalog" element={<Catalog />} />
  <Route path="/catalog/:id" element={<ProductDetail />} />
  <Route path="/how-to-order" element={<HowToOrder />} />
</Routes>
```

**Penjelasan:**
- `<Routes>` = wadah semua route
- `<Route path="/catalog" element={<Catalog />} />` = "jika URL = /catalog, tampilkan komponen Catalog"
- `:id` = **parameter dinamis**. Artinya URL bisa apa saja setelah /catalog/. Contoh:
  - `/catalog/keychain-sketsa-bw` → id = "keychain-sketsa-bw"
  - `/catalog/keychain-couple` → id = "keychain-couple"

**Navigasi pakai `<Link>`:**
```jsx
// BUKAN <a href="..."> tapi <Link to="...">
<Link to="/catalog">Lihat Katalog</Link>

// Kenapa? Karena <a> biasa akan memuat ulang seluruh halaman.
// <Link> hanya mengganti konten tanpa reload — jauh lebih cepat!
```

---

## 6. Komponen

### Apa itu Komponen di React?

**Analogi:** Komponen itu kayak **resep masakan yang bisa dipanggil berkali-kali**. Kamu bikin resep "Nasi Goreng" sekali, tapi bisa masak nasi goreng kapan aja tanpa nulis resep ulang.

Di React, komponen adalah **fungsi JavaScript yang mengembalikan tampilan (JSX)**. JSX itu HTML yang ditulis di dalam JavaScript.

```jsx
// Ini adalah komponen sederhana
const SayHello = () => {
  return <h1>Halo Dunia!</h1>;
};

// Cara pakainya di komponen lain:
<SayHello />
```

**Kenapa dipecah jadi komponen-komponen kecil?**
1. **Reusable** — ProductCard dipakai di Home DAN Catalog
2. **Mudah dibaca** — daripada 1 file 1000 baris, mending 10 file @100 baris
3. **Mudah debug** — kalau Navbar error, tinggal cek file Navbar.jsx saja
4. **Kolaborasi** — 2 orang bisa kerja di 2 komponen berbeda tanpa bentrok

### 6.1 Navbar.jsx — Menu Navigasi

**Apa yang dilakukan:**
- Menampilkan logo "Piko & Lea" di kiri
- Menu navigasi (Beranda, Katalog, Cara Order) di tengah
- Language switcher di kanan
- Di mobile: menu berubah jadi hamburger (☰)
- Sticky: tetap di atas saat scroll
- Berubah transparan/solid saat scroll

**Konsep penting di Navbar:**

```jsx
const [isOpen, setIsOpen] = useState(false);
```
**useState** = hook untuk menyimpan "state" (kondisi/data yang bisa berubah).
- `isOpen` = variabel yang nilainya true atau false
- `setIsOpen` = fungsi untuk mengubah nilai isOpen
- `useState(false)` = nilai awal = false (menu tutup)

Saat user klik hamburger: `setIsOpen(!isOpen)` → isOpen jadi true → menu terbuka.
Saat klik lagi: isOpen jadi false → menu tertutup.

```jsx
const [scrolled, setScrolled] = useState(false);
```
State untuk mendeteksi apakah user sudah scroll ke bawah. Kalau sudah, navbar jadi lebih solid (bg-white/95 + shadow).

```jsx
useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 20);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```
**useEffect** = hook untuk menjalankan kode "efek samping" — hal yang terjadi di luar render.
- `window.addEventListener('scroll', ...)` = "dengarkan event scroll"
- `window.scrollY > 20` = "apakah sudah scroll lebih dari 20px?"
- `return () => ...` = "bersihkan listener saat komponen dihapus" (cleanup)
- `[]` = jalankan hanya sekali saat komponen pertama kali muncul

**Responsive design:**
```jsx
<div className="hidden md:flex">     {/* Desktop: tampil. Mobile: sembunyi */}
<button className="md:hidden">       {/* Desktop: sembunyi. Mobile: tampil */}
```
- `hidden` = `display: none` (disembunyikan)
- `md:flex` = di layar medium (>768px), tampilkan sebagai flex
- `md:hidden` = di layar medium, sembunyikan

### 6.2 Footer.jsx — Bagian Bawah Website

**Fitur:**
- Wave SVG decoration di atas (gelombang ungu)
- 3 kolom: Brand info, Quick links, Contact & Social
- Background ungu gelap (#4A148C) sesuai PRD

**SVG Wave:**
```jsx
<svg viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z"
        fill="#4A148C" />
</svg>
```
Ini menggambar bentuk gelombang menggunakan SVG (Scalable Vector Graphics). Path `d="..."` adalah instruksi gambar: M = move, C = curve, L = line, Z = close path.

### 6.3 ProductCard.jsx — Kartu Produk

**Props:** Komponen ini menerima data produk dari "parent" (komponen yang memanggilnya).

```jsx
const ProductCard = ({ product, index = 0 }) => {
```
- `{ product, index = 0 }` = **destructuring props**
- `product` = object data produk (nama, harga, foto, dll)
- `index = 0` = nomor urut, default 0 (untuk delay animasi)

**Conditional rendering:**
```jsx
{product.is_featured && (
  <div>Terlaris</div>
)}
```
`&&` = "jika kondisi kiri true, tampilkan yang kanan". Jadi badge "Terlaris" hanya muncul kalau `is_featured` bernilai true.

**Ternary operator:**
```jsx
{product.price === 0 ? 'Custom' : formatPrice(product.price)}
```
`kondisi ? nilai_jika_true : nilai_jika_false`
Kalau harga 0, tampilkan "Custom". Kalau tidak, tampilkan harga terformat.

### 6.4 FloatingWA.jsx — Tombol WhatsApp Melayang

Tombol hijau bulat di pojok kanan bawah yang selalu terlihat (fixed position).

```jsx
className="fixed bottom-6 right-6 z-50"
```
- `fixed` = posisi tetap, tidak bergerak saat scroll
- `bottom-6` = jarak 1.5rem dari bawah
- `right-6` = jarak 1.5rem dari kanan
- `z-50` = z-index 50, berada di atas semua elemen lain

**Framer Motion animation:**
```jsx
<motion.a
  whileHover={{ scale: 1.1 }}    // Membesar 10% saat dihover
  whileTap={{ scale: 0.95 }}     // Mengecil 5% saat diklik
>
```

### 6.5 LanguageSwitcher.jsx — Toggle Bahasa

Toggle switch yang mengubah bahasa seluruh website.

```jsx
const toggleLanguage = () => {
  const newLang = isID ? 'en' : 'id';  // Kalau sekarang ID → ganti EN, dan sebaliknya
  i18n.changeLanguage(newLang);         // Ubah bahasa di i18next
  setIsID(!isID);                       // Update state UI toggle
};
```

Toggle visual dibuat dari div dengan animasi translate:
```jsx
className={`... ${isID ? 'left-0.5' : 'translate-x-5'}`}
```
Kalau bahasa ID: bulatan di kiri. Kalau EN: bulatan geser ke kanan (translate-x-5).

---

## 7. Halaman (Pages)

### 7.1 Home.jsx — Landing Page

Halaman pertama yang dilihat pengunjung. Terdiri dari 5 section:

**1. Hero Section** — Bagian paling atas, full-screen
- Gradient background (pink → ungu muda)
- Emoji dekoratif yang melayang (🌸, ✨, 💗, 🎀) pakai Framer Motion
- Judul besar "Piko & Lea" + tagline
- 2 tombol CTA: "Lihat Produk" & "Order via WA"
- Foto produk dengan efek float + mini cards

**2. Brand Story** — Kenalan dengan Piko & Lea
- 2 kartu glass: Piko (Illustrator 🎨) dan Lea (Finisher ✂️)
- Deskripsi singkat tentang bisnis

**3. Featured Products** — Produk Unggulan
- Grid 4 kolom (desktop), 2 kolom (tablet), 1 kolom (mobile)
- Hanya menampilkan produk yang `is_featured: true`
- Pakai komponen `<ProductCard />`

```jsx
const featuredProducts = products.filter((p) => p.is_featured && p.is_active);
// .filter() = menyaring array, hanya ambil item yang memenuhi kondisi
```

**4. Order Process** — Cara Order (ringkas 4 langkah)
- 4 kartu dengan ikon, nomor, judul, dan deskripsi
- Data diambil dari file terjemahan: `t('orderProcess.steps', { returnObjects: true })`
- `returnObjects: true` = kembalikan array/object, bukan string

**5. Testimonials** — Review Customer
- Grid 2 kolom kartu glass
- Bintang rating, teks review, nama reviewer
- Data dari `testimonials` di mockData.js

### 7.2 Catalog.jsx — Katalog Produk

**Filter kategori:**
```jsx
const [activeCategory, setActiveCategory] = useState('all');
// State untuk menyimpan filter yang aktif. Default: 'all' (semua produk)

const filteredProducts = products.filter((p) => {
  if (!p.is_active) return false;            // Skip produk nonaktif
  if (activeCategory === 'all') return true;  // Kalau filter "Semua", tampilkan semua
  return p.category === activeCategory;       // Hanya tampilkan yang sesuai kategori
});
```

**Tombol filter:**
Saat diklik, `setActiveCategory('sketsa')` → state berubah → React re-render → produk terfilter otomatis.

**Casing Shapes Section:**
Menampilkan 4 pilihan bentuk casing (Love, Kotak, Oval, Bulat) dengan emoji dan animasi hover.

### 7.3 ProductDetail.jsx — Detail Produk

Halaman ini menampilkan detail 1 produk berdasarkan URL.

```jsx
const { id } = useParams();
// useParams() = hook dari React Router untuk mengambil parameter dari URL
// URL: /catalog/keychain-couple → id = "keychain-couple"

const product = products.find((p) => p.id === id);
// .find() = cari item pertama di array yang id-nya cocok
```

**Fitur:**
- Galeri foto dengan prev/next navigation dan thumbnails
- Info detail: harga, deskripsi, estimasi waktu, material, ukuran
- Pilihan bentuk casing
- Tombol "Order via WA" dengan pesan pre-fill otomatis
- Produk terkait (kategori sama)

**Tombol WA Pre-fill:**
```jsx
<a href={getWhatsAppLink(name, lang)} target="_blank">
```
Fungsi `getWhatsAppLink()` membuat URL WhatsApp dengan pesan otomatis:
`https://wa.me/6281200000000?text=Halo%20kak!%20Aku%20tertarik%20order...`

### 7.4 HowToOrder.jsx — Cara Order

Timeline 8 langkah yang menjelaskan alur pemesanan secara visual.

**Layout desktop:** Zigzag — langkah 1 di kiri, langkah 2 di kanan, langkah 3 di kiri, dst.
**Layout mobile:** Vertikal — semua langkah di kanan garis vertikal.

```jsx
const isLeft = index % 2 === 0;
// % = modulo (sisa bagi). index % 2 === 0 artinya genap → tampil di kiri
// index ganjil → tampil di kanan
```

Setiap langkah punya ikon gradient berbeda warna agar visual lebih menarik.


---

## 8. Data Mock

### Apa itu Data Mock?

**Analogi:** Kalau kamu lagi desain interior rumah, kamu pakai **furnitur dummy** dulu untuk visualisasi. Bukan furnitur asli, tapi bentuk dan ukurannya sama. Setelah desain oke, baru diganti furnitur beneran.

**Data mock** = data palsu/tiruan yang dipakai selama development. Fungsinya agar kita bisa membangun dan menguji tampilan website TANPA harus setup database dulu.

**Kenapa pakai data mock dulu?**
1. **Fokus** — Kita bisa fokus bikin tampilan dulu tanpa pusing database
2. **Cepat** — Tidak perlu setup server, API, database
3. **Fleksibel** — Gampang diubah kalau ada perubahan desain
4. Nanti di Fase 3, data mock akan diganti dengan data asli dari Supabase

### File: src/data/mockData.js

**Struktur data produk:**
```js
export const products = [
  {
    id: 'keychain-sketsa-bw',        // ID unik, dipakai di URL (/catalog/keychain-sketsa-bw)
    name_id: 'Keychain Sketsa B&W',  // Nama dalam Bahasa Indonesia
    name_en: 'B&W Sketch Keychain',  // Nama dalam English
    desc_id: 'Keychain dengan gambar sketsa pensil...',  // Deskripsi ID
    desc_en: 'Keychain with artistic pencil...',         // Deskripsi EN
    category: 'sketsa',              // Kategori (untuk filter)
    price: 45000,                    // Harga dalam Rupiah (angka)
    duration: '7–10 hari',           // Estimasi waktu (ID)
    duration_en: '7–10 days',        // Estimasi waktu (EN)
    is_featured: true,               // Apakah produk unggulan? (tampil di Home)
    is_active: true,                 // Apakah aktif? (false = soft delete)
    sort_order: 1,                   // Urutan tampil di katalog
    material_id: 'Akrilik transparan, kertas sketsa premium',
    material_en: 'Transparent acrylic, premium sketch paper',
    size: '5 x 4 cm',
    photos: [                        // Array URL foto (maks 5 sesuai PRD)
      'https://placehold.co/600x600/FCE4EC/4A148C?text=Sketsa+B%26W+1',
      'https://placehold.co/600x600/F8BBD9/4A148C?text=Sketsa+B%26W+2',
      'https://placehold.co/600x600/FCE4EC/4A148C?text=Sketsa+B%26W+3',
    ],
  },
  // ... 5 produk lainnya dengan struktur yang sama
];
```

**Kenapa ada `name_id` dan `name_en`?** Karena nama produk perlu diterjemahkan. Untuk data dari database, admin akan input 2 versi (ID & EN) saat menambah produk.

**Helper functions:**
```js
// Format angka jadi mata uang Rupiah
export const formatPrice = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency', currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
};
// formatPrice(45000) → "Rp 45.000"

// Buat link WhatsApp dengan pesan pre-fill
export const getWhatsAppLink = (productName = '', lang = 'id') => {
  const number = settings.wa_number.replace(/[^0-9]/g, '');
  // Hapus semua karakter non-angka dari nomor WA
  const template = lang === 'id' ? settings.wa_prefill_id : settings.wa_prefill_en;
  const message = productName ? template.replace('{product}', productName) : '';
  return `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
  // encodeURIComponent() = mengubah karakter khusus agar aman di URL
  // Contoh: spasi jadi %20, enter jadi %0A
};
```

---

## 9. Terminal Commands

### Semua Perintah yang Dijalankan di Fase 1

#### 1. Membuat project baru
```bash
npx -y create-vite@latest ./ --template react --overwrite --no-interactive
```
| Kata | Artinya |
|------|---------|
| `npx` | Tool untuk menjalankan package npm tanpa harus install global. "npm execute" |
| `-y` | Otomatis jawab "yes" ke semua pertanyaan |
| `create-vite@latest` | Package untuk membuat project Vite, versi terbaru |
| `./` | Buat project di folder SAAT INI (bukan subfolder baru) |
| `--template react` | Pakai template React (bukan Vue, Svelte, dll) |
| `--overwrite` | Timpa file yang sudah ada |
| `--no-interactive` | Jangan tanya-tanya, langsung jalan |

#### 2. Install dependencies dasar
```bash
npm install
```
| Kata | Artinya |
|------|---------|
| `npm` | **N**ode **P**ackage **M**anager — alat untuk mengunduh library JavaScript |
| `install` | Unduh semua library yang terdaftar di package.json |

Perintah ini membaca package.json, lalu mengunduh semua library ke folder `node_modules/`.

#### 3. Install library tambahan
```bash
npm install react-router-dom framer-motion lucide-react react-i18next i18next i18next-browser-languagedetector zustand
```
| Library | Fungsinya |
|---------|-----------|
| `react-router-dom` | Routing (navigasi halaman) |
| `framer-motion` | Animasi (transisi, hover, scroll) |
| `lucide-react` | Ikon-ikon (panah, menu, bintang, dll) |
| `react-i18next` | Penghubung i18next ke React |
| `i18next` | Library inti multi-bahasa |
| `i18next-browser-languagedetector` | Deteksi bahasa browser |
| `zustand` | State management (untuk Fase selanjutnya) |

#### 4. Install Tailwind CSS v3
```bash
npm install -D tailwindcss@3 postcss autoprefixer
```
| Kata | Artinya |
|------|---------|
| `-D` | Install sebagai **devDependency** — hanya dipakai saat development |
| `tailwindcss@3` | Tailwind CSS versi 3 (bukan versi terbaru v4) |
| `postcss` | Mesin pengolah CSS |
| `autoprefixer` | Auto-tambah prefix CSS untuk kompatibilitas browser |

#### 5. Inisialisasi konfigurasi Tailwind
```bash
npx tailwindcss init -p
```
| Kata | Artinya |
|------|---------|
| `tailwindcss init` | Buat file konfigurasi tailwind.config.js |
| `-p` | Sekalian buat postcss.config.js juga |

#### 6. Jalankan development server
```bash
npm run dev
```
| Kata | Artinya |
|------|---------|
| `npm run` | Jalankan script yang didefinisikan di package.json |
| `dev` | Nama script-nya: `"dev": "vite"` = jalankan Vite |

Ini membuka website di http://localhost:5173/. Setiap kali kamu edit kode, website otomatis update (Hot Module Replacement / HMR).

#### 7. Build untuk production
```bash
npm run build
```
Membuat versi final website yang dioptimalkan:
- Semua file digabung dan di-minify (diperkecil)
- CSS yang tidak dipakai dihapus (tree-shaking)
- Hasilnya disimpan di folder `dist/`

### Perbedaan `npm run dev` vs `npm run build`

| | `npm run dev` | `npm run build` |
|---|---|---|
| **Tujuan** | Development (ngoding) | Production (upload ke server) |
| **Kecepatan** | Sangat cepat start | Butuh waktu beberapa detik |
| **Output** | Server lokal (localhost) | Folder `dist/` berisi file statis |
| **Optimasi** | Tidak dioptimalkan | Dioptimalkan (minify, tree-shake) |
| **Ukuran** | Besar (semua library) | Kecil (hanya yang dipakai) |
| **Error** | Tampilkan error detail | Tidak ada error screen |

---

## 10. Cara Menjalankan Project

### Langkah demi Langkah dari NOL

**Prasyarat:** Pastikan sudah install **Node.js** (versi 18 atau lebih baru).
Cek dengan: `node --version` di terminal. Harusnya muncul sesuatu seperti `v20.x.x`.

```bash
# 1. Buka terminal (Command Prompt / PowerShell / Terminal VSCode)

# 2. Masuk ke folder project
cd "c:\belajar luar kampus\ganci web"

# 3. Install semua dependencies (library)
npm install
# Tunggu sampai selesai. Kalau sukses, muncul "added xxx packages"

# 4. Jalankan development server
npm run dev
# Muncul: "VITE ready in xxx ms"
# "Local: http://localhost:5173/"

# 5. Buka browser, ketik: http://localhost:5173/
# Website Piko & Lea muncul! 🌸

# 6. Untuk menghentikan server: tekan Ctrl+C di terminal

# 7. Untuk build production:
npm run build
# Hasilnya di folder dist/
```

### Error Umum & Cara Mengatasinya

**Error 1: "node is not recognized"**
```
'node' is not recognized as an internal or external command
```
**Penyebab:** Node.js belum terinstall.
**Solusi:** Download dan install dari https://nodejs.org/

**Error 2: "Cannot find module"**
```
Error: Cannot find module 'react'
```
**Penyebab:** Dependencies belum terinstall.
**Solusi:** Jalankan `npm install` dulu.

**Error 3: "@import must precede all other statements"**
```
@import must precede all other statements
```
**Penyebab:** Di file CSS, `@import` harus di baris paling atas, sebelum `@tailwind`.
**Solusi:** Pastikan urutan di index.css:
1. `@import url(...)` ← HARUS paling atas
2. `@tailwind base;`
3. `@tailwind components;`
4. `@tailwind utilities;`

**Error 4: "does not provide an export named 'xxx'"**
```
SyntaxError: ... does not provide an export named 'Instagram'
```
**Penyebab:** Nama ikon yang diimpor tidak ada di library lucide-react.
**Solusi:** Cek nama yang benar di dokumentasi lucide-react atau pakai nama alternatif.

**Error 5: Port 5173 sudah dipakai**
```
Error: Port 5173 is already in use
```
**Penyebab:** Ada proses Vite lain yang masih jalan.
**Solusi:** Matikan proses lama (Ctrl+C), atau buka di port lain:
```bash
npm run dev -- --port 3000
```

---

## 11. Behind the Scenes: Kesalahan Sesi Ini

Selama kita membangun Fase 1 tadi, semuanya tidak berjalan mulus 100% lho! Ada beberapa "drama" (error) yang sempat terjadi dan kita perbaiki bersama. Ini penting banget buat dipelajari, karena programmer pro pun pasti ketemu error setiap hari. 

Berikut adalah 3 kesalahan nyata yang terjadi saat kita ngoding tadi dan cara kita menyelesaikannya:

### Kesalahan 1: Gagal Menghapus File Bawaan Vite
Saat pertama setup, Vite otomatis membuat file seperti `App.css`, `react.svg`, dan `vite.svg`. Kita mau membersihkan project dengan menghapus file-file ini lewat terminal:
```bash
Remove-Item "c:\belajar luar kampus\ganci web\src\App.css" -Force -ErrorAction SilentlyContinue
```
**Apa yang terjadi?** Command gagal (`exit code: 1`).
**Kenapa?** Terkadang di sistem Windows (PowerShell), cara mengeksekusi multiple perintah secara bersamaan atau jalur path yang memiliki spasi bisa bermasalah jika tidak di-wrap dengan benar.
**Pelajaran:** Selalu cek terminal output. Kalau gagal hapus lewat command, kita bisa hapus manual lewat File Explorer atau editor kode.

### Kesalahan 2: Halaman Blank Putih (Layar Kosong)
Saat kita jalankan `npm run dev` untuk pertama kali, browser malah menampilkan halaman putih kosong tanpa konten Piko & Lea sama sekali! Tidak ada error di console browser, yang bikin bingung.
**Apa yang terjadi?** Saat kita cek terminal server Vite, ternyata servernya *crash* dengan error:
```
[vite:css][postcss] @import must precede all other statements (besides @charset or empty @layer)
```
**Kenapa?** Di file `index.css`, saya menaruh perintah `@import url('...font google...')` *di bawah* perintah `@tailwind`. Di dunia CSS, aturan `@import` itu **wajib hukumnya** ditaruh di baris paling atas (baris 1), tidak boleh dihalangi oleh apapun!
**Solusi kita tadi:** Kita pindahkan `@import url(...)` ke baris paling atas di `index.css`, di atas `@tailwind base;`. Langsung jalan deh!

### Kesalahan 3: Ikon Instagram Bikin Crash
Setelah CSS diperbaiki, webnya malah nge-crash lagi dengan pesan merah di terminal:
```
SyntaxError: The requested module '/node_modules/.vite/deps/lucide-react.js?v=7fdbe4a8' does not provide an export named 'Instagram'
```
**Apa yang terjadi?** Di `Footer.jsx`, kita mencoba memanggil ikon `<Instagram />` dari library `lucide-react`. 
**Kenapa?** Ternyata di versi `lucide-react` yang kita install, mereka belum menyediakan nama ikon "Instagram". 
**Solusi kita tadi:** Daripada pusing mencari versi yang pas, kita pakai kreativitas! Kita jalankan skrip kecil pakai Node.js di terminal untuk mencari daftar ikon yang tersedia dan mengandung kata "at" (seperti handle instagram yang pakai @). Akhirnya kita menemukan ikon `<AtSign />` dan menggunakannya sebagai pengganti sementara di Footer. *Problem solved!*

---

## 🎉 Selamat!

Kamu sudah memahami SEMUA yang terjadi di Fase 1 project Piko & Lea! Dari struktur folder, konfigurasi build tool, styling, routing, komponen, halaman, multi-bahasa, sampai cara menjalankannya.

**Ringkasan apa yang kita bangun:**
- 🏗️ Project React + Vite + Tailwind CSS v3
- 🎨 Design system custom (warna pink/ungu pastel, 3 font, animasi)
- 🧩 5 komponen reusable (Navbar, Footer, ProductCard, FloatingWA, LanguageSwitcher)
- 📄 4 halaman publik (Home, Catalog, ProductDetail, HowToOrder)
- 🌐 Sistem bilingual ID/EN dengan react-i18next
- 📊 Data mock 6 varian produk + 4 testimoni
- 📱 Responsive mobile-first design
- ✨ Animasi smooth dengan Framer Motion

**Next up: Fase 2** — Galeri portofolio dan halaman About Us! 🚀

*Dokumen ini dibuat agar kamu bisa belajar dan memahami setiap detail.
Kalau ada yang masih bingung, tanya aja! 😊*
