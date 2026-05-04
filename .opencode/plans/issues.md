# Issues Plan - Landing Page Company Profile Padel Court Rental

> **Company Name:** PadelZone (placeholder, bisa diganti)
> **Tech Stack:** Vue 3 + Bun + Tailwind CSS
> **Design Theme:** Modern Glassmorphism (glass blur effect)
> **Color Palette:** Primary Green (#00C853 / #1B5E20), Black (#0D0D0D / #1A1A1A)

---

## Issue #1: Setup Project Vue 3 + Bun + Tailwind CSS

### Deskripsi
Setup project awal dari nol menggunakan Vue 3 dengan Bun sebagai package manager dan Tailwind CSS sebagai styling.

### Langkah Kerja
1. Buka terminal, arahkan ke folder project
2. Jalankan perintah setup Vue project:
   ```bash
   bun create vue@latest .
   ```
   - Pilih: TypeScript = No, JSX = No, Vue Router = Yes, Pinia = No, Vitest = No, ESLint = Yes, Prettier = Yes
3. Install dependencies:
   ```bash
   bun install
   ```
4. Install Tailwind CSS dan dependencies:
   ```bash
   bun add -D tailwindcss @tailwindcss/vite
   ```
5. Install lucide icons (untuk icon-icon di halaman):
   ```bash
   bun add lucide-vue-next
   ```
6. Setup Tailwind CSS:
   - Buat file `src/assets/main.css` dan isi dengan:
     ```css
     @import "tailwindcss";
     ```
   - Buka `vite.config.js`, tambahkan import Tailwind plugin:
     ```js
     import { defineConfig } from 'vite'
     import vue from '@vitejs/plugin-vue'
     import tailwindcss from '@tailwindcss/vite'

     export default defineConfig({
       plugins: [vue(), tailwindcss()],
     })
     ```
   - Di `src/main.js`, import CSS:
     ```js
     import './assets/main.css'
     ```
7. Setup custom color di `src/assets/main.css`:
   ```css
   @import "tailwindcss";

   @theme {
     --color-primary: #00C853;
     --color-primary-dark: #1B5E20;
     --color-dark: #0D0D0D;
     --color-dark-light: #1A1A1A;
     --color-dark-card: #1E1E1E;
   }
   ```
8. Jalankan dev server untuk test:
   ```bash
   bun run dev
   ```
9. Pastikan halaman berjalan di `http://localhost:5173`

### Acceptance Criteria
- [ ] Project Vue 3 berhasil dibuat
- [ ] Tailwind CSS ter-install dan berfungsi
- [ ] Custom color theme (hijau & hitam) sudah terdaftar
- [ ] `bun run dev` berhasil dan halaman tampil di browser

---

## Issue #2: Buat Struktur Komponen & Layout Dasar

### Deskripsi
Buat folder struktur komponen dan layout dasar halaman yang terdiri dari Navbar, Footer, dan area content utama.

### Struktur Folder
```
src/
├── assets/
│   └── main.css
├── components/
│   ├── Navbar.vue
│   ├── Footer.vue
│   ├── HeroSection.vue
│   ├── MatchSchedule.vue
│   ├── Services.vue
│   ├── Pricing.vue
│   ├── Testimonials.vue
│   └── EventNews.vue
├── views/
│   ├── HomeView.vue
│   └── AboutView.vue
├── App.vue
└── main.js
```

### Langkah Kerja
1. Buat semua folder dan file kosong sesuai struktur di atas
2. Edit `src/App.vue` menjadi layout utama:
   ```vue
   <script setup>
   import Navbar from './components/Navbar.vue'
   import Footer from './components/Footer.vue'
   </script>

   <template>
     <div class="min-h-screen bg-dark text-white">
       <Navbar />
       <RouterView />
       <Footer />
     </div>
   </template>
   ```
3. Edit `src/router/index.js`, tambahkan route untuk Home dan About:
   ```js
   import { createRouter, createWebHistory } from 'vue-router'
   import HomeView from '../views/HomeView.vue'

   const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes: [
       { path: '/', name: 'home', component: HomeView },
       { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
     ],
   })

   export default router
   ```
4. Buat `src/views/HomeView.vue` sebagai halaman utama yang import semua section:
   ```vue
   <script setup>
   import HeroSection from '../components/HeroSection.vue'
   import MatchSchedule from '../components/MatchSchedule.vue'
   import Services from '../components/Services.vue'
   import Pricing from '../components/Pricing.vue'
   import Testimonials from '../components/Testimonials.vue'
   import EventNews from '../components/EventNews.vue'
   </script>

   <template>
     <main>
       <HeroSection />
       <MatchSchedule />
       <Services />
       <Pricing />
       <Testimonials />
       <EventNews />
     </main>
   </template>
   ```
5. Buat `src/views/AboutView.vue` dengan placeholder content "Tentang Kami"
6. Buat `src/components/Navbar.vue` dengan menu navigasi:
   - Logo: "PadelZone"
   - Menu: Home, Tentang Kami, Event & Berita, Hubungi Kami
   - Style: fixed di atas, background gelap transparan dengan blur effect
7. Buat `src/components/Footer.vue` dengan isi:
   - Logo perusahaan
   - Link penting: Tentang Kami, Hubungi Kami, Event & Berita
   - Copyright text
   - Style: background gelap, text putih

### Acceptance Criteria
- [ ] Semua file dan folder sudah dibuat
- [ ] Navbar tampil fixed di atas dengan glass blur effect
- [ ] Footer tampil di bawah dengan link penting
- [ ] Halaman Home menampilkan layout kosong semua section (belum ada isi detail)
- [ ] Navigasi antar halaman (Home, About) berfungsi

---

## Issue #3: Buat Hero Section (Cover Besar)

### Deskripsi
Buat section pertama halaman utama berupa cover besar dengan text promosi yang menarik untuk pengunjung baru.

### Desain
- Full-screen height (100vh)
- Background: gradient gelap dengan aksen hijau
- Text besar "SELAMAT DATANG DI PADELZONE"
- Sub-text: "Lapangan Padel Standar Internasional #1 di Kota Anda"
- Tombol CTA: "Booking Sekarang" (warna hijau primary)
- Style: glass blur card untuk text area

### Langkah Kerja
1. Edit `src/components/HeroSection.vue`
2. Gunakan struktur berikut:
   ```vue
   <template>
     <section class="relative h-screen flex items-center justify-center overflow-hidden">
       <div class="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-primary-dark"></div>

       <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
         <div class="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl">
           <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
             SELAMAT DATANG DI<br>
             <span class="text-primary">PADELZONE</span>
           </h1>
           <p class="text-xl md:text-2xl text-gray-300 mb-8">
             Lapangan Padel Standar Internasional #1 di Kota Anda
           </p>
           <div class="flex flex-col sm:flex-row gap-4 justify-center">
             <button class="px-8 py-4 bg-primary text-dark font-bold rounded-full text-lg hover:bg-green-400 transition-all">
               Booking Sekarang
             </button>
             <button class="px-8 py-4 border-2 border-primary text-primary font-bold rounded-full text-lg hover:bg-primary hover:text-dark transition-all">
               Lihat Jadwal
             </button>
           </div>
         </div>
       </div>

       <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
         <span class="text-white/50 text-sm">Scroll untuk explore</span>
       </div>
     </section>
   </template>
   ```
3. Pastikan glass blur effect menggunakan class `backdrop-blur-xl bg-white/5 border border-white/10`

### Acceptance Criteria
- [ ] Hero section full-screen (100vh)
- [ ] Text "SELAMAT DATANG DI PADELZONE" tampil besar dan jelas
- [ ] Sub-text promosi tampil di bawah judul
- [ ] 2 tombol CTA: "Booking Sekarang" (hijau) dan "Lihat Jadwal" (outline)
- [ ] Glass blur effect pada card text
- [ ] Scroll indicator di bawah
- [ ] Responsive untuk mobile dan desktop

---

## Issue #4: Buat Section Jadwal Pertandingan

### Deskripsi
Buat section yang menampilkan jadwal pertandingan padel yang akan segera diselenggarakan.

### Data Jadwal (contoh)
| Tanggal | Waktu | Pertandingan | Kategori |
|---------|-------|-------------|----------|
| 15 Mei 2026 | 14:00 | Tim A vs Tim B | Turnamen Amateur |
| 22 Mei 2026 | 16:00 | Tim C vs Tim D | Turnamen Pro |
| 29 Mei 2026 | 10:00 | Tim E vs Tim F | Friendly Match |

### Langkah Kerja
1. Edit `src/components/MatchSchedule.vue`
2. Gunakan data dummy dalam array:
   ```js
   const matches = [
     { date: '15 Mei 2026', time: '14:00', match: 'Tim A vs Tim B', category: 'Turnamen Amateur' },
     { date: '22 Mei 2026', time: '16:00', match: 'Tim C vs Tim D', category: 'Turnamen Pro' },
     { date: '29 Mei 2026', time: '10:00', match: 'Tim E vs Tim F', category: 'Friendly Match' },
   ]
   ```
3. Layout:
   - Judul section: "JADWAL PERTANDINGAN TERDEKAT"
   - Card glass blur untuk setiap jadwal
   - Badge warna untuk kategori
4. Style card:
   ```html
   <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6">
   ```
5. Grid layout: 1 kolom di mobile, 3 kolom di desktop

### Acceptance Criteria
- [ ] Judul section "JADWAL PERTANDINGAN TERDEKAT"
- [ ] 3 card jadwal tampil dengan data dummy
- [ ] Setiap card memiliki: tanggal, waktu, pertandingan, kategori
- [ ] Badge kategori berwarna berbeda
- [ ] Glass blur effect pada setiap card
- [ ] Responsive grid layout

---

## Issue #5: Buat Section Layanan Lapangan

### Deskripsi
Buat section yang menampilkan 6 layanan utama lapangan padel dengan deskripsi singkat.

### Daftar Layanan
| No | Layanan | Deskripsi | Icon |
|----|---------|-----------|------|
| 1 | 6 Lapangan Standar Internasional | Lapangan padel berstandar internasional dengan permukaan premium | Trophy |
| 2 | Penyewaan Raket | Raket berkualitas tinggi siap pakai untuk semua level pemain | Racket |
| 3 | Sewa Outfit | Jersey dan perlengkapan padel tersedia untuk disewa | Shirt |
| 4 | Wasit Profesional | Wasit bersertifikat untuk pertandingan resmi dan turnamen | UserCheck |
| 5 | Kebersihan Terjamin | Lapangan selalu dibersihkan dan disanitasi sebelum digunakan | Sparkles |
| 6 | Fasilitas Premium | Ruang ganti, shower, parkir luas, dan area tunggu nyaman | Star |

### Langkah Kerja
1. Edit `src/components/Services.vue`
2. Gunakan data array untuk layanan:
   ```js
   import { Trophy, Racket, Shirt, UserCheck, Sparkles, Star } from 'lucide-vue-next'

   const services = [
     { icon: Trophy, title: '6 Lapangan Standar Internasional', desc: 'Lapangan padel berstandar internasional dengan permukaan premium' },
     { icon: Racket, title: 'Penyewaan Raket', desc: 'Raket berkualitas tinggi siap pakai untuk semua level pemain' },
     { icon: Shirt, title: 'Sewa Outfit', desc: 'Jersey dan perlengkapan padel tersedia untuk disewa' },
     { icon: UserCheck, title: 'Wasit Profesional', desc: 'Wasit bersertifikat untuk pertandingan resmi dan turnamen' },
     { icon: Sparkles, title: 'Kebersihan Terjamin', desc: 'Lapangan selalu dibersihkan dan disanitasi sebelum digunakan' },
     { icon: Star, title: 'Fasilitas Premium', desc: 'Ruang ganti, shower, parkir luas, dan area tunggu nyaman' },
   ]
   ```
3. Layout:
   - Judul section: "LAYANAN KAMI"
   - Sub-judul: "Semua yang Anda butuhkan untuk pengalaman bermain padel terbaik"
   - Grid 3 kolom di desktop, 2 kolom di tablet, 1 kolom di mobile
4. Style card:
   ```html
   <div class="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all">
     <div class="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
       <!-- icon -->
     </div>
     <h3 class="text-xl font-bold text-white mb-2">...</h3>
     <p class="text-gray-400">...</p>
   </div>
   ```
5. Tambahkan hover effect: border berubah jadi hijau saat hover

### Acceptance Criteria
- [ ] Judul section "LAYANAN KAMI"
- [ ] 6 card layanan tampil lengkap dengan icon
- [ ] Setiap card memiliki icon, judul, dan deskripsi
- [ ] Hover effect pada card (border hijau)
- [ ] Glass blur effect pada card
- [ ] Responsive grid: 3 kolom desktop, 2 tablet, 1 mobile

---

## Issue #6: Buat Section Pricelist (3 Tier)

### Deskripsi
Buat section pricing dengan 3 paket harga yang menggunakan nama bertema padel.

### Paket Harga

#### Paket 1: "SERVE" (Starter) - Rp 250.000
- Sewa lapangan 1 set permainan (maks. 1 jam main)
- Sewa 2x raket
- 2x drink & snack
- 10 membership poin

#### Paket 2: "RALLY" (Mid-tier) - Rp 400.000
- Sewa lapangan 2 set permainan (maks. 2 jam main)
- Sewa 2x raket
- 4x drink & snack
- 20 membership poin
- Wasit profesional

#### Paket 3: "GRAND SLAM" (Premium) - Rp 500.000
- Sewa lapangan 3 set permainan (maks. 3 jam main)
- Sewa 4x raket
- 4x drink & snack
- 40 membership poin
- Wasit profesional

### Langkah Kerja
1. Edit `src/components/Pricing.vue`
2. Gunakan data array untuk paket:
   ```js
   import { Check } from 'lucide-vue-next'

   const packages = [
     {
       name: 'SERVE',
       label: 'Starter',
       price: 250000,
       features: [
         'Lapangan 1 set (maks. 1 jam)',
         'Sewa 2x raket',
         '2x Drink & Snack',
         '10 Membership Poin',
       ],
       popular: false,
     },
     {
       name: 'RALLY',
       label: 'Most Popular',
       price: 400000,
       features: [
         'Lapangan 2 set (maks. 2 jam)',
         'Sewa 2x raket',
         '4x Drink & Snack',
         '20 Membership Poin',
         'Wasit Profesional',
       ],
       popular: true,
     },
     {
       name: 'GRAND SLAM',
       label: 'Premium',
       price: 500000,
       features: [
         'Lapangan 3 set (maks. 3 jam)',
         'Sewa 4x raket',
         '4x Drink & Snack',
         '40 Membership Poin',
         'Wasit Profesional',
       ],
       popular: false,
     },
   ]

   function formatPrice(price) {
     return `Rp ${price.toLocaleString('id-ID')}`
   }
   ```
3. Layout:
   - Judul section: "PAKET HARGA"
   - Sub-judul: "Pilih paket yang sesuai dengan kebutuhan bermain Anda"
   - 3 card pricing berdampingan (grid 3 kolom desktop, 1 kolom mobile)
4. Style card:
   - Card biasa: `backdrop-blur-md bg-white/5 border border-white/10`
   - Card popular (RALLY): tambahkan `border-primary`, badge "MOST POPULAR" di atas, sedikit lebih besar
   - Harga: text besar format `Rp 250.000`
   - Fitur: list dengan icon check hijau
   - Tombol "Pilih Paket" di bawah setiap card

### Acceptance Criteria
- [ ] Judul section "PAKET HARGA"
- [ ] 3 paket tampil: SERVE, RALLY, GRAND SLAM
- [ ] Harga sesuai: Rp 250.000 / Rp 400.000 / Rp 500.000
- [ ] Fitur di setiap paket sesuai spesifikasi
- [ ] Paket RALLY ditandai sebagai "Most Popular" dengan style berbeda
- [ ] Tombol "Pilih Paket" di setiap card
- [ ] Glass blur effect pada semua card
- [ ] Responsive layout

---

## Issue #7: Buat Section Testimoni Pelanggan

### Deskripsi
Buat section yang menampilkan testimoni dari pelanggan yang sudah bermain di PadelZone.

### Data Testimoni (contoh)
| Nama | Rating | Testimoni |
|------|--------|-----------|
| Andi Pratama | 5/5 | "Lapangan terbaik yang pernah saya mainkan! Bersih dan fasilitas lengkap." |
| Sarah Wijaya | 5/5 | "Wasit profesional dan raket sewanya berkualitas. Pasti balik lagi!" |
| Budi Santoso | 4/5 | "Paket Grand Slam worth banget! Cocok untuk turnamen internal kantor." |

### Langkah Kerja
1. Edit `src/components/Testimonials.vue`
2. Gunakan data array:
   ```js
   import { Star } from 'lucide-vue-next'

   const testimonials = [
     {
       name: 'Andi Pratama',
       role: 'Pemain Rutin',
       rating: 5,
       text: 'Lapangan terbaik yang pernah saya mainkan! Bersih dan fasilitas lengkap.',
       avatar: 'A',
     },
     {
       name: 'Sarah Wijaya',
       role: 'Pemain Amateur',
       rating: 5,
       text: 'Wasit profesional dan raket sewanya berkualitas. Pasti balik lagi!',
       avatar: 'S',
     },
     {
       name: 'Budi Santoso',
       role: 'Corporate Player',
       rating: 4,
       text: 'Paket Grand Slam worth banget! Cocok untuk turnamen internal kantor.',
       avatar: 'B',
     },
   ]
   ```
3. Layout:
   - Judul section: "APA KATA MEREKA"
   - Sub-judul: "Testimoni dari pelanggan setia PadelZone"
   - 3 card testimoni berdampingan
4. Style card:
   - Glass blur card
   - Avatar inisial huruf (lingkaran hijau dengan huruf putih)
   - Rating bintang (icon Star, fill kuning untuk bintang aktif)
   - Text testimoni
   - Nama dan role di bawah

### Acceptance Criteria
- [ ] Judul section "APA KATA MEREKA"
- [ ] 3 testimoni tampil dengan nama, role, rating, dan text
- [ ] Rating bintang tampil visual (bintang kuning)
- [ ] Avatar inisial huruf dengan lingkaran hijau
- [ ] Glass blur effect pada card
- [ ] Responsive layout

---

## Issue #8: Buat Section Event & News

### Deskripsi
Buat section yang menampilkan event dan berita terbaru seputar padel di PadelZone.

### Data Event & News (contoh)
| Judul | Tanggal | Kategori | Deskripsi Singkat |
|-------|---------|----------|-------------------|
| Turnamen PadelZone Open 2026 | 1 Juni 2026 | Event | Turnamen terbuka pertama PadelZone dengan total hadiah 10 juta rupiah |
| Tips Bermain Padel untuk Pemula | 20 Mei 2026 | News | Panduan lengkap untuk pemula yang baru mulai bermain padel |
| Workshop Teknik Smash | 10 Juni 2026 | Event | Belajar teknik smash dari pelatih profesional |

### Langkah Kerja
1. Edit `src/components/EventNews.vue`
2. Gunakan data array:
   ```js
   const posts = [
     {
       title: 'Turnamen PadelZone Open 2026',
       date: '1 Juni 2026',
       category: 'Event',
       desc: 'Turnamen terbuka pertama PadelZone dengan total hadiah 10 juta rupiah.',
     },
     {
       title: 'Tips Bermain Padel untuk Pemula',
       date: '20 Mei 2026',
       category: 'News',
       desc: 'Panduan lengkap untuk pemula yang baru mulai bermain padel.',
     },
     {
       title: 'Workshop Teknik Smash',
       date: '10 Juni 2026',
       category: 'Event',
       desc: 'Belajar teknik smash dari pelatih profesional berpengalaman.',
     },
   ]
   ```
3. Layout:
   - Judul section: "EVENT & BERITA"
   - Sub-judul: "Ikuti event terbaru dan tips seputar dunia padel"
   - Grid 3 kolom (desktop), 1 kolom (mobile)
4. Style card:
   - Glass blur card
   - Placeholder area gambar (gradient abu-abu gelap)
   - Badge kategori: "Event" (hijau `bg-primary/20 text-primary`), "News" (putih `bg-white/10 text-white`)
   - Judul, tanggal, dan deskripsi
   - Link "Baca Selengkapnya" di bawah setiap card

### Acceptance Criteria
- [ ] Judul section "EVENT & BERITA"
- [ ] 3 card post tampil dengan gambar placeholder, judul, tanggal, kategori, deskripsi
- [ ] Badge kategori berwarna berbeda (Event vs News)
- [ ] Link "Baca Selengkapnya" di setiap card
- [ ] Glass blur effect pada card
- [ ] Responsive layout

---

## Issue #9: Sempurnakan Navbar & Footer

### Deskripsi
Perbaiki dan lengkapi komponen Navbar dan Footer dengan semua link dan fitur yang diperlukan untuk SEO.

### Navbar
- Logo "PadelZone" di kiri (text hijau)
- Menu di kanan: Home, Tentang Kami, Event & Berita, Hubungi Kami
- Tombol "Booking" di paling kanan (warna hijau, rounded full)
- Mobile: hamburger menu yang bisa toggle
- Style: fixed top, backdrop blur, border bawah tipis transparan

### Footer
**Kolom 1 - Brand:**
- Logo PadelZone
- Deskripsi singkat: "Lapangan padel standar internasional dengan fasilitas terlengkap dan pelayanan terbaik."

**Kolom 2 - Halaman:**
- Tentang Kami
- Hubungi Kami
- Event & Berita
- Pricelist

**Kolom 3 - Kontak:**
- Alamat: Jl. Padel Indah No. 1, Jakarta
- Telepon: +62 812-3456-7890
- Email: info@padelzone.id

**Kolom 4 - Social Media:**
- Instagram icon
- TikTok icon
- YouTube icon

**Bawah footer:**
- Copyright: `© 2026 PadelZone. All rights reserved.`

### Langkah Kerja
1. Update `src/components/Navbar.vue` dengan mobile menu toggle
2. Update `src/components/Footer.vue` dengan grid 4 kolom dan social media icons
3. Update `src/views/AboutView.vue` untuk halaman "Tentang Kami"
4. Buat `src/views/ContactView.vue` untuk halaman "Hubungi Kami"

### Acceptance Criteria
- [ ] Navbar fixed di atas dengan glass blur effect
- [ ] Navbar responsive: hamburger menu di mobile
- [ ] Footer dengan 4 kolom layout
- [ ] Footer link ke semua halaman penting
- [ ] Social media icons di footer
- [ ] Copyright text di footer
- [ ] Halaman Tentang Kami dan Hubungi Kami tersedia

---

## Issue #10: Responsive, Polish & Final Review

### Deskripsi
Finalisasi seluruh halaman, pastikan responsive di semua ukuran layar, dan lakukan polishing akhir.

### Checklist Responsive
- [ ] Hero section: text dan tombol menyesuaikan di mobile
- [ ] Jadwal: card stack vertikal di mobile
- [ ] Layanan: grid 1 kolom di mobile, 2 di tablet, 3 di desktop
- [ ] Pricing: card stack vertikal di mobile
- [ ] Testimoni: card stack vertikal di mobile
- [ ] Event & News: card stack vertikal di mobile
- [ ] Navbar: hamburger menu di mobile
- [ ] Footer: 1 kolom di mobile, 2 di tablet, 4 di desktop

### Polish & Enhancement
1. Tambahkan smooth scroll behavior di `main.css`:
   ```css
   html {
     scroll-behavior: smooth;
   }
   ```
2. Pastikan semua warna konsisten (hijau primary, hitam background)
3. Pastikan semua glass blur effect konsisten:
   - Card utama: `backdrop-blur-xl bg-white/5 border border-white/10`
   - Card sekunder: `backdrop-blur-md bg-white/5 border border-white/10`
4. Test di browser Chrome/Edge desktop dan mobile
5. Jalankan linter:
   ```bash
   bun run lint
   ```
6. Build production:
   ```bash
   bun run build
   ```

### Acceptance Criteria
- [ ] Semua section responsive di mobile, tablet, desktop
- [ ] Smooth scroll berfungsi
- [ ] Warna dan style konsisten di seluruh halaman
- [ ] Glass blur effect konsisten
- [ ] `bun run lint` tanpa error
- [ ] `bun run build` sukses tanpa error
- [ ] Tidak ada console error di browser

---

## Ringkasan Urutan Pengerjaan

| Urutan | Issue | Estimasi |
|--------|-------|----------|
| 1 | #1 Setup Project | 30 menit |
| 2 | #2 Struktur & Layout | 45 menit |
| 3 | #3 Hero Section | 45 menit |
| 4 | #4 Jadwal Pertandingan | 30 menit |
| 5 | #5 Layanan Lapangan | 45 menit |
| 6 | #6 Pricelist | 45 menit |
| 7 | #7 Testimoni | 30 menit |
| 8 | #8 Event & News | 45 menit |
| 9 | #9 Navbar & Footer Final | 45 menit |
| 10 | #10 Responsive & Polish | 60 menit |
| | **Total Estimasi** | **~7 jam** |

---

## Catatan Penting

1. **Glass Blur Effect Formula:**
   - Gunakan class Tailwind: `backdrop-blur-xl bg-white/5 border border-white/10`
   - Untuk efek lebih kuat: `backdrop-blur-2xl bg-white/10 border border-white/20`

2. **Warna yang Digunakan:**
   - Primary Green: `#00C853` (class: `text-primary`, `bg-primary`)
   - Dark Green: `#1B5E20` (class: `text-primary-dark`, `bg-primary-dark`)
   - Dark Background: `#0D0D0D` (class: `bg-dark`)
   - Dark Light: `#1A1A1A` (class: `bg-dark-light`)
   - Dark Card: `#1E1E1E` (class: `bg-dark-card`)

3. **Tips untuk AI Model / Junior Developer:**
   - Kerjakan issue satu per satu secara berurutan
   - Test setiap issue sebelum lanjut ke issue berikutnya
   - Gunakan `bun run dev` untuk lihat perubahan real-time
   - Jika stuck, cek dokumentasi Tailwind CSS: https://tailwindcss.com/docs
   - Jika stuck, cek dokumentasi Vue 3: https://vuejs.org/guide/introduction.html
