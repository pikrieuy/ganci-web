import { Heart, Square, Circle, CircleDashed } from 'lucide-react';

// Mock data produk sesuai PRD Section 4.2
export const products = [
  {
    id: 'keychain-sketsa-bw',
    name_id: 'Keychain Sketsa B&W',
    name_en: 'B&W Sketch Keychain',
    desc_id: 'Keychain dengan gambar sketsa pensil/charcoal yang artistik. Cocok untuk kamu yang suka gaya minimalis dan elegan. Setiap goresan digambar tangan langsung oleh Piko dengan penuh detail dan cinta.',
    desc_en: 'Keychain with artistic pencil/charcoal sketch drawing. Perfect for those who love minimalist and elegant style. Every stroke is hand-drawn by Piko with full detail and love.',
    category: 'sketsa',
    price: 45000,
    duration: '7–10 hari',
    duration_en: '7–10 days',
    is_featured: true,
    is_active: true,
    sort_order: 1,
    material_id: 'Akrilik transparan, kertas sketsa premium',
    material_en: 'Transparent acrylic, premium sketch paper',
    size: '5 x 4 cm',
    photos: [
      '/foto_keychain/foto-1.jpg',
      '/foto_keychain/foto-2.jpg',
      '/foto_keychain/foto-3.jpg',
    ],
  },
  {
    id: 'keychain-acrylic-warna',
    name_id: 'Keychain Acrylic Warna',
    name_en: 'Full Color Acrylic Keychain',
    desc_id: 'Keychain full color dengan marker berkualitas tinggi. Warna cerah dan tahan lama, detail wajah yang memukau. Pilihan terbaik untuk hadiah yang colorful dan eye-catching!',
    desc_en: 'Full color keychain with high-quality markers. Bright and long-lasting colors, stunning facial details. The best choice for a colorful and eye-catching gift!',
    category: 'color',
    price: 55000,
    duration: '7–10 hari',
    duration_en: '7–10 days',
    is_featured: true,
    is_active: true,
    sort_order: 2,
    material_id: 'Akrilik transparan, marker Copic/Ohuhu',
    material_en: 'Transparent acrylic, Copic/Ohuhu markers',
    size: '5 x 4 cm',
    photos: [
      '/foto_keychain/foto-4.jpg',
      '/foto_keychain/foto-5.jpg',
      '/foto_keychain/foto-6.jpg',
    ],
  },
  {
    id: 'keychain-couple',
    name_id: 'Keychain Couple',
    name_en: 'Couple Keychain',
    desc_id: 'Dua wajah dalam satu casing — perfect untuk kamu dan pasangan! Bisa pilih gaya sketsa atau full color. Hadiah anniversary yang paling berkesan dan personal.',
    desc_en: 'Two faces in one casing — perfect for you and your partner! Choose sketch or full color style. The most memorable and personal anniversary gift.',
    category: 'couple',
    price: 75000,
    duration: '7–10 hari',
    duration_en: '7–10 days',
    is_featured: true,
    is_active: true,
    sort_order: 3,
    material_id: 'Akrilik transparan, pilihan pensil atau marker',
    material_en: 'Transparent acrylic, pencil or marker option',
    size: '6 x 4 cm',
    photos: [
      '/foto_keychain/foto-7.jpg',
      '/foto_keychain/foto-8.jpg',
      '/foto_keychain/foto-9.jpg',
    ],
  },
  {
    id: 'keychain-charm',
    name_id: 'Keychain + Charm',
    name_en: 'Keychain + Charm',
    desc_id: 'Sketsa cantik ditambah hiasan charm pita, manik-manik, atau bunga kering. Tampil lebih cute dan unik! Setiap charm dipilih dan dirakit oleh Lea dengan detail yang sempurna.',
    desc_en: 'Beautiful sketch plus decorative charm — ribbons, beads, or dried flowers. More cute and unique! Every charm is carefully selected and assembled by Lea with perfect detail.',
    category: 'charm',
    price: 65000,
    duration: '7–11 hari',
    duration_en: '7–11 days',
    is_featured: false,
    is_active: true,
    sort_order: 4,
    material_id: 'Akrilik transparan, charm pita/manik/bunga kering',
    material_en: 'Transparent acrylic, ribbon/bead/dried flower charms',
    size: '5 x 4 cm + charm',
    photos: [
      '/foto_keychain/foto-2.jpg',
      '/foto_keychain/foto-5.jpg',
      '/foto_keychain/foto-8.jpg',
    ],
  },
  {
    id: 'keychain-anime',
    name_id: 'Keychain Anime Style',
    name_en: 'Anime Style Keychain',
    desc_id: 'Gaya ilustrasi anime/manga yang kawaii! Wajahmu digambar ulang dalam gaya anime oleh Piko. Cocok untuk fans anime dan yang suka gaya Jepang.',
    desc_en: 'Kawaii anime/manga illustration style! Your face redrawn in anime style by Piko. Perfect for anime fans and those who love Japanese style.',
    category: 'anime',
    price: 60000,
    duration: '7–11 hari',
    duration_en: '7–11 days',
    is_featured: true,
    is_active: true,
    sort_order: 5,
    material_id: 'Akrilik transparan, digital print + hand-colored',
    material_en: 'Transparent acrylic, digital print + hand-colored',
    size: '5 x 4 cm',
    photos: [
      '/foto_keychain/foto-3.jpg',
      '/foto_keychain/foto-6.jpg',
      '/foto_keychain/foto-9.jpg',
    ],
  },
  {
    id: 'custom-request',
    name_id: 'Custom Request',
    name_en: 'Custom Request',
    desc_id: 'Punya ide unik sendiri? Ceritakan ke kami! Dari pilihan gaya gambar, bentuk casing, hingga hiasan tambahan — semua bisa disesuaikan dengan keinginanmu. Harga dan waktu pengerjaan sesuai kesepakatan.',
    desc_en: 'Have your own unique idea? Tell us about it! From drawing style, casing shape, to additional decorations — everything can be customized to your wishes. Price and production time by agreement.',
    category: 'custom',
    price: 0,
    duration: 'Negosiasi',
    duration_en: 'By agreement',
    is_featured: false,
    is_active: true,
    sort_order: 6,
    material_id: 'Sesuai permintaan',
    material_en: 'As requested',
    size: 'Custom',
    photos: [
      '/foto_keychain/foto-1.jpg',
      '/foto_keychain/foto-4.jpg',
      '/foto_keychain/foto-7.jpg',
    ],
  },
];

