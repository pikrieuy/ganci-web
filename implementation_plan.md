# 🌸 Implementation Plan — Website Piko & Lea

## Tujuan

Membangun website promosi & katalog produk untuk bisnis keychain custom handmade "Piko & Lea" berdasarkan [PRD.md](file:///c:/belajar%20luar%20kampus/ganci%20web/PRD.md).

## Pendekatan

Mengikuti **roadmap** yang sudah didefinisikan di PRD, saya akan mengerjakan secara bertahap dari Fase 1 sampai Fase 4. Fase 5 (Deploy) akan dilakukan setelah semua fitur selesai.

> [!IMPORTANT]
> Karena ini proyek yang sangat besar (6 halaman publik + 4 halaman admin + sistem bilingual + integrasi Supabase), saya akan mengerjakannya secara bertahap agar kualitas terjaga dan Anda bisa me-review setiap fase.

---

## User Review Required

### Keputusan Desain yang Perlu Konfirmasi

> [!IMPORTANT]
> **Tailwind CSS Version** — PRD menyebutkan Tailwind CSS. Saya akan menggunakan **Tailwind CSS v4** (versi terbaru). Apakah ada preferensi versi tertentu?

> [!IMPORTANT]
> **Supabase Setup** — Dashboard admin membutuhkan Supabase (Auth, Database, Storage). Untuk Fase 1-2, saya akan menggunakan **data dummy/mock** terlebih dahulu agar halaman publik bisa langsung jalan. Integrasi Supabase akan dilakukan di **Fase 3** saat membangun admin dashboard. Apakah Anda sudah memiliki akun/project Supabase, atau perlu dibuat nanti?

> [!IMPORTANT]
> **Foto Produk** — PRD membutuhkan foto produk keychain. Untuk development, saya akan menggunakan **gambar placeholder yang di-generate** agar tampilannya tetap menarik. Foto asli bisa diganti kemudian. Apakah Anda sudah memiliki foto produk yang bisa digunakan?

> [!IMPORTANT]
> **Nomor WhatsApp** — Tombol CTA dan floating button membutuhkan nomor WA. Boleh saya tahu nomor WA yang akan digunakan? Untuk sementara saya bisa pakai placeholder.

> [!IMPORTANT]
> **Link Instagram** — Halaman About Us dan Footer membutuhkan link IG bisnis. Boleh saya tahu akun Instagram-nya?

---

## Open Questions

1. **Scope eksekusi saat ini** — Apakah Anda ingin saya mengerjakan **semua fase sekaligus** (Fase 1-4), atau bertahap per fase dengan review di antara?
2. **Domain custom** — Apakah sudah ada nama domain yang direncanakan?

---

## Proposed Changes

### Fase 1 — MVP (Setup + Halaman Inti)

#### Setup Project

- **[NEW]** Inisialisasi React + Vite project
- **[NEW]** Setup Tailwind CSS dengan custom color palette dari PRD
- **[NEW]** Install dependencies: `react-router-dom`, `framer-motion`, `lucide-react`, `react-i18next`, `zustand`
- **[NEW]** Setup Google Fonts: Playfair Display, Nunito, Inter
- **[NEW]** Setup struktur folder sesuai PRD (Section 7.2)

#### Konfigurasi Tema & Design System

##### [NEW] tailwind.config.js
- Custom colors: Pink Utama (#F48FB1), Pink Muda (#FCE4EC), Pink Sedang (#F8BBD9), Ungu Aksen (#CE93D8), Ungu Gelap (#4A148C)
- Custom fonts: Playfair Display, Nunito, Inter
- Custom breakpoints sesuai PRD

##### [NEW] src/index.css
- Import Google Fonts
- Base styles & CSS custom properties

---

#### Sistem Bilingual (i18n)

##### [NEW] src/i18n/id.json
- Semua teks UI dalam Bahasa Indonesia (default)

##### [NEW] src/i18n/en.json
- Semua teks UI dalam Bahasa Inggris

##### [NEW] src/i18n/index.js
- Konfigurasi react-i18next, localStorage persistence

---

#### Komponen Reusable

##### [NEW] src/components/Navbar.jsx
- Sticky navbar, logo kiri, menu + language switcher kanan
- Hamburger menu di mobile
- Toggle bahasa ID/EN (F-07)

##### [NEW] src/components/Footer.jsx
- Background ungu gelap, teks putih
- Link IG & WA

##### [NEW] src/components/ProductCard.jsx
- Card rounded-2xl, shadow-md, hover scale-105
- Foto, nama, harga, estimasi waktu, tombol "Detail"
- Badge "Terlaris" (F-11)

##### [NEW] src/components/FloatingWA.jsx
- Fixed bottom-right, ikon WA hijau, animasi pulse (F-06)

##### [NEW] src/components/LanguageSwitcher.jsx
- Toggle [🇮🇩 ID | 🇬🇧 EN]

---

#### Halaman Publik — Fase 1

##### [NEW] src/pages/Home.jsx
- Hero Section dengan tagline + CTA buttons (F-01)
- Brand Story singkat (F-02)
- Featured Products grid 3-4 produk (F-03)
- Proses Order ringkas 4 langkah (F-04)
- Testimoni/Review section (F-05)

##### [NEW] src/pages/Catalog.jsx
- Grid produk responsif 1/2/3 kolom (F-08)
- Filter kategori: Semua/Sketsa B&W/Full Color/Couple/Anime/+Charm (F-09)
- Kartu produk dengan info lengkap (F-10)
- Info bentuk casing: Love/Kotak/Oval/Bulat (F-12)

##### [NEW] src/pages/ProductDetail.jsx
- Galeri foto produk multiple (F-13)
- Deskripsi lengkap (F-14)
- Harga & estimasi waktu (F-15)
- Tombol Order WA dengan pre-fill (F-16)
- Karya terkait (F-17)

##### [NEW] src/pages/HowToOrder.jsx
- 8 langkah cara order dengan ikon & deskripsi
- Visual step-by-step yang menarik

---

### Fase 2 — Content Pages

##### [NEW] src/pages/Gallery.jsx
- Grid galeri masonry/grid estetik (F-18)
- Filter gaya: Semua/Sketsa/Color/Anime/Couple (F-19)
- Lightbox preview dengan navigasi prev/next (F-20)
- Caption foto (F-21)

##### [NEW] src/pages/About.jsx
- Profil Piko & Lea dengan foto & peran (F-22)
- Cerita brand (F-23)
- Link Instagram (F-24)
- Info lokasi Kampus Binus, Bandung (F-25)

---

### Fase 3 — Admin Dashboard

##### [NEW] src/lib/supabase.js
- Konfigurasi Supabase client

##### [NEW] src/hooks/useAuth.js
- Custom hook untuk auth Supabase

##### [NEW] src/hooks/useProducts.js
- Custom hook untuk CRUD produk

##### [NEW] src/admin/Login.jsx
- Form login email + password
- Supabase Auth

##### [NEW] src/admin/Products.jsx
- List produk dengan toggle aktif/nonaktif
- Form tambah/edit produk (bilingual)
- Upload foto (maks 5)
- Toggle "Terlaris"
- Drag & drop urutan

##### [NEW] src/admin/Gallery.jsx
- Upload foto karya
- Edit caption, kategorisasi
- Hapus foto

##### [NEW] src/admin/Settings.jsx
- Edit teks About Us (ID & EN)
- Update nomor WA
- Update link Instagram
- Edit pesan pre-fill WA

---

### Fase 4 — Polish

- Animasi Framer Motion (transisi halaman, hover effects, scroll reveal)
- Optimasi responsif mobile
- SEO: meta tags, title, og:image per halaman
- Aksesibilitas: kontras warna WCAG AA

---

## Data Mock (Fase 1-2)

Selama Fase 1-2, saya akan menggunakan data mock untuk produk dan galeri:

```javascript
// 6 varian produk sesuai PRD
const products = [
  { id: 1, name: "Keychain Sketsa B&W", category: "sketsa", price: "Rp XX.000", ... },
  { id: 2, name: "Keychain Acrylic Warna", category: "color", ... },
  { id: 3, name: "Keychain Couple", category: "couple", ... },
  { id: 4, name: "Keychain + Charm", category: "charm", ... },
  { id: 5, name: "Keychain Anime Style", category: "anime", ... },
  { id: 6, name: "Custom Request", category: "custom", ... },
];
```

---

## Verification Plan

### Automated Tests
- `npm run dev` — memastikan project berjalan tanpa error
- `npm run build` — memastikan production build berhasil
- Browser testing: navigasi semua halaman, test responsivitas, test language switcher

### Manual Verification
- Screenshot semua halaman di desktop & mobile view
- Test tombol WA (pre-fill message)
- Test filter produk & galeri
- Test lightbox gallery
- Test admin CRUD (setelah Fase 3)

---

## Estimasi File yang Dibuat

| Kategori | Jumlah File |
|---|---|
| Config & Setup | ~5 file |
| Komponen Reusable | ~6 file |
| Halaman Publik | ~6 file |
| Admin Dashboard | ~4 file |
| Hooks & Lib | ~4 file |
| i18n | ~3 file |
| Data Mock | ~1 file |
| **Total** | **~29 file** |
