# 🌸 Product Requirements Document
## Website Promosi & Katalog Produk — Handmade Art by Piko & Lea

| | |
|---|---|
| **Versi** | 1.0 |
| **Tanggal** | 1 Mei 2026 |
| **Status** | Draft — Siap Review |
| **Pemilik Produk** | Piko & Lea |
| **Teknologi** | React + Tailwind CSS |
| **Bahasa** | Bilingual (ID / EN) |

---

## Daftar Isi

1. [Overview Proyek](#1-overview-proyek)
2. [Target Pengguna](#2-target-pengguna)
3. [Struktur & Sitemap](#3-struktur--sitemap)
4. [Spesifikasi Fitur](#4-spesifikasi-fitur)
5. [Dashboard Admin](#5-dashboard-admin)
6. [Panduan Desain & UI](#6-panduan-desain--ui)
7. [Spesifikasi Teknologi](#7-spesifikasi-teknologi)
8. [Sistem Bilingual](#8-sistem-bilingual-id--en)
9. [Kebutuhan Non-Fungsional](#9-kebutuhan-non-fungsional)
10. [Roadmap Pengembangan](#10-roadmap-pengembangan)
11. [Out of Scope](#11-out-of-scope-tidak-termasuk-v10)
12. [Glosarium](#12-glosarium)

---

## 1. Overview Proyek

### Latar Belakang

Piko & Lea adalah usaha keychain custom handmade yang berbasis di Kampus Binus, Bandung. Bisnis ini dijalankan berdua — Piko sebagai **Illustrator** (membuat gambar & sketsa) dan Lea sebagai **Finisher** (merakit, menghias, packaging).

Saat ini pemasaran masih mengandalkan mulut ke mulut dan media sosial. Website ini dibuat sebagai **pusat informasi digital** yang profesional untuk menampilkan produk, harga, proses pemesanan, dan portofolio karya — sehingga calon customer bisa mengenal bisnis ini sebelum menghubungi via WhatsApp.

### Tujuan Bisnis

- Meningkatkan kepercayaan calon customer dengan tampilan yang profesional
- Mempermudah calon customer memahami produk & harga sebelum order
- Menjadi media portofolio digital yang dapat dibagikan di Instagram & TikTok
- Mendukung ekspansi dari komunitas kampus ke pasar online yang lebih luas

### Ruang Lingkup

**Termasuk:**
- Halaman publik (landing page, katalog produk, cara order, galeri, about)
- Dashboard admin untuk Piko & Lea mengelola konten secara mandiri

**Tidak termasuk:**
- Sistem pembayaran online
- Live chat atau chatbot
- Integrasi marketplace (Shopee, Tokopedia)

---

## 2. Target Pengguna

### 2.1 Pengunjung Umum (Customer)

| Atribut | Deskripsi |
|---|---|
| **Demografi** | Mahasiswa usia 18–25 tahun, Bandung & sekitarnya |
| **Motivasi** | Mencari hadiah personal, souvenir couple, atau aksesori unik |
| **Perilaku** | Browsing via HP, aktif Instagram & TikTok, mudah dipengaruhi visual |
| **Kebutuhan** | Melihat produk & harga dengan jelas, tahu cara order lewat WA |
| **Pain Point** | Tidak tahu harga, bingung cara order, takut kualitas tidak sesuai ekspektasi |

### 2.2 Admin (Piko & Lea)

| Atribut | Deskripsi |
|---|---|
| **Pengguna** | Piko (illustrator) dan Lea (finisher), keduanya bisa akses admin |
| **Kemampuan Teknis** | Non-developer — perlu antarmuka yang sangat mudah digunakan |
| **Kebutuhan** | Upload foto karya, edit harga/deskripsi produk, tambah/hapus varian |
| **Frekuensi** | Update konten beberapa kali per bulan |

---

## 3. Struktur & Sitemap

```
Website Piko & Lea
│
├── 🌐 Halaman Publik
│   ├── / ........................ Home / Landing Page
│   ├── /catalog ................. Katalog Produk
│   ├── /catalog/:id ............. Detail Produk
│   ├── /how-to-order ............ Cara Order
│   ├── /gallery ................. Galeri / Portofolio
│   └── /about ................... About Us
│
└── 🔒 Dashboard Admin
    ├── /admin/login ............. Login Admin
    ├── /admin/products .......... Kelola Produk
    ├── /admin/gallery ........... Kelola Galeri
    └── /admin/settings .......... Pengaturan Konten
```

---

## 4. Spesifikasi Fitur

### 4.1 Home / Landing Page

Halaman pertama yang dilihat pengunjung. Harus langsung menarik perhatian dan mengkomunikasikan identitas brand.

| ID | Fitur / Elemen | Deskripsi | Prioritas |
|---|---|---|---|
| F-01 | Hero Section | Ilustrasi/foto produk utama, tagline, tombol CTA "Lihat Produk" & "Order via WA" | 🔴 Wajib |
| F-02 | Brand Story Singkat | Perkenalan Piko & Lea dalam 2–3 kalimat, foto tim (opsional) | 🔴 Wajib |
| F-03 | Featured Products | Tampil 3–4 produk unggulan dengan foto, nama, harga mulai dari | 🔴 Wajib |
| F-04 | Proses Order Ringkas | Ringkasan 4 langkah cara order (ikon + teks pendek) | 🔴 Wajib |
| F-05 | Testimoni / Review | Kutipan review dari customer dengan foto produk | 🟡 Diinginkan |
| F-06 | Floating WA Button | Tombol WA mengambang di pojok kanan bawah sepanjang halaman | 🔴 Wajib |
| F-07 | Language Switcher | Toggle ID / EN di navbar, mengubah seluruh teks website | 🔴 Wajib |

### 4.2 Katalog Produk

Menampilkan semua varian produk dengan informasi lengkap dan visual yang menarik.

| ID | Fitur / Elemen | Deskripsi | Prioritas |
|---|---|---|---|
| F-08 | Grid Produk | Tampilan kartu produk 2–3 kolom, responsif untuk mobile | 🔴 Wajib |
| F-09 | Filter Kategori | Filter: Semua / Sketsa B&W / Full Color / Couple / Anime / + Charm | 🔴 Wajib |
| F-10 | Kartu Produk | Foto, nama varian, harga, waktu pengerjaan, tombol "Detail" | 🔴 Wajib |
| F-11 | Badge Terlaris | Label "Terlaris" pada produk yang ditandai admin | 🟡 Diinginkan |
| F-12 | Pilihan Bentuk Casing | Info: Love / Kotak / Oval / Bulat dengan gambar preview kecil | 🔴 Wajib |

**Varian produk yang tersedia:**

| Varian | Deskripsi | Estimasi Waktu |
|---|---|---|
| Keychain Sketsa B&W | Pensil / charcoal, 1 wajah | 7–10 hari |
| Keychain Acrylic Warna | Full color marker, 1 wajah | 7–10 hari |
| Keychain Couple | 2 wajah dalam 1 casing | 7–10 hari |
| Keychain + Charm | Sketsa + hiasan pita/manik | 7–11 hari |
| Keychain Anime Style | Gaya ilustrasi anime | 7–11 hari |
| Custom Request | Permintaan khusus customer | Negosiasi |

### 4.3 Detail Produk

Halaman khusus per varian produk dengan informasi lengkap dan CTA order.

| ID | Fitur / Elemen | Deskripsi | Prioritas |
|---|---|---|---|
| F-13 | Galeri Foto Produk | Multiple foto: close-up, full product, on packaging | 🔴 Wajib |
| F-14 | Deskripsi Lengkap | Gaya gambar, material, ukuran casing, pilihan bentuk | 🔴 Wajib |
| F-15 | Harga & Estimasi | Harga jual + estimasi waktu pengerjaan 7–11 hari | 🔴 Wajib |
| F-16 | Tombol Order WA | Tombol redirect ke WA dengan pesan pre-fill otomatis | 🔴 Wajib |
| F-17 | Karya Terkait | 3–4 foto portofolio dengan varian yang sama | 🟡 Diinginkan |

**Pesan pre-fill WA otomatis:**
```
Halo kak! Aku tertarik order [nama produk] 🥰
Boleh minta info berikut:
1. Foto referensi
2. Pilihan bentuk: Love / Kotak / Oval / Bulat
3. Gaya gambar: Sketsa B&W / Full Color / Anime style
4. Tambahan charm? (Ya/Tidak)
5. Catatan khusus
```

### 4.4 Cara Order

Menjelaskan alur pemesanan step-by-step agar customer tidak bingung.

| Step | Judul | Deskripsi |
|---|---|---|
| 1️⃣ | Hubungi via WA | Klik tombol WA, kirim pesan pertama |
| 2️⃣ | Isi Form Order | Kirim foto referensi, pilih bentuk & gaya, catatan khusus |
| 3️⃣ | Konfirmasi Harga | Piko & Lea balas estimasi harga + waktu pengerjaan |
| 4️⃣ | Bayar DP 50% | Transfer DP, kirim bukti pembayaran |
| 5️⃣ | Pengerjaan | Proses menggambar & finishing (7–11 hari) |
| 6️⃣ | Preview & Approval | Foto gambar dikirim ke customer untuk persetujuan |
| 7️⃣ | Pelunasan & Kirim | Bayar sisa → produk dikirim atau COD area kampus |
| 8️⃣ | Follow Up | Piko & Lea minta review + foto customer pakai produk |

### 4.5 Galeri / Portofolio

| ID | Fitur / Elemen | Deskripsi | Prioritas |
|---|---|---|---|
| F-18 | Grid Galeri | Tampilan foto portofolio karya jadi, layout masonry/grid estetik | 🔴 Wajib |
| F-19 | Filter Gaya | Filter: Semua / Sketsa / Color / Anime / Couple | 🔴 Wajib |
| F-20 | Lightbox Preview | Klik foto → tampil besar dengan navigasi prev/next | 🔴 Wajib |
| F-21 | Caption Foto | Gaya varian + bentuk casing per foto | 🟡 Diinginkan |

### 4.6 About Us

| ID | Fitur / Elemen | Deskripsi | Prioritas |
|---|---|---|---|
| F-22 | Profil Piko & Lea | Foto, nama, peran masing-masing (Illustrator & Finisher) | 🔴 Wajib |
| F-23 | Cerita Brand | Paragraf singkat awal mula bisnis, nilai & passion | 🔴 Wajib |
| F-24 | Link Instagram | Ikon + link ke akun IG bisnis | 🔴 Wajib |
| F-25 | Lokasi | Info: berbasis di Kampus Binus, Bandung | 🔴 Wajib |

---

## 5. Dashboard Admin

Dashboard khusus untuk Piko & Lea mengelola konten website secara mandiri tanpa bantuan developer.

### 5.1 Autentikasi Admin

- Login dengan email + password (via Supabase Auth)
- Semua halaman `/admin/*` dilindungi route guard
- Session expire setelah 24 jam
- Fitur logout

### 5.2 Kelola Produk

| Fitur | Deskripsi |
|---|---|
| Lihat semua produk | List semua varian dengan status aktif / nonaktif |
| Tambah produk baru | Form: nama, kategori, harga, estimasi waktu, deskripsi (ID & EN), upload foto (maks 5) |
| Edit produk | Ubah semua field termasuk harga & foto |
| Hapus produk | Soft delete — produk disembunyikan, tidak dihapus permanen |
| Toggle "Terlaris" | Tandai produk sebagai featured/terlaris |
| Atur urutan tampil | Drag & drop urutan produk di halaman katalog |

### 5.3 Kelola Galeri

| Fitur | Deskripsi |
|---|---|
| Upload foto karya | Upload dari HP/laptop, format JPG/PNG, maks 10MB per foto |
| Edit caption | Ubah gaya varian & bentuk casing untuk setiap foto |
| Hapus foto | Hapus foto dari galeri portofolio |
| Kategorisasi | Tag foto: Sketsa / Color / Anime / Couple |

### 5.4 Pengaturan Konten

| Fitur | Deskripsi |
|---|---|
| Edit teks About Us | Ubah bio Piko & Lea, cerita brand (ID & EN) |
| Update nomor WhatsApp | Nomor WA yang digunakan di semua tombol CTA |
| Update link Instagram | Link IG yang tampil di About Us & footer |
| Edit pesan pre-fill WA | Teks otomatis yang muncul saat customer klik tombol WA |

---

## 6. Panduan Desain & UI

### 6.1 Vibe & Estetika

> **Cute / Pastel / Feminin** — Hangat, personal, artsy, dan terpercaya.

Desain mencerminkan identitas brand Piko & Lea yang handmade dan penuh sentuhan personal.

### 6.2 Palet Warna

| Nama | Hex | Penggunaan |
|---|---|---|
| Pink Utama | `#F48FB1` | CTA button, aksen aktif, highlight |
| Pink Muda | `#FCE4EC` | Background section, card hover |
| Pink Sedang | `#F8BBD9` | Header section, divider |
| Ungu Aksen | `#CE93D8` | Ikon dekorasi, badge, detail |
| Ungu Gelap | `#4A148C` | Heading utama, teks penting |
| Putih | `#FFFFFF` | Background halaman, kartu produk |
| Abu-abu | `#757575` | Teks deskripsi, caption |

### 6.3 Tipografi

| Elemen | Font | Ukuran | Catatan |
|---|---|---|---|
| Heading Utama (H1) | Playfair Display | 32–40px | Elegan & feminin |
| Heading Sekunder (H2) | Nunito | 24–28px | Rounded, cute |
| Body Text | Nunito / Inter | 14–16px | Mudah dibaca di HP |
| Button & Label | Nunito Bold | 14px | Huruf kapital pertama |
| Caption / Meta | Nunito | 12px | Warna abu-abu |

### 6.4 Komponen UI Utama

- **Tombol CTA** — `rounded-full`, background pink utama, teks putih bold, shadow halus
- **Kartu Produk** — `rounded-2xl`, `shadow-md`, hover `scale-105`, border pink muda
- **Navbar** — Sticky, background putih/transparan, logo di kiri, menu + language switcher di kanan
- **Footer** — Background ungu gelap, teks putih, link IG & WA
- **Floating WA Button** — Fixed bottom-right, ikon WhatsApp hijau, animasi `pulse`

### 6.5 Responsivitas

- **Mobile-first design** — mayoritas pengunjung mengakses via HP
- Grid produk: **1 kolom** di mobile → **2 kolom** di tablet → **3 kolom** di desktop
- Navbar collapse menjadi hamburger menu di mobile

| Breakpoint | Lebar | Layout |
|---|---|---|
| Mobile | < 768px | 1 kolom, hamburger menu |
| Tablet | 768–1024px | 2 kolom |
| Desktop | > 1024px | 3 kolom |

---

## 7. Spesifikasi Teknologi

### 7.1 Tech Stack

| Layer | Teknologi | Keterangan |
|---|---|---|
| Frontend Framework | React + Vite | Fast development, component-based |
| Styling | Tailwind CSS | Utility-first, mudah custom tema pastel |
| Routing | React Router v6 | Client-side navigation, protected routes admin |
| State Management | Zustand / Context API | Ringan, cukup untuk skala ini |
| Animasi | Framer Motion | Animasi smooth hover & transisi halaman |
| Icon Library | Lucide React | Ikon bersih & konsisten |
| i18n | react-i18next | Sistem bilingual ID/EN |
| Image Storage | Supabase Storage | Penyimpanan foto produk & galeri |
| Backend & Auth | Supabase (PostgreSQL) | Auth admin, data produk, galeri |
| Hosting | Vercel | Deploy otomatis, tier gratis cukup |

### 7.2 Struktur Folder

```
src/
├── components/        # Komponen reusable
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── FloatingWA.jsx
│   └── LanguageSwitcher.jsx
├── pages/             # Halaman publik
│   ├── Home.jsx
│   ├── Catalog.jsx
│   ├── ProductDetail.jsx
│   ├── HowToOrder.jsx
│   ├── Gallery.jsx
│   └── About.jsx
├── admin/             # Dashboard admin
│   ├── Login.jsx
│   ├── Products.jsx
│   ├── Gallery.jsx
│   └── Settings.jsx
├── hooks/             # Custom hooks
│   ├── useLanguage.js
│   ├── useProducts.js
│   └── useAuth.js
├── i18n/              # File terjemahan
│   ├── id.json
│   └── en.json
├── lib/               # Konfigurasi & helper
│   └── supabase.js
└── assets/            # Foto default, ikon brand
```

### 7.3 Skema Database (Supabase)

```sql
-- Tabel produk
products (
  id          uuid PRIMARY KEY,
  name_id     text,        -- nama dalam Bahasa Indonesia
  name_en     text,        -- nama dalam English
  desc_id     text,        -- deskripsi Bahasa Indonesia
  desc_en     text,        -- deskripsi English
  category    text,        -- sketsa | color | couple | anime | charm
  price       integer,     -- harga dalam Rupiah
  duration    text,        -- estimasi waktu pengerjaan
  is_featured boolean,     -- badge "Terlaris"
  is_active   boolean,     -- soft delete
  sort_order  integer,     -- urutan tampil
  photos      text[],      -- array URL foto
  created_at  timestamptz
)

-- Tabel galeri
gallery (
  id          uuid PRIMARY KEY,
  photo_url   text,
  caption_id  text,
  caption_en  text,
  category    text,        -- sketsa | color | couple | anime
  created_at  timestamptz
)

-- Tabel pengaturan
settings (
  key         text PRIMARY KEY,
  value       text
  -- contoh key: wa_number, ig_link, wa_prefill_id, wa_prefill_en
)
```

---

## 8. Sistem Bilingual (ID / EN)

### Implementasi

- Library: **react-i18next**
- File terjemahan: `src/i18n/id.json` (default) dan `src/i18n/en.json`
- Preferensi bahasa disimpan di `localStorage` agar tidak reset saat refresh
- Language switcher: Toggle `[🇮🇩 ID | 🇬🇧 EN]` di pojok kanan navbar

### Konten yang Diterjemahkan

| Konten | Perlu Terjemahan? | Catatan |
|---|---|---|
| UI Label & Menu | ✅ Ya | Navbar, button, judul section |
| Deskripsi Produk | ✅ Ya | Admin input dua versi saat tambah produk |
| Teks About Us | ✅ Ya | Admin edit dua versi di pengaturan |
| Cara Order (steps) | ✅ Ya | Step-by-step dalam dua bahasa |
| Harga & Estimasi Waktu | ❌ Tidak | Angka universal |
| Foto & Gambar | ❌ Tidak | Gambar sama untuk kedua bahasa |
| Review Customer | ❌ Tidak | Tampil apa adanya sesuai bahasa asli |

---

## 9. Kebutuhan Non-Fungsional

| Kategori | Kebutuhan | Target |
|---|---|---|
| ⚡ Performa | Waktu muat halaman pertama | < 3 detik di jaringan 4G |
| ⚡ Performa | Ukuran gambar | Kompresi otomatis, maks 500KB per foto |
| 🔍 SEO | Meta tags | Title, description, og:image per halaman |
| ♿ Aksesibilitas | Kontras warna | Minimal AA WCAG 2.1 |
| 🔒 Keamanan | Admin login | JWT auth via Supabase, session expire 24 jam |
| 🔒 Keamanan | Upload file | Validasi tipe file (JPG/PNG only), maks 10MB |
| 🟢 Keandalan | Uptime | 99% (Vercel SLA) |
| 📈 Skalabilitas | Kapasitas | Mampu tampung hingga 100 produk & 500 foto galeri |

---

## 10. Roadmap Pengembangan

| Fase | Periode | Deliverable | Status |
|---|---|---|---|
| **Fase 1 — MVP** | Minggu 1–2 | Setup project, Home, Katalog, Detail Produk, Cara Order, Floating WA Button | ⬜ Belum mulai |
| **Fase 2 — Content** | Minggu 3 | Galeri, About Us, Navbar, Footer, Language Switcher (ID/EN) | ⬜ Belum mulai |
| **Fase 3 — Admin** | Minggu 4–5 | Auth admin, Dashboard kelola produk & galeri, Pengaturan konten | ⬜ Belum mulai |
| **Fase 4 — Polish** | Minggu 6 | Animasi Framer Motion, responsif mobile, optimasi gambar, SEO dasar | ⬜ Belum mulai |
| **Fase 5 — Launch** | Minggu 7 | Deploy ke Vercel, custom domain (opsional), testing final | ⬜ Belum mulai |
| **Fase 6 — Iterasi** | Bulan 3+ | Fitur testimoni, filter lanjutan, koneksi Shopee (opsional) | 🗂️ Backlog |

---

## 11. Out of Scope (Tidak Termasuk v1.0)

Fitur berikut sengaja tidak dimasukkan untuk menjaga fokus dan kecepatan pengembangan:

- ❌ Sistem pembayaran online (Midtrans, GoPay, dll) — order tetap via WA
- ❌ Live chat atau chatbot di website
- ❌ Sistem notifikasi order otomatis
- ❌ Integrasi langsung dengan Shopee / Tokopedia
- ❌ Fitur review & rating langsung di website
- ❌ Sistem manajemen stok bahan
- ❌ Multi-admin dengan role berbeda

> Fitur-fitur ini dapat dipertimbangkan di **v2.0** setelah bisnis berkembang ke Fase Scale Up (Bulan 7+).

---

## 12. Glosarium

| Istilah | Penjelasan |
|---|---|
| **HPP** | Harga Pokok Produksi — total biaya bahan + tenaga untuk 1 unit produk |
| **CTA** | Call To Action — tombol/ajakan yang mendorong pengunjung melakukan aksi |
| **MVP** | Minimum Viable Product — versi paling dasar dari website yang sudah bisa digunakan |
| **Soft Delete** | Produk disembunyikan dari tampilan publik tapi data tetap tersimpan di database |
| **Pre-fill WA** | Teks pesan otomatis yang sudah tertulis saat customer klik tombol WhatsApp |
| **i18n** | Internationalization — sistem untuk mengelola terjemahan multi-bahasa |
| **Supabase** | Platform backend open-source yang menyediakan database, auth, dan storage |
| **Vercel** | Platform hosting cloud untuk React/Next.js, tersedia tier gratis |

---

*🌸 Semangat membangun bisnis bersama, Piko & Lea!*

*Dokumen ini adalah living document — update sesuai perkembangan bisnis.*