// Mock data testimoni
export const testimonials = [
  {
    id: 1,
    name: 'Rina S.',
    text: 'Bagus banget hasilnya! Mirip banget sama foto aslinya. Packaging-nya juga cantik banget!',
    text_en: 'The result is amazing! Looks exactly like the real photo. The packaging is also beautiful!',
    role: 'Keychain Sketsa B&W',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dika & Amel',
    text: 'Kita order keychain couple buat anniversary, hasilnya so cute! Lea rapih banget finishing-nya.',
    text_en: 'We ordered couple keychains for our anniversary, the result is so cute! Lea\'s finishing is really neat.',
    role: 'Keychain Couple',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 3,
    name: 'Santi M.',
    text: 'Suka banget sama anime style-nya! Piko talented banget, keliatan persis kayak karakter anime kesukaan gue.',
    text_en: 'Love the anime style so much! Piko is so talented, it looks exactly like an anime character.',
    role: 'Keychain Anime Style',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 4,
    name: 'Budi K.',
    text: 'Awalnya ragu, tapi setelah liat hasilnya langsung order lagi buat temen-temen. Recommended parah!',
    text_en: 'Was hesitant at first, but after seeing the result, immediately ordered more for friends. Recommended!',
    role: 'Keychain Acrylic Warna',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kevin P.',
    text: 'Pesen custom request pake charm tambahan, hasilnya beyond expectation. Estetik parah buat digantung di tas.',
    text_en: 'Custom requested with extra charm, the result was beyond expectation. Super aesthetic to hang on my bag.',
    role: 'Custom Request',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 6,
    name: 'Putri D.',
    text: 'Prosesnya gampang banget, dari awal chat sampai dikirim selalu di-update. Best service pokoknya!',
    text_en: 'The process was so easy, kept updated from the first chat until shipping. Best service overall!',
    role: 'Full Color + Charm',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 7,
    name: 'Andre W.',
    text: 'Ngasih foto buram dikit tapi Piko tetep bisa nggambar wajahnya dengan super detail. Gokil.',
    text_en: 'Gave a slightly blurry photo but Piko still drew the face in super detail. Amazing.',
    role: 'Keychain Sketsa B&W',
    image: 'https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=150&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 8,
    name: 'Nadia & Rizky',
    text: 'Matching keychain buat graduation gift. Temen kita seneng banget pas nerimanya. Makasih Piko & Lea!',
    text_en: 'Matching keychain for graduation gift. Our friend was so happy receiving it. Thanks Piko & Lea!',
    role: 'Keychain Couple',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
    rating: 5,
  },
  {
    id: 9,
    name: 'Cynthia R.',
    text: 'Pengirimannya aman banget, packaging box-nya tebel. Nggak nyangka dapet freebies sticker lucu juga.',
    text_en: 'Very safe shipping, thick packaging box. Didn\'t expect to get cute freebies stickers too.',
    role: 'Keychain Acrylic Warna',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop',
    rating: 5,
  },
];

