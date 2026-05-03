# 🌸 BELAJAR — Panduan Fase 2 Project Piko & Lea

> **Dokumen ini menjelaskan apa yang kita pelajari dan kerjakan di Fase 2.**
> Pada fase ini, kita membuat halaman **Gallery** dan **About Us**, serta menambahkan fitur menarik seperti Masonry Grid dan Lightbox!

---

## Daftar Isi

1. [Apa yang Baru di Fase 2?](#1-apa-yang-baru-di-fase-2)
2. [Halaman Gallery: Masonry Grid](#2-halaman-gallery-masonry-grid)
3. [Halaman Gallery: Lightbox & AnimatePresence](#3-halaman-gallery-lightbox--animatepresence)
4. [Halaman About: Glassmorphism & Layout](#4-halaman-about-glassmorphism--layout)
5. [Update Routing & Navbar](#5-update-routing--navbar)
6. [Tugas Latihan Mandiri](#6-tugas-latihan-mandiri)

---

## 1. Apa yang Baru di Fase 2?

Di fase ini, kita melengkapi konten website Piko & Lea dengan membuat dua halaman baru:

1. **`src/pages/Gallery.jsx`**: Menampilkan kumpulan foto karya sebelumnya.
2. **`src/pages/About.jsx`**: Menceritakan profil Piko (Ilustrator) dan Lea (Finisher/Crafter).

Kita juga melakukan:
- Update `mockData.js` untuk menambahkan data foto galeri palsu.
- Update `id.json` dan `en.json` untuk teks dwibahasa di halaman baru.
- Update `App.jsx` dan `Navbar.jsx` supaya halaman ini bisa diakses dari menu atas.

---

## 2. Halaman Gallery: Masonry Grid

Di halaman Gallery, kita tidak menggunakan Grid CSS biasa berbentuk kotak catur kaku. Kita menggunakan gaya **Masonry Grid**.

### Apa itu Masonry Grid?
Pernah lihat halaman Pinterest? Nah, itu Masonry! Susunan kotaknya mengisi ruang kosong di atasnya secara vertikal, tanpa terikat pada tinggi baris yang kaku.

**Bagaimana cara buatnya di Tailwind?**
Alih-alih pakai `grid grid-cols-4`, kita pakai `columns-4`.

```jsx
<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
  {items.map(item => (
    <div className="break-inside-avoid">
       <img src={item.image} />
    </div>
  ))}
</div>
```

**Penjelasan Class:**
- `columns-[angka]`: Membagi wadah jadi kolom kayak di koran/majalah. Tailwind sangat mempermudah ini.
- `space-y-4`: Memberikan jarak vertikal antar item.
- `break-inside-avoid`: **INI SANGAT PENTING!** Ini mencegah sebuah gambar "terpotong" dan meluber ke kolom sebelahnya (kayak paragraf di majalah).

---

## 3. Halaman Gallery: Lightbox & AnimatePresence

### Apa itu Lightbox?
Kalau kamu klik gambar di galeri, gambarnya akan membesar ke tengah layar dan latar belakangnya jadi gelap. Itu disebut **Lightbox**.

### State di Gallery.jsx
Kita menggunakan React State untuk mengatur Lightbox:
```jsx
const [lightboxIndex, setLightboxIndex] = useState(null);
```
- `null` = Lightbox tertutup.
- Angka (misal `2`) = Lightbox terbuka, menampilkan gambar index ke-2.

### AnimatePresence (Framer Motion)
Saat membuka/menutup Lightbox, kita ingin ada efek *fade in* dan *fade out* yang mulus. Masalahnya di React, kalau komponen dihapus, dia langsung hilang tanpa basa-basi!

Solusinya: `<AnimatePresence>` dari framer-motion.

```jsx
<AnimatePresence>
  {lightboxIndex !== null && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}   // Efek saat komponen ini dihapus!
    >
      {/* Konten Lightbox */}
    </motion.div>
  )}
</AnimatePresence>
```
Dengan ini, saat `lightboxIndex` berubah jadi `null`, React akan **menunggu** sampai efek `exit` selesai sebelum benar-benar menghapus elemennya dari layar. Keren, kan?

---

## 4. Halaman About: Glassmorphism & Layout

Di halaman About (`About.jsx`), kita menggunakan desain yang modern dengan efek **Glassmorphism**.

### Apa itu Glassmorphism?
Efek di mana kotak terlihat seperti kaca transparan berembun. Ini membuat desain tidak terlihat kaku.

Kita sebenarnya sudah mendefinisikan class `.glass-card` di `index.css` pada Fase 1:
```css
.glass-card {
  @apply bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg;
}
```
- `bg-white/70`: Warna putih transparan 70%.
- `backdrop-blur-md`: Memberi efek blur pada gambar/warna apa pun yang ada di *belakang* kotak ini.

### WhileInView (Animasi Scroll)
Di halaman About, saat kamu scroll ke bawah, foto Piko & Lea muncul satu per satu. Ini menggunakan fitur `whileInView` dari framer-motion.

```jsx
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
```
- `whileInView`: Animasi hanya akan dimainkan HANYA jika elemen ini sudah masuk ke area layar (viewport).
- `viewport={{ once: true }}`: Animasinya hanya dimainkan sekali. Kalau user scroll ke atas dan ke bawah lagi, dia tidak berkedip ngulang terus.

---

## 5. Update Routing & Navbar

Supaya halaman yang kita buat bisa diakses, kita harus mendaftarkannya:

**1. Di `App.jsx` (Daftarkan Rute)**
```jsx
import Gallery from './pages/Gallery';
import About from './pages/About';

// Di dalam <Routes>
<Route path="/gallery" element={<Gallery />} />
<Route path="/about" element={<About />} />
```

**2. Di `Navbar.jsx` (Tambahkan Link)**
Kita tambahkan rutenya ke dalam array `navLinks`:
```jsx
const navLinks = [
  { path: '/', label: t('nav.home') },
  { path: '/catalog', label: t('nav.catalog') },
  { path: '/how-to-order', label: t('nav.howToOrder') },
  { path: '/gallery', label: t('nav.gallery') }, // BARU
  { path: '/about', label: t('nav.about') },     // BARU
];
```
Karena Navbar ini di-render menggunakan `.map()`, kita cukup menambahkan data ke array, dan menunya otomatis bertambah, lengkap dengan indikator aktif dan efek hover! Inilah gunanya memisahkan data dengan tampilan.

---

## 6. Tugas Latihan Mandiri 🚀

Mau mengasah skill? Coba lakukan ini:

1. **Ganti Foto About Us**
   Cari 3 foto yang kamu suka di internet, dan ganti foto placeholder ("Piko & Lea" utama, foto Piko, dan foto Lea) di file `About.jsx` dengan link gambarmu.

2. **Ubah Efek Lightbox**
   Di `Gallery.jsx`, coba ubah efek `exit={{ opacity: 0, scale: 0.9 }}` menjadi animasi *bounce* yang memantul.

Selamat mencoba, dan kita bersiap untuk Fase 3! 🌸