// Pilihan bentuk casing
export const casingShapes = [
  { id: 'love', icon: <Heart size="1em" strokeWidth={1.5} />, name_id: 'Love', name_en: 'Heart' },
  { id: 'square', icon: <Square size="1em" strokeWidth={1.5} />, name_id: 'Kotak', name_en: 'Square' },
  { id: 'oval', icon: <CircleDashed size="1em" strokeWidth={1.5} />, name_id: 'Oval', name_en: 'Oval' },
  { id: 'circle', icon: <Circle size="1em" strokeWidth={1.5} />, name_id: 'Bulat', name_en: 'Circle' },
];

// Filter kategori
export const categories = [
  { id: 'all', name_id: 'Semua', name_en: 'All' },
  { id: 'sketsa', name_id: 'Sketsa B&W', name_en: 'Sketch B&W' },
  { id: 'color', name_id: 'Full Color', name_en: 'Full Color' },
  { id: 'couple', name_id: 'Couple', name_en: 'Couple' },
  { id: 'anime', name_id: 'Anime', name_en: 'Anime' },
  { id: 'charm', name_id: '+ Charm', name_en: '+ Charm' },
];

// Pengaturan
export const settings = {
  wa_number: '+6281200000000',
  ig_link: 'https://instagram.com/pikoandlea',
  ig_handle: '@pikoandlea',
  wa_prefill_id: 'Halo kak! Aku tertarik order {product}.\nBoleh minta info berikut:\n1. Foto referensi\n2. Pilihan bentuk: Love / Kotak / Oval / Bulat\n3. Gaya gambar: Sketsa B&W / Full Color / Anime style\n4. Tambahan charm? (Ya/Tidak)\n5. Catatan khusus',
  wa_prefill_en: 'Hi! I\'m interested in ordering {product}.\nCould you help me with:\n1. Reference photo\n2. Shape option: Heart / Square / Oval / Circle\n3. Drawing style: B&W Sketch / Full Color / Anime style\n4. Add charm? (Yes/No)\n5. Special notes',
};

// Helper: format harga ke Rupiah
export const formatPrice = (price) => {
  if (price === 0) return 'Negotiable';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Helper: buat link WA
export const getWhatsAppLink = (productName = '', lang = 'id') => {
  const number = settings.wa_number.replace(/[^0-9]/g, '');
  const template = lang === 'id' ? settings.wa_prefill_id : settings.wa_prefill_en;
  const message = productName ? template.replace('{product}', productName) : '';
  return `https://wa.me/${number}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
};

// Mock data galeri
export const galleryItems = [
  {
    id: 1,
    image: '/foto_keychain/foto-1.jpg',
    category: 'sketsa',
    caption: 'Keychain sketsa untuk hadiah wisuda',
    caption_en: 'Sketch keychain for graduation gift'
  },
  {
    id: 2,
    image: '/foto_keychain/foto-4.jpg',
    category: 'color',
    caption: 'Full color request dengan background pink',
    caption_en: 'Full color request with pink background'
  },
  {
    id: 3,
    image: '/foto_keychain/foto-7.jpg',
    category: 'couple',
    caption: 'Keychain couple anniversary ke-2 tahun',
    caption_en: '2nd anniversary couple keychain'
  },
  {
    id: 4,
    image: '/foto_keychain/foto-9.jpg',
    category: 'anime',
    caption: 'Anime style request: Gojo Satoru!',
    caption_en: 'Anime style request: Gojo Satoru!'
  },
  {
    id: 5,
    image: '/foto_keychain/foto-2.jpg',
    category: 'sketsa',
    caption: 'Sketsa wajah detail tinggi',
    caption_en: 'High detail face sketch'
  },
  {
    id: 6,
    image: '/foto_keychain/foto-5.jpg',
    category: 'color',
    caption: 'Keychain warna warni untuk bestie',
    caption_en: 'Colorful keychain for bestie'
  },
  {
    id: 7,
    image: '/foto_keychain/foto-3.jpg',
    category: 'sketsa',
    caption: 'Sketsa B&W vibes — clean dan elegan',
    caption_en: 'B&W sketch vibes — clean and elegant'
  },
  {
    id: 8,
    image: '/foto_keychain/foto-6.jpg',
    category: 'color',
    caption: 'Full color dengan tone lembut, super gemes',
    caption_en: 'Full color with soft tones, super cute'
  },
  {
    id: 9,
    image: '/foto_keychain/foto-8.jpg',
    category: 'couple',
    caption: 'Couple keychain buat hadiah ulang tahun',
    caption_en: 'Couple keychain for a birthday gift'
  },
  {
    id: 10,
    image: '/foto_keychain/foto-9.jpg',
    category: 'anime',
    caption: 'Anime style request — detail mata bikin hidup',
    caption_en: 'Anime style request — lively eye details'
  },
  {
    id: 11,
    image: '/foto_keychain/foto-1.jpg',
    category: 'sketsa',
    caption: 'Sketsa portrait yang “soft” cocok buat couple',
    caption_en: 'Soft portrait sketch perfect for couples'
  },
  {
    id: 12,
    image: '/foto_keychain/foto-4.jpg',
    category: 'color',
    caption: 'Request warna cerah biar standout di tas',
    caption_en: 'Bright color request to stand out on your bag'
  },
  {
    id: 13,
    image: '/foto_keychain/foto-7.jpg',
    category: 'couple',
    caption: 'Matching keychain untuk anniversary dinner',
    caption_en: 'Matching keychains for an anniversary dinner'
  },
  {
    id: 14,
    image: '/foto_keychain/foto-2.jpg',
    category: 'sketsa',
    caption: 'Sketsa close-up: detail rambut & shading rapi',
    caption_en: 'Close-up sketch: neat hair details & shading'
  },
  {
    id: 15,
    image: '/foto_keychain/foto-5.jpg',
    category: 'color',
    caption: 'Full color bestie set — lucu kalau dibuat sepasang',
    caption_en: 'Full color bestie set — cute as a pair'
  },
  {
    id: 16,
    image: '/foto_keychain/foto-8.jpg',
    category: 'couple',
    caption: 'Couple keychain dengan pose favorit kalian',
    caption_en: 'Couple keychain with your favorite pose'
  },
  {
    id: 17,
    image: '/foto_keychain/foto-3.jpg',
    category: 'anime',
    caption: 'Anime style: ekspresi dibuat lebih “kawaii”',
    caption_en: 'Anime style: extra “kawaii” expression'
  },
  {
    id: 18,
    image: '/foto_keychain/foto-6.jpg',
    category: 'sketsa',
    caption: 'Sketsa dengan vibe minimalis, cocok buat daily',
    caption_en: 'Minimalist sketch vibe, perfect for daily use'
  }
];
